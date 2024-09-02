const urlParams = new URLSearchParams(window.location.search);

const table = urlParams.get('t');

const aziatLink = document.getElementById('aziat');
const farshLink = document.getElementById('farsh');

aziatLink.href = `https://qr.foodpicasso.com/aziatkvartal?&t=${table}&r=qr`;
farshLink.href = `https://qr.foodpicasso.com/farshs?&t=${table}`;
