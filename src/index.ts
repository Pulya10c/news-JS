import App from './components/app/app';
import './global.css';

const app = new App();
app.start();
  

let buttonSwitch = document.querySelector('.button-theme') as HTMLElement;
let icon = document.querySelector('.material-symbols-outlined') as HTMLElement;

buttonSwitch.addEventListener('click', changeTheme);

function changeTheme() {
   if (icon.innerHTML === 'light_mode') {
    icon.innerHTML = 'dark_mode'
    } else {
        icon.innerHTML = 'light_mode'
    }
    icon.classList.toggle('button-light')
    document.body.classList.toggle('body-light');
    let sourceItem = document.querySelectorAll('.source__item');
    sourceItem.forEach(el => {el.classList.toggle('source__item-light')})
}
