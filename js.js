'use strict';

let cssText = document.querySelector('.css-text'),
    selectorText = document.querySelector('.selector-text'),
    cssStyleHeight = document.querySelector('.css-style-height'),
    listStyleWidth = document.querySelector('.list-style-width'),
    listStyleBg = document.querySelector('.list-style-bg'),
    listStyleFontSize = document.querySelector('.list-style-fontSize'),
    btnStar = document.getElementById('btn-start');

function DomElement () {
    this.selector = selectorText;
    this.height = cssStyleHeight;
    this.width = listStyleWidth;
    this.bg = listStyleBg;
    this.fontSize = listStyleFontSize;
}
DomElement.prototype.render = function() {
    let val = this.selector.value;
    let valInd = val.charAt(0);
    
    if ( valInd === '.') {
        const newElement = document.createElement('div');
        newElement.classList.add(val.slice(1));
        cssText.insertAdjacentElement('afterbegin', newElement);
    }else if (valInd === '#') {
        const newElement = document.createElement('div');
        newElement.setAttribute('id', val.slice(1));
        cssText.insertAdjacentElement('afterbegin', newElement);
    } else {
        alert('Нужна . или # перед буковками');
    }
    this.renderStyle();
};
DomElement.prototype.height = function() {

};
DomElement.prototype.renderStyle = function() {
    let h = this.height.value,
        w = this.width.value,
        b = +this.bg.value,
        a = this.fontSize.value;

    let val = selectorText.value;
    let newElem = document.querySelector(val);
    newElem.textContent = 'JS';

    newElem.style.height = h + 'px';
    newElem.style.width = w + 'px';
    if (b === 1) {
        newElem.style.background = '#000000';
    } else if (b === 2) {
        newElem.style.background = '#0094ff';
    } else if (b === 3) {
        newElem.style.background = '#00ff04';
    }
    newElem.style.fontSize = a + 'px';
    


};

let obj = new DomElement();


btnStar.addEventListener('click', function(){
    obj.render();
});

//let blockValue = cssText.querySelector(selectorText.value);