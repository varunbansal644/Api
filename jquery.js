$(document).ready(function(){
    $("#second").slideUp();
})
var username;
function finduser()
{
    $("#first").slideUp();
    $("#second").slideDown(200);
    username = document.getElementById("username").value;
    var userdetailslink = "https://api.github.com/users/"+username;
    var xhttp = new XMLHttpRequest();
    var app = {};
    xhttp.onreadystatechange=function(){
        if(this.readyState ==4 && this.status == 200){
            app = JSON.parse(this.responseText);
            document.getElementById("showdata").innerHTML = app.login+"<br><img class='img-responsive' src='"+app.avatar_url+"'width=200px height=200px><br><br><button id='repo' onclick='findrepos()' class='btn-rounded-white'>REPOSITORY</button>";
            document.getElementById("showdata").innerHTML+= "<br><br><button onclick='findfollowers()' id='followers' class='btn-rounded-white'>FOLLOWERS</button><br><br><button onclick='findfollowing()' id='following' class='btn-rounded-white'>FOLLOWING</button>";
        }
    };
    console.log(app);
    xhttp.open("GET",userdetailslink);
    xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.send();
}
function findrepos()
{
    var userdetailslink = "https://api.github.com/users/"+username+"/repos";
    var shttp = new XMLHttpRequest();
    var app = [];
    shttp.onreadystatechange=function(){
        if(this.readyState ==4 && this.status == 200){
            app = JSON.parse(this.responseText);
            var text = "";
            text+="<h2>REPOSITORIES</h2><br><br>"
            for(var i=0;i<app.length;i++)
            {
                text+=app[i].name+"<br>";
            }
            text+="<br><button class='btn-danger' onclick='finduser()'>BACK</button>"
            document.getElementById("showdata").innerHTML = text;
        }
    };
    console.log(app);
    shttp.open("GET",userdetailslink);
    shttp.setRequestHeader("Content-Type", "application/json");
    shttp.send();
}
function findfollowers()
{
    var userdetailslink = "https://api.github.com/users/"+username+"/followers";
    var shttp = new XMLHttpRequest();
    var app = [];
    shttp.onreadystatechange=function(){
        if(this.readyState ==4 && this.status == 200){
            app = JSON.parse(this.responseText);
            var text = "";
            text+="<h2>FOLLOWERS</h2><br><br>"
            for(var i=0;i<app.length;i++)
            {
                text+=app[i].login+"<br>";
            }
            text+="<br><button class='btn-danger' onclick='finduser()'>BACK</button>"
            document.getElementById("showdata").innerHTML = text;
        }
    };
    console.log(app);
    shttp.open("GET",userdetailslink);
    shttp.setRequestHeader("Content-Type", "application/json");
    shttp.send();
}
function findfollowing()
{
    var userdetailslink = "https://api.github.com/users/"+username+"/following";
    var shttp = new XMLHttpRequest();
    var app = [];
    shttp.onreadystatechange=function(){
        if(this.readyState ==4 && this.status == 200){
            app = JSON.parse(this.responseText);
            var text = "";
            text+="<h2>FOLLOWING</h2><br><br>"
            for(var i=0;i<app.length;i++)
            {
                text+=app[i].login+"<br>";
            }
            text+="<br><button class='btn-danger' onclick='finduser()'>BACK</button>"
            document.getElementById("showdata").innerHTML = text;
        }
    };
    console.log(app);
    shttp.open("GET",userdetailslink);
    shttp.setRequestHeader("Content-Type", "application/json");
    shttp.send();
}