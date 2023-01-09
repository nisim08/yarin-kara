

let number = 0 


function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }


document.getElementById("s").onclick = function(){

    let username = document.getElementById("username").value
    let password = document.getElementById("password").value

if ( username == "nisim" && password == "eitan")
 {
    
    window.location = "hub.html"
}



else{
    
    number = number + 1
    document.getElementById("hhh").innerHTML = "eror"

sleep(2000)
  

document.getElementById("hhh").innerHTML = ""

number = number + 1

}
    

while (number == 4) {
    alert("get out")
    sleep(200)
}

}