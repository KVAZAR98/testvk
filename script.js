

function go(event){
    event.preventDefault()
document.getElementById("start").classList.add("hidden")
document.getElementById("question").classList.remove("hidden") 

}
vkBridge.send('VKWebAppInit');

vkBbridge.send('VKWebAppGetEmail')
  .then((data) => { 
    if (data.email) {
      // Доступ к электронной почте получен
    
    }
  })
  .catch((error) => {
    // Ошибка
    console.log(error);
  });



console.log(a)



//document.getElementById("div2").classList.remove("hidden");
//ocument.getElementById("div1").classList.add("hidden");


