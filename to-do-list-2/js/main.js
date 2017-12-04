$(document).ready(function () {
    $("#kolumna-lista").hide();


    $("#guzik-show").click(function () {


            console.log('1');
            $("#kolumna-lista").show("slow", function () {
                console.log('2');
            });
            $("#kolumna-login").hide("slow", function () {
                console.log('3');
            });
    });
});



// 'X' do zamykania tasków
var myNodelist = document.getElementsByTagName("li");
var i;
for (i = 0; i < myNodelist.length; i++) {
    var span = document.createElement("span");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        var div = this.parentElement;
        div.style.display = "none";
    }
}

// 'check'- dodawanie znaczka checked po kliknieciu na guzik
var list = document.querySelector('ul');
list.addEventListener('click', function (ev) {
    if (ev.target.tagName === 'li') {
        ev.target.classList.toggle('checked');
    }
}, false);

// dodanie nowego elementu listy po kliknięciu na guzik 'add'
function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("Write something to add a task!");
    } else {
        document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";

    var span = document.createElement("span");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}


//make the to do list app appear

//function appear() {
//    var zmiana = document.getElementsByClassName("kolumna-lista").style.display = "block";
//    console.log(zmiana);
//
//}