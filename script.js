let photo2 = "https://img1.akspic.ru/attachments/originals/1/7/1/2/0/102171-peyzash-nebo-vodohranilishhe-priroda-fjord-3840x2160.jpg";
let photo;
let token;

/*vkBridge.send('VKWebAppGetAuthToken', { 
  app_id: 51501105, 
  scope: 'photos'
  })
  .then((data) => { 
    if (data.access_token) {
     token = (data.access_token)
    }
  })*/
 
  vkBridge.send('VKWebAppGetUserInfo')
    .then((data) => { 
      if (data.photo_100) {
      photo = (data.photo_100);
      let mimg=document.createElement("img");
      mimg.setAttribute('src', photo);
      
      document.getElementById("start").appendChild(mimg);
    
    }})
      
      
  
//document.getElementById("div2").classList.remove("hidden");
//ocument.getElementById("div1").classList.add("hidden");

 
/*function go(event){
    event.preventDefault()
document.getElementById("start").classList.add("hidden")
document.getElementById("question").classList.remove("hidden") 

}*/
function go() {
  alert("fgf!")
 alert(photo)
}