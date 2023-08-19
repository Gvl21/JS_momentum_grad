const clock = document.querySelector('#clock-part');
const cal = document.querySelector('#cal-part');

function setClock() {
  const day = new Date();
  const year = day.getFullYear();
  const month = String(day.getMonth() + 1).padStart(2, 0);
  const date = String(day.getDate()).padStart(2, 0);
  const hour = String(day.getHours()).padStart(2, 0);
  const minute = String(day.getMinutes()).padStart(2, 0);
  const sec = String(day.getSeconds()).padStart(2, 0);

  cal.textContent = `${year} - ${month} - ${date}`;
  clock.textContent = `${hour} : ${minute} : ${sec}`;
}

setClock();
setInterval(setClock, 1000);
