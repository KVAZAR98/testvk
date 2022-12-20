

let token;
vkBridge.send('VKWebAppGetAuthToken', { 
  app_id: 51501105, 
  scope: 'friends,status,photos'
  })
  .then((data) => { 
    if (data.access_token) {
     token = (data.access_token)
    }
  })
 
  vkBridge.send('VKWebAppGetUserInfo', {
    
    })
    .then((data) => { 
      if (data.id) {
      alert(data.id)
      }
    })
    .catch((error) => {
      // Ошибка
      console.log(error);
    });
//document.getElementById("div2").classList.remove("hidden");
//ocument.getElementById("div1").classList.add("hidden");



/*function go(event){
    event.preventDefault()
document.getElementById("start").classList.add("hidden")
document.getElementById("question").classList.remove("hidden") 

}*/