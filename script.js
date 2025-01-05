const body = document.getElementsByTagName('body')[0];
const generateBtn = document.querySelector('.generate');
const refreshBtn = document.querySelector('.generate-refresh');
const generatedColor = document.querySelector('p');
let x;

function generateRandomColor() {
  randomColor = Math.floor(Math.random() * 16777215).toString(16);
  localStorage.setItem('color', JSON.stringify(randomColor));
  x = JSON.parse(localStorage.getItem('color'));
  console.log(x);
  body.style.backgroundColor = `#${x}`;
  generatedColor.innerHTML = `Generated Color: ${x}`;
}

function refreshColor() {
  body.style.backgroundColor = `#ffffff`;
  generatedColor.innerHTML = `Generated Color Default: #ffffff`;
  x = '#ffffff';
  localStorage.setItem('color', JSON.stringify(x));
}

body.style.backgroundColor = `#${JSON.parse(localStorage.getItem('color'))}`;
generatedColor.innerHTML = `Generated Color: ${JSON.parse(
  localStorage.getItem('color')
)}`;

generateBtn.addEventListener('click', generateRandomColor);
refreshBtn.addEventListener('click', refreshColor);
