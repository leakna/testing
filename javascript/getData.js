import { friendData} from "../data/data.js";
let concat='';
console.log(friendData)
friendData.forEach((value,index)=>{
  concat=concat+`<div class="body-detail">
  <div class="friend-header">
    <div class="name-container">
      <img src=${value.profile} alt="">
      <div class="friend-name">
        <p>
          ${value.name}
        </p>
        <p class="date">
          <span style="margin-right: 2px;">3h</span>	&#8226; <i style=" margin-left: 2px; font-size: 10px;" class="fa-solid fa-user-group"></i>
        </p>
      </div>
    

    </div>
    <div class="friend-caption">
      ${value.caption}
    </div>
  </div>
  <div class="friend-image">
    <img src=${value.image} alt="">
  </div>
</div>`
  document.querySelector('.body-grid').innerHTML=concat;
})
let data=JSON.parse(localStorage.getItem('data'))
document.querySelector(' .inside-welcome-text').innerHTML=`${data[0].firstname}`
document.querySelector('.your-profile').src=data[0].url
localStorage.removeItem('data')

