//mimg.setAttribute('src', photo);
//document.getElementById("start").appendChild(mimg);
let mimg = document.createElement("img");
let arb = document.getElementById("arb");
let pist = document.getElementById("pist");
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
    if (data) {
      photo = (data.photo_200);
    }
  })
function go(event) {
  event.preventDefault();
  document.getElementById("start").classList.add("hidden")
  document.getElementById("question1").classList.remove("hidden")

}

arb.onclick = () => {
  document.getElementById("arb").classList.add("green")
  setTimeout(question1, 400)
}
pist.onclick = () => {
  document.getElementById("pist").classList.add("green")
  setTimeout(question1, 400)
}
function question1() {
  document.getElementById("question1").classList.add("hidden")
  document.getElementById("question2").classList.remove("hidden")
}










//document.getElementById("div2").classList.remove("hidden");
//ocument.getElementById("div1").classList.add("hidden");
//document.getElementById("ava").src = (photo);

/*function go(event){
    event.preventDefault()
document.getElementById("start").classList.add("hidden")
document.getElementById("question").classList.remove("hidden") 

}*/
