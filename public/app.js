   //parallax scroll

let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();

timeline
   .fromTo('.countdown', 10, {opacity: 0}, {opacity: 1}) // countdown timer animation
   .to('.countdown-container', 10, {top: '0%'}, '-=3') //move countdown container over coming soon image

let scene = new ScrollMagic.Scene({
   triggerElement: '.countdown-container',
   duration: '150%',
   triggerHook: 0.5
})
  .setTween(timeline)
  .setPin('.coming-soon', {pushFollowers: false})
  .addTo(controller)


  //timer

function countdown () {
   const currentDate = new Date ();
   const eventDate = new Date(2021, 12, 25);
   const currentTime = currentDate.getTime();
   const eventTime = eventDate.getTime();
   const timeLeft = eventTime - currentTime;


   s = Math.floor(timeLeft / 1000);
   m = Math.floor(s / 60);
   h = Math.floor(m / 60);
   d = Math.floor(h / 24);

   h %= 24;
   m %= 60;
   s %= 60;

   h = (h < 10) ? '0' + h : h;
   m = (m < 10) ? '0' + m : m;
   s = (s < 10) ? '0' + s : s;

   document.getElementById('days').innerText = d;
   document.getElementById('hours').innerText = h;
   document.getElementById('minutes').innerText = m;
   document.getElementById('seconds').innerText = s;

   setTimeout(countdown, 1000);
}
countdown();


