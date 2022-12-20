//mimg.setAttribute('src', photo);
//document.getElementById("start").appendChild(mimg);
let mimg = document.createElement("img");
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
    }
  })


function go(event) {
  
    event.preventDefault()
document.getElementById("start").classList.add("hidden")
document.getElementById("question").classList.remove("hidden") 
mimg.setAttribute('src', photo);
document.getElementById("div3").appendChild(mimg);
}
  
 


//document.getElementById("div2").classList.remove("hidden");
//ocument.getElementById("div1").classList.add("hidden");


/*function go(event){
    event.preventDefault()
document.getElementById("start").classList.add("hidden")
document.getElementById("question").classList.remove("hidden") 

}*/
