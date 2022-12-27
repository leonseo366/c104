
  var y = Math.floor(Math.random() * 10 + 1);
    var x = document.getElementById("guessField").value;

if(x == y)
{
    alert("¡¡¡FELICIDADES!!!"+playername+" LO ADIVINAS TE BIEN "
            + guess + " INTENTO ");
    guess= 1;
}
else if(x > y)
{
    guess++;
    alert("¡OOPS LO SIENTO! INTENTA UN NUMERO MAS PEQUEÑO");
}
else
{
    guess++;
    alert("¡OOPS LO SIENTO! INTENTA UN NUMERO MAS GRANDE");
}
function playAgain(){
    y = Math.floor(Math.random() * 10 + 1);
}