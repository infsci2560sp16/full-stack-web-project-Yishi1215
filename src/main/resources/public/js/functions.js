function Redirect() {
               window.location="contact.html";
            }

function showhide()
 {
       var div = document.getElementById("newpost");
if (div.style.display !== "none") {
    div.style.display = "none";
}
else {
    div.style.display = "block";
}
}


function diffImage(img) 
{
   if(img.src.match(/blank/)) img.src = "Mary-2.jpg";
   else img.src = "Mary-2.jpg";
}

function myFunction() {
    var node = document.createElement("LI");
    var textnode = document.createTextNode("Hanh Gullette");
    node.appendChild(textnode);
    document.getElementById("myList").appendChild(node);
}

function loadIntro(elem){
  var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
     document.getElementById(elem.id).innerHTML = xhttp.responseText;
    }
  };
  xhttp.open("GET", "/chef?id="+elem.id, true);
  xhttp.send();
  }