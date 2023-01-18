var reg = document.getElementById("registration");
var login = document.getElementById("login");

function change(){
  console.log(reg.style.display);
  console.log(login.style.display);
  if(reg.style.display === "none" && login.style.display === "block"){
    reg.style.display = "block";
    login.style.display = "none";
    console.log('You clicked it');
  }
  else if (reg.style.display === "block" && login.style.display === "none") {
    reg.style.display = "none";
    login.style.display = "block";
    console.log('You clicked it');
  }
}
