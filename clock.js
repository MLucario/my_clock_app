const clock = document.querySelector('.clock');

const tick = () => {
  const now = new Date();
  const hour = now.getHours();
  const min = now.getMinutes();
  const second = ('0' + now.getSeconds()).slice(-2);

  const html = `<span>${hour}</span> : <span>${min}</span> : <span>${second}</span>`;
  clock.innerHTML = html;
};

setInterval(tick, 1000);
