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