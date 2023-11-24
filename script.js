let tabLinks = document.getElementsByClassName("tab-links")
let tabContents = document.getElementsByClassName("tab-contents")

function opentab(tabName) {
  for(link of tabLinks) {
    link.classList.remove("active-link")
  }
  for(content of tabContents) {
    content.classList.remove("active-tab")
  }
  event.currentTarget.classList.add("active-link")
  document.getElementById(tabName).classList.add("active-tab")
}

let sidemenu = document.getElementById('side-menu')
function openmenu() {
  sidemenu.style.right = "0";
}

function closemenu() {
  sidemenu.style.right = "-200px"
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbx8DSpGvAWYg6Vjjr4ykdvTqjg_t7C9vCC52M1F3i-ALSLT2OXD8ZiXuEUlq21NFG-7xg/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById('msg')

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => {
    msg.innerHTML = "Message sent successfully!"
    setTimeout(function() {
      msg.innerHTML = ""
    },5000)
    form.reset()
  })
  .catch(error => console.error('Error!', error.message))
})

document.addEventListener('DOMContentLoaded', function () {
  const icons = document.querySelectorAll('.tech-container img');

  icons.forEach(icon => {
    const randomDuration = getRandomNumber(2, 5); 
    const randomDelay = getRandomNumber(0, 2);
    const randomTranslation = getRandomNumber(5, 20); 

    icon.style.animationDuration = `${randomDuration}s`;
    icon.style.animationDelay = `-${randomDelay}s`; 
    icon.style.animationName = `floating${Math.floor(Math.random() * 100)}`; 

    // Define the dynamic keyframes
    const dynamicKeyframes = `
      0% { transform: translate(0, 0px); }
      50% { transform: translate(0, ${randomTranslation}px); }
      100% { transform: translate(0, 0px); }
    `;

    const styleSheet = document.styleSheets[0];
    styleSheet.insertRule(`@keyframes ${icon.style.animationName} {${dynamicKeyframes}}`, styleSheet.cssRules.length);
  });

  function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
  }
});