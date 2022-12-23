let a1 = document.getElementById("a1");
let a2 = document.getElementById("a2");
let b1 = document.getElementById("b1");
let b2 = document.getElementById("b2");
let c1 = document.getElementById("c1");
let c2 = document.getElementById("c2");


let photo;
let token;
let ars1 = ["a1/a1.jpg", "a1/a2.jpg", "a1/a3.jpg", "a1/a4.jpg", "a1/a5.jpg"];
let randars1 = Math.floor(Math.random() * ars1.length);
let ars2 = ["a2/a1.jpg", "a2/a2.jpg", "a2/a3.jpg", "a2/a4.jpg", "a2/a5.jpg"];
let randars2 = Math.floor(Math.random() * ars2.length);



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
  document.getElementById("q1").src = (ars1[randars1]);
  document.getElementById("q2").src = (ars2[randars2]);
}

a1.onclick = (event) => {
  event.preventDefault();

  a1.classList.add("green");
  setTimeout(question1, 400);

}
a2.onclick = (event) => {
  event.preventDefault();
  a2.classList.add("green");
  setTimeout(question1, 400);

}

b1.onclick = (event) => {
  event.preventDefault();

  b1.classList.add("green");
  setTimeout(question2, 400);

}
b2.onclick = (event) => {
  event.preventDefault();
  b2.classList.add("green");
  setTimeout(question2, 400);

}
c1.onclick = (event) => {
  event.preventDefault();

  c1.classList.add("green");
  setTimeout(result, 400);

}
c2.onclick = (event) => {
  event.preventDefault();
  c2.classList.add("green");
  setTimeout(result, 400);

}
function question1() {
  document.getElementById("question1").classList.add("hidden");
  document.getElementById("question2").classList.remove("hidden");

}
function question2() {
  document.getElementById("question2").classList.add("hidden");
  document.getElementById("question3").classList.remove("hidden");

}
function result() {
  document.getElementById("question3").classList.add("hidden");
  document.getElementById("result").classList.remove("hidden");
  document.getElementById("ava").src = (photo)
}

function end() {

  alert("sd")
}








//document.getElementById("div2").classList.remove("hidden");
//ocument.getElementById("div1").classList.add("hidden");
//document.getElementById("ava").src = (photo);

/*function go(event){
    event.preventDefault()
document.getElementById("start").classList.add("hidden")
document.getElementById("question").classList.remove("hidden") 

}*/
