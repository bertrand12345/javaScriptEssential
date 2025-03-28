let Gro1;
let Gro2;
let Gro3;

function groceryTracker() {
    Gro1 = parseFloat(document.getElementById('Gro1').value);
    Gro2 = parseFloat(document.getElementById('Gro2').value);
    Gro3 = parseFloat(document.getElementById('Gro3').value);
   
   let sum = Gro1+Gro2+Gro3;
   document.getElementById('result').innerText = `The total amount is:$ ${sum}`;
}







