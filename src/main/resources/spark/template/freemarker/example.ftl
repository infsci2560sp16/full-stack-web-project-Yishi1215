<html>
  <head>
    <meta charset="UTF-8">
    <title>Host page</title>
    <script type="text/javascript" src="js/functions.js"></script>
    <h1 style="text-align:center"> Chef List</h1>
  </head>
  <p> Name || Nation || Gender || Rating </p> 
     <#list chefs as chef> 
       <div id=${chef.id} style="cursor: pointer;" onclick="loadIntro(this)" > 
       ${chef_index + 1}. ${chef.name} || ${chef.nation} || ${chef.gender} || <#if chef.review==4.0> Excellent <#elseif chef.review==3.0> Good <#elseif chef.review==2> Fair <#elseif chef.review==1> Poor </#if> 
       </div>
     </#list>
  </body>
 </html>