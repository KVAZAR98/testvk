
const token = vkBridge.send('VKWebAppGetAuthToken', { 
  app_id: 51501105, 
  scope: 'friends,status,photos'
  })
  .then((data) => { 
    if (data.access_token) {
     alert(token.access_token)
    }
  })
  vkBridge.send('VKWebAppCallAPIMethod', {
    method: 'users.get',
    params: {
      
      v: '5.131',
      access_token: token.access_token
    }})
    .then((data) => { 
      if (data.response) {
        console.log(data.response)
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