<html>
  <head>
    <meta charset="UTF-8">
    <title>Host page</title>
    <link rel="stylesheet" type="text/css" href="../stylesheets/host.css">
    <script type="text/javascript" src="js/functions.js"></script>
  </head>
  <body>
  <div>
    <ul>
      <li onclick="location.href='index.html'"><a class="active" href="#home">Home</a></li>
      <li onclick="location.href='host.html'"><a href="#host">HOST</a></li>
      <!-- <li onclick="location.href='foodie.html'"><a href="#foodie">FOODIE</a></li> -->
      <li  onclick="location.href='contact.html'"><a href="#contact">CONTACT</a></li>
      <!-- <ul style="float:right;list-style-type:none;"> -->
        <li onclick="location.href='aboutus.html'"><a href="#about">ABOUT US</a></li>
        <li onclick="location.href='login.html'"><a href="#login">LOGIN</a></li>
      </ul>
    </div>
     <h1 style="text-align:center"> Chef List</h1>
  <p> Name || Nation || Gender || Rating </p> 
     <#list chefs as chef> 
       <div id=${chef.id} style="cursor: pointer;" onclick="loadIntro(this)" > 
       ${chef_index + 1}. ${chef.name} || ${chef.nation} || ${chef.gender} || <#if chef.review==4.0> Excellent <#elseif chef.review==3.0> Good <#elseif chef.review==2> Fair <#elseif chef.review==1> Poor </#if> 
       </div>
     </#list>
     <br> </br>
     <button type="button" onClick = "seeFood()" id="button">Click Me to see Chefs' best food</button>
     <br><br>
     <table id="demo"></table>
  </body>
 </html>