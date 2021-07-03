const filterByType = (type, ...values) => values.filter(value => typeof value === type),
// при вызове создает массив с элементами инпута прошедшими проверку
//если typeof values = выбранному в селекторе, то заносит в массив 

	hideAllResponseBlocks = () => {
		const responseBlocksArray = Array.from(document.querySelectorAll('div.dialog__response-block'));
		//создаёт новый экземпляр Array из всех div.dialog__response-block
		responseBlocksArray.forEach(block => block.style.display = 'none');
		//перебираем массив и каждому элементу добавляем стиль display = 'none'
	},

	showResponseBlock = (blockSelector, msgText, spanSelector) => {//принимаем параметры
		hideAllResponseBlocks();//Вызываем функцию hideAllResponseBlocks чтоб скрыть предыдущий вывод
		document.querySelector(blockSelector).style.display = 'block';
		//добавляем дисплей блок параметру который пришел
		if (spanSelector) { //если есть блок с ID переданном в параметре то
			document.querySelector(spanSelector).textContent = msgText;
			//в переданный параметром класс вписываем текст так же переданный в параметре
		}
	},

	showError = msgText => showResponseBlock('.dialog__response-block_error', msgText, '#error'),
	//Вызываем функцию showResponseBlock и передаем параметры
	showResults = msgText => showResponseBlock('.dialog__response-block_ok', msgText, '#ok'),
	//Вызываем функцию showResponseBlock и передаем параметр
	showNoResults = () => showResponseBlock('.dialog__response-block_no-results'),
	//Вызываем функцию showResponseBlock и передаем параметры

	tryFilterByType = (type, values) => {//создали функцию которая принимает 2ва параметра
		try { //тут пишем код который выполнится если нет ошибок
			const valuesArray = eval(`filterByType('${type}', ${values})`).join(", ");
			//присваиваем выполнение кода в скобках (вызываем функцию filterByType и передаем 2 параметра)
			// 1параметр значение селектора  2значение инпута .....
			const alertMsg = (valuesArray.length) ? // если valuesArray не пуст то
				`Данные с типом ${type}: ${valuesArray}` : // присваиваем переменной вот это
				`Отсутствуют данные типа ${type}`;// если пуст то это
			showResults(alertMsg);//вызываем функцию и передаем ей параметр
		} catch (e) {//перехватываем ошибку 
			showError(`Ошибка: ${e}`); //вызываем функцию и передаем параметр
		}
	};

const filterButton = document.querySelector('#filter-btn'); //Присваиваем переменной
//filterButton кнопку фильтровать лучше конечно делать это через getElementById

filterButton.addEventListener('click', e => { //Вешаем слушателя на кнопку. При событии клик 
	//сработает функция 
	const typeInput = document.querySelector('#type');//Присваиваем переменной
	//typeInput селектор с пунктами. лучше конечно делать это через getElementById
	const dataInput = document.querySelector('#data');//Присваиваем переменной
	//dataInput поле инпут для ввода. лучше конечно делать это через getElementById

	if (dataInput.value === '') { //Если value инпута пусто 
		dataInput.setCustomValidity('Поле не должно быть пустым!');//Вывести сообщение об ошибке
		showNoResults(); //Вызываем функцию showNoResults
	} else { // Иначе. Если не пусто 
		dataInput.setCustomValidity('');//Пустое сообщение в методе очищает состояние ошибки.
		e.preventDefault(); //отменяем стандартные действия кнопки
		tryFilterByType(typeInput.value.trim(), dataInput.value.trim());//вызываем функцию и передаем
		//значение селектора у которго убираем пробелы с начала и конца
		//(так как значение забито в HTML не вижу в этом смыла, оно без пробелов и так)
		//и + передаем введенное значение без пробелов с начала и конца
	}
});

