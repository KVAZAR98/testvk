
let id;
let token;
vkBridge.send('VKWebAppGetAuthToken', { 
  app_id: 51501105, 
  scope: 'friends,photos,status'
  })
  .then((data) => { 
    if (data.access_token) {
     token = (data.access_token)
    }
  })
 
  vkBridge.send('VKWebAppGetUserInfo', {
    //params:{access_token:token}
    })
    .then((data) => { 
      if (data.id) {
      id = (data.id);
      
    }
    })
    .catch((error) => {
      // Ошибка
      console.log(error);
    });
//document.getElementById("div2").classList.remove("hidden");
//ocument.getElementById("div1").classList.add("hidden");
function go() {
 alert(token);
alert("dfjfdfd");
alert(id);
}
bridge.send('VKWebAppGetEmail',{
access_token:token,
user_id:id
})
  .then((data) => { 
    if (data.email) {
      alert(data.email)
    }
  })
  .catch((error) => {
    // Ошибка
    console.log(error);
  });
/*function go(event){
    event.preventDefault()
document.getElementById("start").classList.add("hidden")
document.getElementById("question").classList.remove("hidden") 

}*/