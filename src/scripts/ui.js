// boilerplate code ... this can be replaced or refactored however your project requires it to
const ui = document.querySelector('.ui');

// #region DevWatermarks
const title = ['T','W','I','Z','T','D','_','D','E','V','E','L','O','P','M','E','N','T'];

const tElement = document.createElement('div');
tElement.innerText = 'Twiztd_Development';
tElement.style.color = 'white';
tElement.style.fontFamily = 'cursive';
tElement.style.fontSize = '22px';
tElement.style.fontWeight = 900;
tElement.style.display = 'flex';
tElement.style.position = 'absolute';
tElement.style.bottom = '10px';
tElement.style.opacity = '10%';
tElement.style.userSelect = 'none';

const img = document.createElement('img');
img.src = './assets/img/js_logo120x120.png';
img.alt = '';
img.style.scale = 3;
img.style.position = 'absolute';
img.style.top = '50%';
img.style.left = '50%';
img.style.transform = 'translate(-15%,-10%)';
img.style.right = 0;
img.style.opacity = '10%';
img.style.userSelect = 'none';
// img.style.border = '4px solid white';
//#endregion

ui.append(tElement, img);

ui.style.display = 'flex';