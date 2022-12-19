
let a = vkBridge.send('VKWebAppGetEmail')
  .then((data) => { 
    if (data.email) {
   document.getElementById("text").innerHTML = (data.email)
  
  }
  })
  .catch((error) => {
    // Ошибка
    console.log(error);
  });

 (go) = () => {alert(a.email);
 alert(a)
 alert(data)
}


//document.getElementById("div2").classList.remove("hidden");
//ocument.getElementById("div1").classList.add("hidden");



/*function go(event){
    event.preventDefault()
document.getElementById("start").classList.add("hidden")
document.getElementById("question").classList.remove("hidden") 

}*/