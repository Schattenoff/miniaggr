const urlParams = new URLSearchParams(window.location.search);

const table = urlParams.get('t');

const aziatLink = document.getElementById('aziat');
const farshLink = document.getElementById('farsh');

aziatLink.href = `https://qr.foodpicasso.com/aziatkvartal?address=ef622&t=${table}`;
farshLink.href = `https://qr.foodpicasso.com/farshs?address=f8829&t=${table}`;
