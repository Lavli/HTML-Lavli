function laatikkoFunktio(boxNumber){
    //alert("Nyt vaihdetaan laatikko"+ boxNumber + ":n sisältöä!");

    

    if (boxNumber == 1){
        document.getElementById("laatikko1").innerHTML = "<h1 class='uusiOtsikko1'>Tähän tulee uusi otsikko!</h1>" + 
        "<p>Ja tähän tietysti jotain sisältöä...</p>";
        document.getElementById("laatikko1").style.lineHeight = "50px";
    }
    else if (boxNumber == 2){
        document.getElementById("laatikko2").innerHTML =
        "<table style='width:100%'>" +
            "<tr>" +
                "<th>Minun nimi on Lavdim</th>" +
                "<th>Minun sukunimi on Raci</th>" +
                "<th>Minua kutsutaan Lavliksi</th>" +
            "</tr>" +
        "</table>";
        
    }
    else if (boxNumber == 3) {
        document.getElementById("laatikko3").innerHTML = "<img src='https://www.azernews.az/media/2017/06/21/watermelons.jpg'>";
       
    }
    
    if (boxNumber == 4){
        location.reload();
    }
}
function yhteystietoFunktio() {
    var x = document.getElementById("yhteystietolomake");
    var text = "";
    var i;
    for (i = x.length-1; i >= 0; i--) {
      text += x.elements[i].name + " " +  x.elements[i].value + "<br>";
    }
    document.getElementById("yhteystiedotTuloste").innerHTML = text;
  }