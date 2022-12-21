//mimg.setAttribute('src', photo);
//document.getElementById("start").appendChild(mimg);
let mimg = document.createElement("img");
let photo;
let token;
let ava123 = "fon.jpg";
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
    if (data) {
      photo = (data.photo_200);
    }
  })

  
function go(event) {
  event.preventDefault();

 document.getElementById("ava").src = (photo);
  document.getElementById("start").classList.add("hidden")
  document.getElementById("result").classList.remove("hidden")

}




//document.getElementById("div2").classList.remove("hidden");
//ocument.getElementById("div1").classList.add("hidden");


/*function go(event){
    event.preventDefault()
document.getElementById("start").classList.add("hidden")
document.getElementById("question").classList.remove("hidden") 

}*/
