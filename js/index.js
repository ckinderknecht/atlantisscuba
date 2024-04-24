// Nav Changes on Scroll
window.onscroll = () => {
    const nav = document.querySelector('#navscroll');
    if(this.scrollY <= 250) {
      nav.className = ''; 
      } 
      else { 
     var y = document.getElementById('navscroll'); 
      nav.className = 'scroll';
     }
   }

//Nav Changes if refreshed below certain point with no scroll
var mnav = document.getElementById("instruct");
var bounding = mnav.getBoundingClientRect();
const nav = document.querySelector('#navscroll');
console.log(bounding);
if(bounding.top > 319 ) {
    nav.className = ''; 
    } 
    else { 
   var y = document.getElementById('navscroll'); 
    nav.className = 'scroll';
   }
 