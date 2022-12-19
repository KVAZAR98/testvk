let b
let a = vkBridge.send('VKWebAppGetEmail')
  .then((data) => { 
    if (data.email) {
      document.getElementById("text").innerHTML = (data.email);
  console.log(data.email)
  
}
  })
  .catch((error) => {
    // Ошибка
    console.log(error);
  });
  //document.getElementById("text").innerHTML = a(data.email);
 
 
 console.log(a["email"])

//document.getElementById("div2").classList.remove("hidden");
//ocument.getElementById("div1").classList.add("hidden");



/*function go(event){
    event.preventDefault()
document.getElementById("start").classList.add("hidden")
document.getElementById("question").classList.remove("hidden") 

}*/