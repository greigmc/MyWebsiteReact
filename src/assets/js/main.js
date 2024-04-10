// Navbar Scroll 
// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "10px 0px";
    // document.getElementById("logo").style.fontSize = "15px";
  } else {
    document.getElementById("navbar").style.padding = "20px 0px";
    // document.getElementById("logo").style.fontSize = "25px";
  }
}

// Clock
// function showTime(){
//   let date = new Date();
//   let hours = date.getHours();
//   let minutes = date.getMinutes();
//   let seconds = date.getSeconds();
//   let session = "AM";
//   if(hours === 0){
//       hours = 12;
//   }
//   if(hours > 12){
//       hours = hours - 12;
//       session = "PM";
//   }
//   hours = hours < 10? `0${hours}` : hours;
//   minutes = minutes < 10 ? `0${minutes}` : minutes;
//   seconds = seconds < 10 ? `0${seconds}` : seconds;
//   let time = `${hours} : ${minutes} : ${seconds} ${session}`
//   document.querySelector(".clock").innerHTML = time;

// }

// setInterval(showTime , 1000)
