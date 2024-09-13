let container = document.getElementById('container');
let container2 = document.getElementById('container-2');
let container3 = document.getElementById('container-3')
let displayRhyme = 0;
let displayVoucher = 0;

function showRhyme() {
  if(displayRhyme == 0)
    {
      container.style.display = 'none'
      container2.style.display = 'flex'
      displayRhyme = 1;
    }
}

function showVoucher() {
  if(displayVoucher == 0)
    {
      container2.style.display = 'none'
      container3.style.display = 'flex'
      displayVoucher = 1;
    }
}
