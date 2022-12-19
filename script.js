let a = vkBridge.send('VKWebAppGetEmail')
  .then((data) => { 
    if (data.email) {
    console.log(data)
   alert(data)
   alert(a)
  }
  })
  .catch((error) => {
    // Ошибка
    console.log(error);
  });

alert(a);




//document.getElementById("div2").classList.remove("hidden");
//ocument.getElementById("div1").classList.add("hidden");



/*function go(event){
    event.preventDefault()
document.getElementById("start").classList.add("hidden")
document.getElementById("question").classList.remove("hidden") 

}*/