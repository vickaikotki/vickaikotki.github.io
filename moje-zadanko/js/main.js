$(document).ready(function () {
    loadThisDoc();
//    loadXMLDoc();
    //    myFunction(myArray);
});



//function loadXMLDoc() {
//    var xhttp = new XMLHttpRequest();
//    xhttp.onreadystatechange = function () {
//        if (this.readyState == 4 && this.status == 200) {
//
//
//            var myObj = JSON.parse(this.responseText);
            //
            //            function myFunction(arr) {
            //                var out = "";
            //                var i;
            //                for (i = 0; i < arr.length; i++) {
            //                    out += '<img src="' + arr[i].image_url + '">';
            //                }
            //                document.getElementById("beer-img").innerHTML = out;
            //            }
            //            
            //            myFunction(myObj);
//
//            document.getElementById("beer-img").innerHTML =
//                '<img src="' + myObj[0].image_url + '">';
//
//
//            document.getElementById("beer-name").innerHTML =
//                myObj[0].name;
//
//
//            document.getElementById("beer-tagline").innerHTML =
//                myObj[0].tagline;
//
//        }
//    };
//    xhttp.open("GET", "https://api.punkapi.com/v2/beers/", true);
//    xhttp.send();
//}



function loadThisDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {


            var myObj = JSON.parse(this.responseText);
            var i;

            for (i = 0; i < 21; i++) {
                document.getElementsByClassName("beer-img")[i].innerHTML = '<img src="' + myObj[i].image_url + '">';

                document.getElementsByClassName("beer-name")[i].innerHTML =
                    myObj[i].name;


                document.getElementsByClassName("beer-tagline")[i].innerHTML =
                    myObj[i].tagline;

            }



        }
    };
    xhttp.open("GET", "https://api.punkapi.com/v2/beers/", true);
    xhttp.send();
}

//function myFunction(arr) {
//    var out = "";
//    var i;
//    for (i = 0; i < arr.length; i++) {
//        out += '<img src="' + arr[i].image_url + '">';
//    }
//    document.getElementById("beer-img").innerHTML = out;
//}


//$(document).ready(function(){
//    addScrolled();
//});
//
//$(document).scroll(function(){
//    addScrolled();
//});
//                   
//function addScrolled(){
//    
//    if (window.innerWidth>992) {
//    var height = $('#main-nav').height();
//    var scroll = $(window).scrollTop();
//    
//    if(scroll > height) {
//        $('#main-nav').addClass('transparent-blue');
//        $('.navbar-collapse').addClass('transparent-blue2');
//    } else {
//        $('#main-nav').removeClass('transparent-blue');
//        $('.navbar-collapse').removeClass('transparent-blue2');
//    }
//    }
//
//}



//To dIiała na pierwszy div

//function loadXMLDoc() {
//    var xhttp = new XMLHttpRequest();
//    xhttp.onreadystatechange = function () {
//        if (this.readyState == 4 && this.status == 200) {
//
//
//            var myObj = JSON.parse(this.responseText);
//
//            function myFunction(arr) {
//                var out = "";
//                var i;
//                for (i = 0; i < arr.length; i++) {
//                    out += '<img src="' + arr[i].image_url + '">';
//                }
//                document.getElementById("beer-img").innerHTML = out;
//            }
//            
//            myFunction(myObj);

//            document.getElementById("beer-img").innerHTML =
//                '<img src="' + myObj[0].image_url + '">';
//                
//
//            document.getElementById("beer-name").innerHTML =
//                myObj[0].name;
//
//
//            document.getElementById("beer-tagline").innerHTML =
//                myObj[0].tagline;
//
//        }
//    };
//    xhttp.open("GET", "https://api.punkapi.com/v2/beers/", true);
//    xhttp.send();
//}