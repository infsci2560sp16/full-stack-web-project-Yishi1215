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

function login(e) {
    e.preventDefault();
    var name = document.querySelector('#username').value;
    var password = document.querySelector('#password').value;
    var data = {};
    data.name = name;
    data.password = password;

    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "/login", true);
    xhttp.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
    xhttp.onreadystatechange = function() {
       if (xhttp.readyState == 4 && xhttp.status == 200) {
           // console.log(xhttp.responseText);
           // alert(xhttp.responseText);
           var textnode = document.createTextNode(xhttp.responseText);
           // var node = document.getElementById("loginform");
           // node.appendChild(textnode);
           document.getElementById("loginform").appendChild(textnode);
       }
    };
    xhttp.send(JSON.stringify(data));
}

function seeFood(){
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      showTable(xmlhttp);
    }
  };
  xmlhttp.open("GET", "xml", true);
  xmlhttp.send();
}

function showTable(xml) {
  var i;
  var xmlDoc = xml.responseXML;
  var table="<tr><th>Name</th><th>MFR</th><th>serving units = g</th><th>Calories</th><th>Total fat</th><th>Saturated fat</th><th>cholesterol</th><th>sodium</th><th>carb</th><th>fiber</th><th>protein</th></tr>";
  var x = xmlDoc.getElementsByTagName("food");
  for (i = 0; i <x.length; i++) { 
    table += "<tr><td>" +
    x[i].getElementsByTagName("name")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("mfr")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("serving")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("calories")[0].getAttribute('total') +
    "</td><td>" +
    x[i].getElementsByTagName("total-fat")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("saturated-fat")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("cholesterol")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("sodium")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("carb")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("fiber")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("protein")[0].childNodes[0].nodeValue +
    "</td></tr>";
  }
  document.getElementById("demo").innerHTML = table;
}