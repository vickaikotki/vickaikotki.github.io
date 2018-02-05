$(document).ready(function () {
    var n = 1;
    loadThisDoc(n, 0);

    modalAppear();
    getRandomBeer(Math.floor((Math.random() * 80) + 1), 1);
    getRandomBeer(Math.floor((Math.random() * 80) + 1), 2);
    getRandomBeer(Math.floor((Math.random() * 80) + 1), 3);




});

var n = 2;
var i = 20;
$(window).scroll(function () {
    

    
    if ($(document).height() <= ($(window).height() + $(window).scrollTop())) {
        //Bottom Reached

        if (i < 80) {
            $(".loader-parent").css("display", "flex");
            loadThisDoc(n, i);
            n++;
            i += 20;
        }

        if (i >= 39) {
            for (var j = 20; j < 40; j++) {
                document.getElementsByClassName('beer')[j].style.display = "flex";
               
            }
        }

        if (i >= 59) {
            for (var j = 40; j < 60; j++) {
                document.getElementsByClassName('beer')[j].style.display = "flex";
            }

        }

        if (i >= 79) {
            for (var j = 60; j < 80; j++) {
                document.getElementsByClassName('beer')[j].style.display = "flex";
            }
            $(".loader-parent").css("display", "none");

        }
    }

});




for (var j = 0; j < 80; j++) {
    document.getElementsByClassName('beer-inside')[j].onclick = function () {
        var ElementIndex = this.id.substring(5);
        getMoreInfo(ElementIndex);
    }
}

for (var j = 20; j < 80; j++) {
    document.getElementsByClassName('beer')[j].style.display = "none";

}

function getMoreInfo(x) {
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {

            var myObj = JSON.parse(this.responseText);

//
//            document.getElementById('beer-img').innerHTML = '<img src="' + myObj[0].image_url + '">';
            
            document.getElementById('beer-img').setAttribute("src", myObj[0].image_url);

            document.getElementById('beer-name').innerHTML = myObj[0].name;


            document.getElementById('beer-tagline').innerHTML =
                myObj[0].tagline;

            document.getElementById("ibu").innerHTML = myObj[0].ibu;


            document.getElementById("abv").innerHTML =
                myObj[0].abv + '%';

            document.getElementById("ebc").innerHTML =
                myObj[0].ebc;

            document.getElementById("description-text").innerHTML = myObj[0].description;




            function newElement() {

            }
            document.getElementById("enjoy-list").innerHTML = " ";

            for (var p = 0; p < myObj[0].food_pairing.length; p++) {
                var ul = document.getElementById("enjoy-list");
                var li = document.createElement("li");
                li.appendChild(document.createTextNode(myObj[0].food_pairing[p]));
                ul.appendChild(li);
            }

            newElement();


            // Get the modal
            var modal = document.getElementById('myModal');

            modal.style.display = "flex";

        }
    };
    xhttp.open("GET", "https://api.punkapi.com/v2/beers/" + x, true);
    xhttp.send();

}


var randomIntGlobal = 0;

function getRandomBeer(x, i) {
    var xhttp = new XMLHttpRequest();
    var number = 0;


    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {

            var myObj = JSON.parse(this.responseText);
            



            document.getElementById('beer-img-tiny' + i).setAttribute("src", myObj[0].image_url);

            document.getElementById("beer-name-tiny" + i).innerHTML = myObj[0].name;
        }

    };
    xhttp.open("GET", "https://api.punkapi.com/v2/beers/" + x, true);
    xhttp.send();

}


function loadThisDoc(n, i) {
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {

            var myObj = JSON.parse(this.responseText);

        
//            var beerImg = document.getElementsByClassName('beer-img');
            var w = i;
            var z = 0;

            for (i; i < w + 20; i++) {
                

//                console.log(i);
//                beerImg[i].innerHTML = '<img src="' + myObj[z].image_url + '">';
                
                document.getElementsByClassName('beer-img')[i].innerHTML = '<img src="' + myObj[z].image_url + '">';
                


                document.getElementsByClassName("beer-name")[i].innerHTML =
                    myObj[z].name;


                document.getElementsByClassName("beer-tagline")[i].innerHTML =
                    myObj[z].tagline;
                z++;
                console.log(z);
            }
        }
    };
    xhttp.open("GET", "https://api.punkapi.com/v2/beers?page=" + n + "&per_page=20", true);
    xhttp.send();
}


function modalAppear(beerNo) {

    var modalContent = document.getElementsByClassName('beer-name');
    // Get the modal
    var modal = document.getElementById('myModal');

    // Get the button that opens the modal
    var btn = document.getElementsByClassName('beer-inside');

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName('close')[0];

    // When the user clicks on the button, open the modal 
    btn.onclick = function () {
        modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}