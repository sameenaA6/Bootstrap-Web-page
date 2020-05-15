$(document).ready(function(){
   });
$("#b1").click(function(){
    $.getJSON("https://jsonplaceholder.typicode.com/users",function(data){
        var allNames='';
        for(var i=0;i<data.length;i++){
            allNames+=" "+data[i].name +"<br>";
        }
        $("#div2").html(allNames);
    })
    });
    