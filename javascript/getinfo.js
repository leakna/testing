import { userdata } from "../data/data.js";
let file=document.querySelector('.fileimage')
let picurl='';
file.onchange=function(){
  picurl=URL.createObjectURL(file.files[0])
  document.querySelector('.input-image').src=picurl
  console.log(url)
}
document.querySelector(' .confirm-butt').addEventListener('click',()=>{
  userdata.push({
   email:document.getElementById('email').value,
   firstname:document.getElementById('firstname').value,
   lastname:document.getElementById('lastname').value,
   password:document.getElementById('password').value,
    url:picurl
  })
  location.href='timeline.html'
  localStorage.setItem('data',JSON.stringify(userdata))
  console.log(JSON.parse(localStorage.getItem('data')))
})
