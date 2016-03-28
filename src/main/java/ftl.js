function loadIntro(){
	var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
     document.getElementById(id).innerHTML = xhttp.responseText;
    }
  };
  xhttp.open("GET", "/chef?id="+id, true);
  xhttp.send();
}