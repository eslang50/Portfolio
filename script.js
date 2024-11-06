const sendMailButton = document.getElementById('submit-btn')
sendMailButton.addEventListener('click', function(e) {
  e.preventDefault()
  let params = {
    name : document.getElementById('name').value,
    email : document.getElementById('email').value,
    message : document.getElementById('message').value,
  }
  const serviceID = 'service_yehbjnb'
  const templateID = 'template_3kfifhh'
  
  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
    document.getElementById('name').value = ""
    document.getElementById('email').value = ""
    document.getElementById('message').value = ""
  })
    .catch((err) => console.error(err))
})


const worker = new Worker('logoWorker.js');

// Handle response from the worker
worker.onmessage = function (e) {
  const animations = e.data;

  const icons = document.querySelectorAll('.tech-container img');
  icons.forEach((icon, index) => {
    const { duration, delay, translation, animationName } = animations[index];
    icon.style.animationDuration = `${duration}s`;
    icon.style.animationDelay = `-${delay}s`;
    icon.style.animationName = animationName;

    const dynamicKeyframes = `
      0% { transform: translate(0, 0px); }
      50% { transform: translate(0, ${translation}px); }
      100% { transform: translate(0, 0px); }
    `;

    const styleSheet = document.styleSheets[0];
    styleSheet.insertRule(`@keyframes ${animationName} {${dynamicKeyframes}}`, styleSheet.cssRules.length);
  });
};

document.addEventListener('DOMContentLoaded', function () {
  worker.postMessage({ action: 'generateAnimations', count: document.querySelectorAll('.tech-container img').length });
});

let tabLinks = document.getElementsByClassName("tab-links");
let tabContents = document.getElementsByClassName("tab-contents");

function opentab(tabName) {
  for (link of tabLinks) {
    link.classList.remove("active-link");
  }
  for (content of tabContents) {
    content.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabName).classList.add("active-tab");
}

let sidemenu = document.getElementById('side-menu');
function openmenu() {
  sidemenu.style.right = "0";
}

function closemenu() {
  sidemenu.style.right = "-200px";
}

document.getElementById('logo').addEventListener('click', () => {
  location.reload();
});