onmessage = function(e) {
  if (e.data.action === 'generateAnimations') {
    const count = e.data.count;
    const animations = [];

    for (let i = 0; i < count; i++) {
      const duration = getRandomNumber(2, 5); 
      const delay = getRandomNumber(0, 2); 
      const translation = getRandomNumber(5, 20); 
      const animationName = `floating${Math.floor(Math.random() * 100)}`;
      
      animations.push({ duration, delay, translation, animationName });
    }

    postMessage(animations); 
  }
};

function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min;
}
