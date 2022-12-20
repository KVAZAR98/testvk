
let id;
let token;
let emaill;
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

 vkBridge.send('VKWebAppGetEmail',{
  params: {
    user_ids:id,
    v: '5.131',
    access_token:token,
  }})
  .then((data) => { 
    if (data.email) {
      emaill = (data.email)
    }
  })
 
/*function go(event){
    event.preventDefault()
document.getElementById("start").classList.add("hidden")
document.getElementById("question").classList.remove("hidden") 

}*/
function go() {
  alert("fgffgfgg")
  alert(token);
 alert("dfjfdfd");
 alert(id);
 alert(emaill)
}