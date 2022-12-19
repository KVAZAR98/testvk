

let a = (data.email)



vkBridge.send('VKWebAppGetEmail')
  .then((data) => { 
    if (data.email) {
     a = (data.email)
    console.log(data.email)
   alert(a)
  }
  })
  .catch((error) => {
    // Ошибка
    console.log(error);
  });

(go) = vkBridge.send('VKWebAppGetEmail')
.then((data) => { 
  if (data.email) {
    // Доступ к электронной почте получен
  console.log(data.email)
  }
})
.catch((error) => {
  // Ошибка
  console.log(error);
});

console.log(a)



//document.getElementById("div2").classList.remove("hidden");
//ocument.getElementById("div1").classList.add("hidden");



/*function go(event){
    event.preventDefault()
document.getElementById("start").classList.add("hidden")
document.getElementById("question").classList.remove("hidden") 

}*/