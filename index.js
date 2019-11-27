$(document).ready(function () {
    $("button").click(function () {
        $(".box")
            .animate({ width: "300px" })
            .animate({ height: "300px" })
            .animate({ marginLeft: "150px" })
            .animate({ borderWidth: "10px" })
            .animate({ opacity: 0.5 });
    });
});

$(document).ready(function () {
    $(".Image").mouseover(function () {
        $(".Image").hide();
    });
    $(".Image").mouseleave(function () {
        $(".Image").show();

    });

    $("button").click(function () {
        $("p").toggle();
    });

    function laatikkoFunktio(boxNumber) {
        alert("Nyt vaihdetaan laatikko" + boxNumber + ":n sisältöä!");

        if (boxNumber == 1) {
            document.getElementById("laatikko1").innerHTML = "<h1 class='uusiOtsikko1'>Tähän tulee uusi otsikko!</h1>" +
                "<p>Ja tähän tietysti jotain sisältöä...</p>";
            document.getElementById("laatikko1").style.lineHeight = "50px";
        }
        else if (boxNumber == 2) {
            // toiminnallisuus puuttuu!
        }
        else {
            //toiminnallisuus puuttuu!
        }

    }
    function yhteystietoFunktio() {
        var x = document.getElementById("yhteystietolomake");
        var text = "";
        var i;
        for (i = 0; i < x.length; i++) {
            text += x.elements[i].value + "<br>";
        }
        document.getElementById("yhteystiedotTuloste").innerHTML = text;
    }

});
