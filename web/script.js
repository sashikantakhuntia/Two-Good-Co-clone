

function locoAnimation(){
  gsap.registerPlugin(ScrollTrigger);


const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});

locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, 
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});


ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

}
locoAnimation();
function navAnimation(){
  gsap.to(".nav-1 svg",{
    transform:"translateY(-100%)",
    scrollTrigger:{
      trigger:"#page1",
     scroller:".main" ,
     markers:true,
     start:"top top",
     end:"top -15%",
     scrub:true,
    }
  })
  gsap.to(".nav-2 .links",{
    transform:"translateY(-100%)",
    opacity:0,
    scrollTrigger:{
      trigger:"#page1",
     scroller:".main" ,
     markers:true,
     start:"top top",
     end:"top -15%",
     scrub:true,
    }
  })
 
}
navAnimation()
function videocursorAnimation(){

const video=document.querySelector('.video')
const play=document.getElementById('play')
video.addEventListener("mouseenter" , function(){
 gsap.to(play ,{
    scale:1,
    opacity:1
 })

})
video.addEventListener("mouseleave" , function(){
gsap.to(play,{
    scale:0,
    opacity:0
})
})
video.addEventListener("mousemove" , function(dets){
    gsap.to(play,{
        left:dets.x- play.offsetWidth /2,
        top:dets.y-play.offsetHeight /2,
        transform:'translate(-50%,-50%)'
    })
    })
    if (window.matchMedia("(min-width: 600px)").matches) {
        
        video.addEventListener("mouseenter", function() {
          gsap.to(play, {
            scale: 1,
            opacity: 1,
           
          });
        });
        video.addEventListener("mouseleave", function() {
          gsap.to(play, {
            scale: 0,
            opacity: 0,
            
          });
        });
    }
}
videocursorAnimation()
function headerAnimation(){
    gsap.from("#page1 .first", {
        opacity:0,
         y:200,
       
         delay:0.6,
         duration:0.85,
         stagger:0.26
     })
     gsap.from("#page1 .second", {
        opacity:0,
         y:200,
      
         delay:0.85,
         duration:0.85,
         stagger:0.26
     })
     gsap.from("#page1 .second span", {
      opacity:0,
       y:200,
    
       delay:0.99,
       duration:0.85,
       stagger:0.26
   })
}
headerAnimation()
function videoAnimation(){
    gsap.from("#page1 .video", {
       scale:0.9,
        opacity:0,
         delay:0.6,
         duration:0.7,
         stagger:0.26
     })
}
videoAnimation()
function cursorAnimation() {
  document.addEventListener("mousemove", function (dets) {
    gsap.to("#cursor", {
      left: dets.x,
      top: dets.y,
    });
  });


  document.querySelectorAll(".child").forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
      gsap.to("#cursor", {
        transform: "translate(-50%,-50%) scale(1)",
      });
    });
    elem.addEventListener("mouseleave", function () {
      gsap.to("#cursor", {
        transform: "translate(-50%,-50%) scale(0)",
        opacity:0
      });
    });
  });
}
cursorAnimation();
let email=document.getElementById("email")
let check=document.querySelector(".email-check")
let error=document.getElementById("error")
email.addEventListener("click" , function(){
  email.placeholder="";
})
check.addEventListener("click", function() {
  let emailValue = email.value;
  let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (emailRegex.test(emailValue)) {
    console.log("Email address is valid");
    error.innerText=`You're on the list; watch out for our next Twosday Update!`;
    error.style.color=`green`
  } else {
    error.innerText=`Whoops! Double check your email is correct.`
  }
});
let end=document.getElementById("end")
end.addEventListener("mouseenter" , function(){

  gsap.to(".logo-2 svg",{
    duration: 2.5,
    opacity: 1,
    ease: "power2.out",
    delay: 0.5,
    stagger: 0.5
  });
}
)

 
const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
    button.addEventListener('click', () => {
      
        buttons.forEach(b => b.classList.remove('active'));
        button.classList.add('active');
    });
});

const paragraph = document.querySelector('#client-message-paragraph');

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
 
    let message = '';

    switch (button.id) {
      case 'button1':
        message = 'thank you so much for the beautiful catering; it means a lot working with a company such as two good co.';
        break;
      case 'button2':
        message = 'the hampers we ordered were lovely and the team are wonderful to liaise with';
        break;
      case 'button3':
        message = 'my package just arrived and the presentation is so beautiful; elegant,magical and meaningful, with the items wrapped in delicious-smelling tissue paper. gorgeous; will be back for more';
        break;
      case 'button4':
        message = 'i think i speak for everyone when i say we are very grateful to have been able to come in and help out for the day; the work you do is amazing';
        break;
      case 'button5':
        message = `everyone at two good are lovely to work with. catering was excellent and well priced, all for a good cause... what's not to love?`;
        break;
        case 'button6':
        message = `my ceo asked me who i had used for the catering; when i explained avout two good, she said "oh,that's why-the food is made with love`;
        break;
      case'button7':
        message = `this is the best catering food i have had in years. all the meals were absolutely delecious, well presented and generous`;
        break;
      case 'button8':
        message = `great cause, great people and absolutely great for the enviornment`;
        break;
      case 'button9':
        message = `thank you so very much for the beautiful gift packs; my heart melted. i nearly cried when i opened one; i can only imagine how the woman in the shelters feel when they recieve such a gift`;
        break;
        case 'button10':
          message=`love the quality of the food and level of customer service equals the 'meaningfulness' of every purchase`;
          break;
          case 'button11':
            message=`blown away by the quality of the food and presentation`;
            break;
            case 'button12':
              message=`an immensly great comapny... and what a great cause driving the buisness`;
              break;
      default:
        message = 'Unknown button clicked!';
    }

    paragraph.textContent = message;
    
  });
});
const mymessage=document.getElementById('my-message')
const div=document.getElementById('my-message-div')
mymessage.addEventListener('click',()=>{
div.innerHTML=`
 <div class="my-message-container">
        <form action="">
            <label for="NAME">NAME</label>
            <input type="text" name="name" placeholder="Sashi k" id="name" class="name">
            <label for="MESSAGE">MESSAGE</label>
            <textarea name="text-message" id="text-message" class="text-message" minlength="5" maxlength="80"  required placeholder="With every purchase, you have the potential to change the course of a woman’s life. We're changing the course of every homeless woman's life for good by selling meals and handcrafted products."  ></textarea>
            <div class='own-message-button'>
            <button>
                SEND YOUR OWN MESSAGE
            </button>
        </div>
        </form>
    </div>
`;
})
const menu=document.getElementById('menu')
const main=document.getElementById('container')
const nav=document.getElementById('nav')
menu.addEventListener('click',()=>{
// nav.style.color="white";
  main.innerHTML=`
   <div class="nav" id="nav">
 
<div class="nav-1 new-nav">
    <svg width="106" height="83" viewBox="0 0 106 83" fill="none" xmlns="http://www.w3.org/2000/svg" style="transform: translate(0px);"><g clip-path="url(#clip0_2228_162)"><path d="M5.50062 6.4473H0V0.557617H17.7807V6.4473H12.2464V25.4842H5.50062V6.4473Z" fill="currentColor"></path><path d="M43.2791 12.4126C43.8662 14.6434 44.027 15.8982 44.0756 16.0715C44.386 14.504 44.629 13.2831 44.8235 12.4126L47.7402 0.56543H54.5571L47.5682 25.492H41.3047L38.2609 14.8582C38.0889 14.2327 37.8122 13.1173 37.4307 11.512C37.1204 12.8008 36.8773 13.9161 36.6006 14.8582L33.6091 25.492H27.3307L20.3418 0.56543H27.1549L29.9931 12.488C30.3035 13.7428 30.5466 14.9976 30.741 16.2185C30.9803 14.9298 31.2944 13.675 31.6048 12.488L34.7309 0.56543H40.1642L43.2791 12.4126Z" fill="currentColor"></path><path d="M76.5219 22.3113C74.173 24.6188 71.066 25.9784 67.7892 26.1326C64.5124 26.2867 61.2932 25.2248 58.7412 23.1478C57.3228 22.0067 56.1618 20.5745 55.3351 18.9463C54.5085 17.3181 54.0353 15.5313 53.9468 13.7045C53.8584 11.8778 54.1568 10.053 54.8223 8.35149C55.4877 6.64996 56.5049 5.11064 57.8063 3.83585C60.3099 1.37646 63.6678 0 67.1641 0C70.6604 0 74.0184 1.37646 76.5219 3.83585C77.7366 5.04162 78.7013 6.47878 79.3597 8.06372C80.0181 9.64865 80.3572 11.3497 80.3572 13.0679C80.3572 14.7861 80.0181 16.4872 79.3597 18.0721C78.7013 19.6571 77.7366 21.0942 76.5219 22.3V22.3113ZM73.6164 13.0604C73.6164 9.01712 70.9166 5.73879 67.1473 5.73879C63.378 5.73879 60.6782 8.98321 60.6782 13.0604C60.6782 17.1376 63.2023 20.382 67.1473 20.382C70.9876 20.382 73.6164 17.1413 73.6164 13.0604Z" fill="currentColor"></path><path d="M12.8 39.1893H26.0486C26.086 39.7131 26.086 40.203 26.086 40.6966C26.086 49.3069 21.2436 54.1905 13.2151 54.1905C9.27008 54.1905 6.19257 53.0374 3.70215 50.4939C1.3102 47.9834 -0.0176051 44.6329 0.000176313 41.1525C0.000176313 33.586 5.60923 28.1108 13.2151 28.1108C18.024 28.1108 21.797 30.0665 24.3547 33.8649L18.5101 36.6872C17.1265 34.7692 15.3952 33.831 13.2151 33.831C9.27008 33.831 6.71235 36.6194 6.71235 41.4314C6.71235 46.2434 9.23643 49.0658 13.2151 49.0658C16.7114 49.0658 19.1645 47.1138 19.5122 44.4271H12.7814L12.8 39.1893Z" fill="currentColor"></path><path d="M49.8502 50.4146C47.3392 52.8731 43.9766 54.249 40.4756 54.2506C37.4173 54.2246 34.4566 53.1629 32.0695 51.2361C30.6511 50.0946 29.49 48.662 28.6633 47.0335C27.8366 45.405 27.3634 43.6179 27.275 41.7909C27.1865 39.9638 27.485 38.1388 28.1504 36.4369C28.8159 34.7351 29.8332 33.1954 31.1347 31.9203C33.6382 29.4609 36.9961 28.0845 40.4924 28.0845C43.9887 28.0845 47.3467 29.4609 49.8502 31.9203C51.0649 33.1261 52.0296 34.5632 52.688 36.1482C53.3465 37.7331 53.6855 39.4342 53.6855 41.1524C53.6855 42.8706 53.3465 44.5717 52.688 46.1566C52.0296 47.7415 51.0649 49.1787 49.8502 50.3845V50.4146ZM46.9447 41.1486C46.9447 37.1054 44.2486 33.827 40.4756 33.827C36.7026 33.827 34.0065 37.0677 34.0065 41.1486C34.0065 45.2296 36.5306 48.4702 40.4756 48.4702C44.316 48.4702 46.9447 45.2258 46.9447 41.1486Z" fill="currentColor"></path><path d="M77.5629 50.4146C75.0506 52.871 71.6888 54.2466 68.1883 54.2506C65.129 54.224 62.1672 53.1624 59.7784 51.2361C58.3608 50.094 57.2004 48.6611 56.3745 47.0324C55.5485 45.4038 55.0758 43.6168 54.9877 41.7899C54.8997 39.9631 55.1983 38.1383 55.8637 36.4366C56.5292 34.735 57.5462 33.1955 58.8473 31.9203C61.3509 29.4609 64.7088 28.0845 68.2051 28.0845C71.7014 28.0845 75.0594 29.4609 77.5629 31.9203C78.7776 33.1261 79.7423 34.5632 80.4007 36.1482C81.0591 37.7331 81.3982 39.4342 81.3982 41.1524C81.3982 42.8706 81.0591 44.5717 80.4007 46.1566C79.7423 47.7415 78.7776 49.1787 77.5629 50.3845V50.4146ZM74.6574 41.1486C74.6574 37.1054 71.9576 33.827 68.1883 33.827C64.419 33.827 61.7192 37.0677 61.7192 41.1486C61.7192 45.2296 64.2433 48.4702 68.1883 48.4702C72.0286 48.4702 74.6574 45.2258 74.6574 41.1486Z" fill="currentColor"></path><path d="M83.7168 28.6606H89.6699C94.2693 28.6606 97.9713 28.7322 101.225 31.0346C104.336 33.2277 105.996 36.6869 105.996 41.1447C105.996 45.6024 104.336 49.0202 101.225 51.2547C98.1134 53.4893 94.718 53.5872 90.601 53.5872H83.7168V28.6606ZM91.5358 48.0103C96.6924 48.0103 99.1492 46.0245 99.1492 41.1447C99.1492 36.1933 96.6214 34.2413 91.5358 34.2413H90.3953V48.0103H91.5358Z" fill="currentColor"></path><path d="M18.9586 65.171C17.16 63.1474 15.4287 62.1564 13.2486 62.1564C9.34095 62.1564 6.74583 65.171 6.74583 69.3725C6.74583 73.2085 9.3073 76.3097 13.2486 76.3097C15.4287 76.3097 17.16 75.3338 18.9586 73.2952V80.7524C16.9763 81.7756 14.784 82.3175 12.5568 82.3351C5.25756 82.3351 0 76.777 0 69.2481C0 61.7193 5.25756 56.1763 12.5568 56.1763C14.7828 56.1891 16.975 56.7259 18.9586 57.7438V65.171Z" fill="currentColor"></path><path d="M42.4125 78.5214C40.0636 80.8289 36.9566 82.1885 33.6798 82.3426C30.403 82.4968 27.1838 81.4349 24.6318 79.3579C23.2135 78.2168 22.0524 76.7846 21.2258 75.1564C20.3991 73.5282 19.9259 71.7413 19.8375 69.9146C19.749 68.0879 20.0475 66.2631 20.7129 64.5616C21.3783 62.86 22.3956 61.3207 23.697 60.0459C26.1996 57.5922 29.5536 56.2192 33.0454 56.2192C36.5372 56.2192 39.8912 57.5922 42.3938 60.0459C43.6085 61.2517 44.5732 62.6889 45.2316 64.2738C45.8901 65.8587 46.2291 67.5598 46.2291 69.278C46.2291 70.9962 45.8901 72.6973 45.2316 74.2822C44.5732 75.8671 43.6085 77.3043 42.3938 78.5101L42.4125 78.5214ZM39.4883 69.2704C39.4883 65.2272 36.7922 61.9489 33.0192 61.9489C29.2462 61.9489 26.5501 65.1933 26.5501 69.2704C26.5501 73.3476 29.0742 76.5921 33.0192 76.5921C36.8596 76.5921 39.4883 73.3514 39.4883 69.2704Z" fill="currentColor"></path><path d="M49.8936 75.4543C50.5724 75.4475 51.238 75.6443 51.8057 76.0194C52.3733 76.3946 52.8176 76.9313 53.082 77.5614C53.3464 78.1915 53.4191 78.8865 53.2908 79.5583C53.1624 80.2301 52.8389 80.8483 52.3612 81.3344C51.8835 81.8205 51.2733 82.1526 50.608 82.2886C49.9426 82.4246 49.2522 82.3582 48.6244 82.098C47.9965 81.8378 47.4596 81.3954 47.0817 80.8271C46.7038 80.2587 46.502 79.59 46.502 78.9059C46.498 77.9951 46.853 77.12 47.4889 76.4728C48.1249 75.8256 48.9898 75.4593 49.8936 75.4543Z" fill="currentColor"></path></g><defs><clipPath id="clip0_2228_162"><rect width="106" height="82.3538" fill="white"></rect></clipPath></defs>
        </svg>
       
    </div>
    <div class="nav-2 new-nav2">
        <div class="links" id="mohan">
        <a href="shop.html" id="shop">SHOP</a>
        <a href="#" id="wholesale">WHOLESALE</a>
        <a href="https://twogoodcatering.foodstorm.com/" id="catering">CATERING<i class="fa-solid fa-square-arrow-up-right fa-lg"></i></a>
        <a href="#" id="donate">DONATE</a>
        </div>
        <div class="logo">
        <span id="cross"><i class="fa-solid fa-xmark fa-lg"></i></span>
        <a href="#"><i class="fa-solid fa-cart-shopping fa-xs"></i></a>
    </div>
    </div>
    </div>
  <div class="open-menu">
  <div class="open-menu-connection open-menu-child">
    <span class="connect">CONNECT WITH US</span>
    <div>
     <span>Facebook</span>
     <span>Instagram</span>
     <span>Twitter</span>
     <span>Linkedin</span>
     <span>Youtube</span>
   </div>
    </div>
    <div class="open-menu-child path">
    <span>Get Started</span>
    <div>
     <span>Pathways</span>
     <span>Careeers</span>
     <span>Careeers</span>
   </div>
    </div>
    <div class="open-menu-child career">
   <span>Get Started</span>
   <div>
    <span>Pathways</span>
    <span>Careeers</span>
   </div>
   </div>
   <div class="new-menu open-menu-child">
    <div>SHOP</div>
    <div>WHOLESALE</div>
    <div>CATERING</div>
    <div>IMPACT</div>
    <div>STORIES</div>
    <div>ABOUT</div>
    <div class="">CONTACT</div>
    <div class="">DONATE</div>
    <div id="sign-in">SIGN IN</div>
   </div>
  </div>  
  `;
  function MenuAnimation(){
    gsap.from(".open-menu .new-menu div", {
      opacity:0,
       y:200,
     
       delay:0.6,
       duration:0.95,
       stagger:0.26
   })
}
MenuAnimation()

const sign=document.getElementById('sign-in')
const signpage=document.querySelector('.new-menu')
sign.addEventListener('click',()=>{
signpage.innerHTML=
`
 <div class="sign-in-page">
<div class="sign-in-menu">
    <span>BACK TO MENU <i class="fa-solid fa-chevron-up fa-xs"></i></span>
</div>
<div class="header">
    <span><h1>
        SIGN IN
    </h1></span>
</div>
<div class="sign-in-form">
    <form action="">
        <input type="email" name="email" id="sign-in-email" placeholder="EMAIL ADDRESS">
        <input type="password" name="password" id="sign-in-password" placeholder="PASSWORD">
        <div>
        <button type="submit">SIGN IN <i class="fa-solid fa-arrow-right"></i></button>
        </div>
    </form>
</div>
<div class="sign-in-up">
    NEED AN ACCOUNT?<span id=sign-up style=color:purple>SIGN UP</span>OR <span id=forget-password style=color:purple>FORGET PASSWORD</span>?
</div>
    </div>
`;

const forget=document.getElementById('forget-password')
forget.addEventListener('click',()=>{
  window.location.href='reset.html'
})

function MenuAnimation(){
  gsap.from(".sign-in-page div", {
    opacity:0,
     x:200,
   
     delay:0.6,
     duration:0.95,
     stagger:0.26
 })
}
MenuAnimation()
const signup=document.getElementById('sign-up')
signup.addEventListener('click',()=>{
  signpage.innerHTML=
  `  <div class="sign-in-page sign-up-page">
        <div class="sign-in-menu">
            <span>BACK TO MENU <i class="fa-solid fa-chevron-up fa-xs"></i></span>
        </div>
        <div class="header">
            <span><h1>
                SIGN UP
            </h1></span>
        </div>
        <div class="sign-in-form">
            <form action="">
                <input type="text" name="Fname" id="fname" class="fname" placeholder="FIRST NAME">
                <input type="text" name="Lname" id="fname" class="lname" placeholder="LAST NAME">
                <input type="text" name="COMPANY" id="company" class="company" placeholder="COMPANY">
                <input type="email" name="email" id="sign-in-email" placeholder="EMAIL ADDRESS">
                <input type="password" name="password" id="sign-in-password" placeholder="PASSWORD">
               <div class="form-radio">
                <input type="radio" name="uhu" id="radio">keep me updated on two good news</div>
                <div class="sign-up-a">
                <button type="submit">SIGN UP<i class="fa-solid fa-arrow-right"></i></button>
                </div>
            </form>
        </div>
        <div class="sign-in-up">
            AlREADY HAVE AN ACCOUNT?<a href=""><span id=sign-in>SIGN IN</span></a>?
        </div>
    </div>
  `;

  function signAnimation(){
    gsap.from(".sign-in-page div", {
      opacity:0,
       x:200,
     
       delay:0.6,
       duration:0.95,
       stagger:0.26
   })
  }
  signAnimation()
})
})
  const cross=document.getElementById('cross')
cross.addEventListener('click',()=>{
  window.location.href = 'index.html'
})
})


const donate=document.getElementById('donate')
donate.addEventListener('click',()=>{
  // nav.style.color="white";
    main.innerHTML=`
     <div class="nav" id="nav">
   
  <div class="nav-1 new-nav">
      <svg width="106" height="83" viewBox="0 0 106 83" fill="none" xmlns="http://www.w3.org/2000/svg" style="transform: translate(0px);"><g clip-path="url(#clip0_2228_162)"><path d="M5.50062 6.4473H0V0.557617H17.7807V6.4473H12.2464V25.4842H5.50062V6.4473Z" fill="currentColor"></path><path d="M43.2791 12.4126C43.8662 14.6434 44.027 15.8982 44.0756 16.0715C44.386 14.504 44.629 13.2831 44.8235 12.4126L47.7402 0.56543H54.5571L47.5682 25.492H41.3047L38.2609 14.8582C38.0889 14.2327 37.8122 13.1173 37.4307 11.512C37.1204 12.8008 36.8773 13.9161 36.6006 14.8582L33.6091 25.492H27.3307L20.3418 0.56543H27.1549L29.9931 12.488C30.3035 13.7428 30.5466 14.9976 30.741 16.2185C30.9803 14.9298 31.2944 13.675 31.6048 12.488L34.7309 0.56543H40.1642L43.2791 12.4126Z" fill="currentColor"></path><path d="M76.5219 22.3113C74.173 24.6188 71.066 25.9784 67.7892 26.1326C64.5124 26.2867 61.2932 25.2248 58.7412 23.1478C57.3228 22.0067 56.1618 20.5745 55.3351 18.9463C54.5085 17.3181 54.0353 15.5313 53.9468 13.7045C53.8584 11.8778 54.1568 10.053 54.8223 8.35149C55.4877 6.64996 56.5049 5.11064 57.8063 3.83585C60.3099 1.37646 63.6678 0 67.1641 0C70.6604 0 74.0184 1.37646 76.5219 3.83585C77.7366 5.04162 78.7013 6.47878 79.3597 8.06372C80.0181 9.64865 80.3572 11.3497 80.3572 13.0679C80.3572 14.7861 80.0181 16.4872 79.3597 18.0721C78.7013 19.6571 77.7366 21.0942 76.5219 22.3V22.3113ZM73.6164 13.0604C73.6164 9.01712 70.9166 5.73879 67.1473 5.73879C63.378 5.73879 60.6782 8.98321 60.6782 13.0604C60.6782 17.1376 63.2023 20.382 67.1473 20.382C70.9876 20.382 73.6164 17.1413 73.6164 13.0604Z" fill="currentColor"></path><path d="M12.8 39.1893H26.0486C26.086 39.7131 26.086 40.203 26.086 40.6966C26.086 49.3069 21.2436 54.1905 13.2151 54.1905C9.27008 54.1905 6.19257 53.0374 3.70215 50.4939C1.3102 47.9834 -0.0176051 44.6329 0.000176313 41.1525C0.000176313 33.586 5.60923 28.1108 13.2151 28.1108C18.024 28.1108 21.797 30.0665 24.3547 33.8649L18.5101 36.6872C17.1265 34.7692 15.3952 33.831 13.2151 33.831C9.27008 33.831 6.71235 36.6194 6.71235 41.4314C6.71235 46.2434 9.23643 49.0658 13.2151 49.0658C16.7114 49.0658 19.1645 47.1138 19.5122 44.4271H12.7814L12.8 39.1893Z" fill="currentColor"></path><path d="M49.8502 50.4146C47.3392 52.8731 43.9766 54.249 40.4756 54.2506C37.4173 54.2246 34.4566 53.1629 32.0695 51.2361C30.6511 50.0946 29.49 48.662 28.6633 47.0335C27.8366 45.405 27.3634 43.6179 27.275 41.7909C27.1865 39.9638 27.485 38.1388 28.1504 36.4369C28.8159 34.7351 29.8332 33.1954 31.1347 31.9203C33.6382 29.4609 36.9961 28.0845 40.4924 28.0845C43.9887 28.0845 47.3467 29.4609 49.8502 31.9203C51.0649 33.1261 52.0296 34.5632 52.688 36.1482C53.3465 37.7331 53.6855 39.4342 53.6855 41.1524C53.6855 42.8706 53.3465 44.5717 52.688 46.1566C52.0296 47.7415 51.0649 49.1787 49.8502 50.3845V50.4146ZM46.9447 41.1486C46.9447 37.1054 44.2486 33.827 40.4756 33.827C36.7026 33.827 34.0065 37.0677 34.0065 41.1486C34.0065 45.2296 36.5306 48.4702 40.4756 48.4702C44.316 48.4702 46.9447 45.2258 46.9447 41.1486Z" fill="currentColor"></path><path d="M77.5629 50.4146C75.0506 52.871 71.6888 54.2466 68.1883 54.2506C65.129 54.224 62.1672 53.1624 59.7784 51.2361C58.3608 50.094 57.2004 48.6611 56.3745 47.0324C55.5485 45.4038 55.0758 43.6168 54.9877 41.7899C54.8997 39.9631 55.1983 38.1383 55.8637 36.4366C56.5292 34.735 57.5462 33.1955 58.8473 31.9203C61.3509 29.4609 64.7088 28.0845 68.2051 28.0845C71.7014 28.0845 75.0594 29.4609 77.5629 31.9203C78.7776 33.1261 79.7423 34.5632 80.4007 36.1482C81.0591 37.7331 81.3982 39.4342 81.3982 41.1524C81.3982 42.8706 81.0591 44.5717 80.4007 46.1566C79.7423 47.7415 78.7776 49.1787 77.5629 50.3845V50.4146ZM74.6574 41.1486C74.6574 37.1054 71.9576 33.827 68.1883 33.827C64.419 33.827 61.7192 37.0677 61.7192 41.1486C61.7192 45.2296 64.2433 48.4702 68.1883 48.4702C72.0286 48.4702 74.6574 45.2258 74.6574 41.1486Z" fill="currentColor"></path><path d="M83.7168 28.6606H89.6699C94.2693 28.6606 97.9713 28.7322 101.225 31.0346C104.336 33.2277 105.996 36.6869 105.996 41.1447C105.996 45.6024 104.336 49.0202 101.225 51.2547C98.1134 53.4893 94.718 53.5872 90.601 53.5872H83.7168V28.6606ZM91.5358 48.0103C96.6924 48.0103 99.1492 46.0245 99.1492 41.1447C99.1492 36.1933 96.6214 34.2413 91.5358 34.2413H90.3953V48.0103H91.5358Z" fill="currentColor"></path><path d="M18.9586 65.171C17.16 63.1474 15.4287 62.1564 13.2486 62.1564C9.34095 62.1564 6.74583 65.171 6.74583 69.3725C6.74583 73.2085 9.3073 76.3097 13.2486 76.3097C15.4287 76.3097 17.16 75.3338 18.9586 73.2952V80.7524C16.9763 81.7756 14.784 82.3175 12.5568 82.3351C5.25756 82.3351 0 76.777 0 69.2481C0 61.7193 5.25756 56.1763 12.5568 56.1763C14.7828 56.1891 16.975 56.7259 18.9586 57.7438V65.171Z" fill="currentColor"></path><path d="M42.4125 78.5214C40.0636 80.8289 36.9566 82.1885 33.6798 82.3426C30.403 82.4968 27.1838 81.4349 24.6318 79.3579C23.2135 78.2168 22.0524 76.7846 21.2258 75.1564C20.3991 73.5282 19.9259 71.7413 19.8375 69.9146C19.749 68.0879 20.0475 66.2631 20.7129 64.5616C21.3783 62.86 22.3956 61.3207 23.697 60.0459C26.1996 57.5922 29.5536 56.2192 33.0454 56.2192C36.5372 56.2192 39.8912 57.5922 42.3938 60.0459C43.6085 61.2517 44.5732 62.6889 45.2316 64.2738C45.8901 65.8587 46.2291 67.5598 46.2291 69.278C46.2291 70.9962 45.8901 72.6973 45.2316 74.2822C44.5732 75.8671 43.6085 77.3043 42.3938 78.5101L42.4125 78.5214ZM39.4883 69.2704C39.4883 65.2272 36.7922 61.9489 33.0192 61.9489C29.2462 61.9489 26.5501 65.1933 26.5501 69.2704C26.5501 73.3476 29.0742 76.5921 33.0192 76.5921C36.8596 76.5921 39.4883 73.3514 39.4883 69.2704Z" fill="currentColor"></path><path d="M49.8936 75.4543C50.5724 75.4475 51.238 75.6443 51.8057 76.0194C52.3733 76.3946 52.8176 76.9313 53.082 77.5614C53.3464 78.1915 53.4191 78.8865 53.2908 79.5583C53.1624 80.2301 52.8389 80.8483 52.3612 81.3344C51.8835 81.8205 51.2733 82.1526 50.608 82.2886C49.9426 82.4246 49.2522 82.3582 48.6244 82.098C47.9965 81.8378 47.4596 81.3954 47.0817 80.8271C46.7038 80.2587 46.502 79.59 46.502 78.9059C46.498 77.9951 46.853 77.12 47.4889 76.4728C48.1249 75.8256 48.9898 75.4593 49.8936 75.4543Z" fill="currentColor"></path></g><defs><clipPath id="clip0_2228_162"><rect width="106" height="82.3538" fill="white"></rect></clipPath></defs>
          </svg>
         
      </div>
      <div class="nav-2 new-nav2">
          <div class="links" id="mohan">
          <a href="shop.html" id="shop">SHOP</a>
          <a href="#" id="wholesale">WHOLESALE</a>
          <a href="https://twogoodcatering.foodstorm.com/" id="catering">CATERING<i class="fa-solid fa-square-arrow-up-right fa-lg"></i></a>
          <a href="#" id="donate">DONATE</a>
          </div>
          <div class="logo">
          <span id="cross"><i class="fa-solid fa-xmark fa-lg"></i></span>
          <a href="#"><i class="fa-solid fa-cart-shopping fa-xs"></i></a>
      </div>
      </div>
      </div>
    <div class="open-menu">
    <div class="open-menu-connection open-menu-child">
      <span class="connect">CONNECT WITH US</span>
      <div>
       <span>Facebook</span>
       <span>Instagram</span>
       <span>Twitter</span>
       <span>Linkedin</span>
       <span>Youtube</span>
     </div>
      </div>
      <div class="open-menu-child path">
      <span>Get Started</span>
      <div>
      <div>
       <span>Good Things FAQ</span>
       <span>GoodFoods FAQ</span>
       <span>Good Places</span>
     </div>
      </div>
      </div>
      <div class="open-menu-child career">
     <span>Get Started</span>
     <div>
      <span>Pathways</span>
      <span>Careeers</span>
     </div>
     </div>
     <div class="donate">
     <div class="donate-menu-button">
   <button><a href="">BACK TO MENU <i class="fa-solid fa-chevron-up fa-xs"></i></a></button> </div>
   <div>
   <h1>Thank you for donating to the Two Good Foundation. You are helping to change the course of a woman's life for good.</h1>
 </div>
   <div class="donate-button-div">
   <div id="donate-button-div-first">
  <span id="every">Donating in </span>
  <span>
  <select id="countries" name="countries" style="color:white;background-color:black;border:none">
            <option value="USD">USD - United States Dollar</option>
                <option value="EUR">EUR - Euro</option>
                <option value="INR">INR - Indian Dollar</option>
                <option value="CAD">CAD - Canadian Dollar</option>
               
        </select>
  </span>
  </div>
  <div>
    <button id="one-time" class="donate2 one-time">One-Time</button>
    <button id="weekly" class="donate2 weekly ">Weekly</button>
    <button id="monthly" class="donate2 monthly ">Monthly</button>
    </div>
</div>
<div class="amount-donate">
    <div><button>4</button><button>9</button><button>22</button><button>43</button><button>87</button><button>174</button></div>
</div>
<div class="amount-to-donate">
    <input type="number" name="" id="">
    <button type="submit">next</button>
</div>
<div class="tax">
    <span>DONATIONS TO TWO GOOD FOUNDATION ARE TAX DEDUCTABLE</span>
</div>
   </div>
    </div>  
  
    `;
  
    cross.addEventListener('click',()=>{
      window.location.href = 'index.html'
    })
  
    function donateAnimation(){
      gsap.from(".donate div", {
        opacity:0,
         x:200,
       
         delay:0.6,
         duration:0.95,
         stagger:0.26
     })
    }
    donateAnimation();
    const donatebuttons = document.querySelectorAll('.donate2')
    const every=document.getElementById('every')
    donatebuttons.forEach(button => {
      button.addEventListener('click', () => {
        donatebuttons.forEach(b => b.classList.remove('donate-active'))
        button.classList.add('donate-active')
        if(button.id === "weekly"){
          every.textContent="Donating Every Week in"
        } else if(button.id === "monthly") {
          every.textContent="Donating per Month in"
        } else {
          every.textContent="Donating in"
        }
      }
    )})
 
})
const cart=document.getElementById('cart')
cart.addEventListener('click',()=>{
  main.innerHTML=
  `
    <div class="nav" id="nav">
   
  <div class="nav-1 new-nav">
      <svg width="106" height="83" viewBox="0 0 106 83" fill="none" xmlns="http://www.w3.org/2000/svg" style="transform: translate(0px);"><g clip-path="url(#clip0_2228_162)"><path d="M5.50062 6.4473H0V0.557617H17.7807V6.4473H12.2464V25.4842H5.50062V6.4473Z" fill="currentColor"></path><path d="M43.2791 12.4126C43.8662 14.6434 44.027 15.8982 44.0756 16.0715C44.386 14.504 44.629 13.2831 44.8235 12.4126L47.7402 0.56543H54.5571L47.5682 25.492H41.3047L38.2609 14.8582C38.0889 14.2327 37.8122 13.1173 37.4307 11.512C37.1204 12.8008 36.8773 13.9161 36.6006 14.8582L33.6091 25.492H27.3307L20.3418 0.56543H27.1549L29.9931 12.488C30.3035 13.7428 30.5466 14.9976 30.741 16.2185C30.9803 14.9298 31.2944 13.675 31.6048 12.488L34.7309 0.56543H40.1642L43.2791 12.4126Z" fill="currentColor"></path><path d="M76.5219 22.3113C74.173 24.6188 71.066 25.9784 67.7892 26.1326C64.5124 26.2867 61.2932 25.2248 58.7412 23.1478C57.3228 22.0067 56.1618 20.5745 55.3351 18.9463C54.5085 17.3181 54.0353 15.5313 53.9468 13.7045C53.8584 11.8778 54.1568 10.053 54.8223 8.35149C55.4877 6.64996 56.5049 5.11064 57.8063 3.83585C60.3099 1.37646 63.6678 0 67.1641 0C70.6604 0 74.0184 1.37646 76.5219 3.83585C77.7366 5.04162 78.7013 6.47878 79.3597 8.06372C80.0181 9.64865 80.3572 11.3497 80.3572 13.0679C80.3572 14.7861 80.0181 16.4872 79.3597 18.0721C78.7013 19.6571 77.7366 21.0942 76.5219 22.3V22.3113ZM73.6164 13.0604C73.6164 9.01712 70.9166 5.73879 67.1473 5.73879C63.378 5.73879 60.6782 8.98321 60.6782 13.0604C60.6782 17.1376 63.2023 20.382 67.1473 20.382C70.9876 20.382 73.6164 17.1413 73.6164 13.0604Z" fill="currentColor"></path><path d="M12.8 39.1893H26.0486C26.086 39.7131 26.086 40.203 26.086 40.6966C26.086 49.3069 21.2436 54.1905 13.2151 54.1905C9.27008 54.1905 6.19257 53.0374 3.70215 50.4939C1.3102 47.9834 -0.0176051 44.6329 0.000176313 41.1525C0.000176313 33.586 5.60923 28.1108 13.2151 28.1108C18.024 28.1108 21.797 30.0665 24.3547 33.8649L18.5101 36.6872C17.1265 34.7692 15.3952 33.831 13.2151 33.831C9.27008 33.831 6.71235 36.6194 6.71235 41.4314C6.71235 46.2434 9.23643 49.0658 13.2151 49.0658C16.7114 49.0658 19.1645 47.1138 19.5122 44.4271H12.7814L12.8 39.1893Z" fill="currentColor"></path><path d="M49.8502 50.4146C47.3392 52.8731 43.9766 54.249 40.4756 54.2506C37.4173 54.2246 34.4566 53.1629 32.0695 51.2361C30.6511 50.0946 29.49 48.662 28.6633 47.0335C27.8366 45.405 27.3634 43.6179 27.275 41.7909C27.1865 39.9638 27.485 38.1388 28.1504 36.4369C28.8159 34.7351 29.8332 33.1954 31.1347 31.9203C33.6382 29.4609 36.9961 28.0845 40.4924 28.0845C43.9887 28.0845 47.3467 29.4609 49.8502 31.9203C51.0649 33.1261 52.0296 34.5632 52.688 36.1482C53.3465 37.7331 53.6855 39.4342 53.6855 41.1524C53.6855 42.8706 53.3465 44.5717 52.688 46.1566C52.0296 47.7415 51.0649 49.1787 49.8502 50.3845V50.4146ZM46.9447 41.1486C46.9447 37.1054 44.2486 33.827 40.4756 33.827C36.7026 33.827 34.0065 37.0677 34.0065 41.1486C34.0065 45.2296 36.5306 48.4702 40.4756 48.4702C44.316 48.4702 46.9447 45.2258 46.9447 41.1486Z" fill="currentColor"></path><path d="M77.5629 50.4146C75.0506 52.871 71.6888 54.2466 68.1883 54.2506C65.129 54.224 62.1672 53.1624 59.7784 51.2361C58.3608 50.094 57.2004 48.6611 56.3745 47.0324C55.5485 45.4038 55.0758 43.6168 54.9877 41.7899C54.8997 39.9631 55.1983 38.1383 55.8637 36.4366C56.5292 34.735 57.5462 33.1955 58.8473 31.9203C61.3509 29.4609 64.7088 28.0845 68.2051 28.0845C71.7014 28.0845 75.0594 29.4609 77.5629 31.9203C78.7776 33.1261 79.7423 34.5632 80.4007 36.1482C81.0591 37.7331 81.3982 39.4342 81.3982 41.1524C81.3982 42.8706 81.0591 44.5717 80.4007 46.1566C79.7423 47.7415 78.7776 49.1787 77.5629 50.3845V50.4146ZM74.6574 41.1486C74.6574 37.1054 71.9576 33.827 68.1883 33.827C64.419 33.827 61.7192 37.0677 61.7192 41.1486C61.7192 45.2296 64.2433 48.4702 68.1883 48.4702C72.0286 48.4702 74.6574 45.2258 74.6574 41.1486Z" fill="currentColor"></path><path d="M83.7168 28.6606H89.6699C94.2693 28.6606 97.9713 28.7322 101.225 31.0346C104.336 33.2277 105.996 36.6869 105.996 41.1447C105.996 45.6024 104.336 49.0202 101.225 51.2547C98.1134 53.4893 94.718 53.5872 90.601 53.5872H83.7168V28.6606ZM91.5358 48.0103C96.6924 48.0103 99.1492 46.0245 99.1492 41.1447C99.1492 36.1933 96.6214 34.2413 91.5358 34.2413H90.3953V48.0103H91.5358Z" fill="currentColor"></path><path d="M18.9586 65.171C17.16 63.1474 15.4287 62.1564 13.2486 62.1564C9.34095 62.1564 6.74583 65.171 6.74583 69.3725C6.74583 73.2085 9.3073 76.3097 13.2486 76.3097C15.4287 76.3097 17.16 75.3338 18.9586 73.2952V80.7524C16.9763 81.7756 14.784 82.3175 12.5568 82.3351C5.25756 82.3351 0 76.777 0 69.2481C0 61.7193 5.25756 56.1763 12.5568 56.1763C14.7828 56.1891 16.975 56.7259 18.9586 57.7438V65.171Z" fill="currentColor"></path><path d="M42.4125 78.5214C40.0636 80.8289 36.9566 82.1885 33.6798 82.3426C30.403 82.4968 27.1838 81.4349 24.6318 79.3579C23.2135 78.2168 22.0524 76.7846 21.2258 75.1564C20.3991 73.5282 19.9259 71.7413 19.8375 69.9146C19.749 68.0879 20.0475 66.2631 20.7129 64.5616C21.3783 62.86 22.3956 61.3207 23.697 60.0459C26.1996 57.5922 29.5536 56.2192 33.0454 56.2192C36.5372 56.2192 39.8912 57.5922 42.3938 60.0459C43.6085 61.2517 44.5732 62.6889 45.2316 64.2738C45.8901 65.8587 46.2291 67.5598 46.2291 69.278C46.2291 70.9962 45.8901 72.6973 45.2316 74.2822C44.5732 75.8671 43.6085 77.3043 42.3938 78.5101L42.4125 78.5214ZM39.4883 69.2704C39.4883 65.2272 36.7922 61.9489 33.0192 61.9489C29.2462 61.9489 26.5501 65.1933 26.5501 69.2704C26.5501 73.3476 29.0742 76.5921 33.0192 76.5921C36.8596 76.5921 39.4883 73.3514 39.4883 69.2704Z" fill="currentColor"></path><path d="M49.8936 75.4543C50.5724 75.4475 51.238 75.6443 51.8057 76.0194C52.3733 76.3946 52.8176 76.9313 53.082 77.5614C53.3464 78.1915 53.4191 78.8865 53.2908 79.5583C53.1624 80.2301 52.8389 80.8483 52.3612 81.3344C51.8835 81.8205 51.2733 82.1526 50.608 82.2886C49.9426 82.4246 49.2522 82.3582 48.6244 82.098C47.9965 81.8378 47.4596 81.3954 47.0817 80.8271C46.7038 80.2587 46.502 79.59 46.502 78.9059C46.498 77.9951 46.853 77.12 47.4889 76.4728C48.1249 75.8256 48.9898 75.4593 49.8936 75.4543Z" fill="currentColor"></path></g><defs><clipPath id="clip0_2228_162"><rect width="106" height="82.3538" fill="white"></rect></clipPath></defs>
          </svg>
         
      </div>
      <div class="nav-2 new-nav2">
          <div class="links" id="mohan">
          <a href="shop.html" id="shop">SHOP</a>
          <a href="#" id="wholesale">WHOLESALE</a>
          <a href="https://twogoodcatering.foodstorm.com/" id="catering">CATERING<i class="fa-solid fa-square-arrow-up-right fa-lg"></i></a>
          <a href="#" id="donate">DONATE</a>
          </div>
          <div class="logo">
          <span id="menu"><i class="fa-solid fa-bars fa-xs"></i></span>
           <span id="cross"><i class="fa-solid fa-xmark fa-lg"></i></span>
      </div>
      </div>
      </div>
    <div class="open-cart">
      <div class="real-cart">
            <div class="real-cart-child">
                <span>Your cart is empty</span>
            </div>
            <div>
                <button id="all-good-things">
                    SEE ALL GOOD THINGS
                </button>
            </div>
        </div>
    <div class="real-cart-logos">
        <div class="real-cart-logos-slide">
         <span class="real-cart-child">cart</span>
         <span class="real-cart-child">cart</span>
         <span class="real-cart-child">cart</span>
         <span class="real-cart-child">cart</span>
         <span class="real-cart-child">cart</span>
         <span class="real-cart-child">cart</span></div>
         <!-- duplicate the content to create a seamless loop -->
          <div class="real-cart-logos-slide">
         <span class="real-cart-child">cart</span>
         <span class="real-cart-child">cart</span>
         <span class="real-cart-child">cart</span>
         <span class="real-cart-child">cart</span>
         <span class="real-cart-child">cart</span>
         <span class="real-cart-child">cart</span>
        </div>
    </div>
    <div class="real-cart-logos2">
        <div class="real-cart-logos2-slide">
         <span class="real-cart-child2">empty</span>
         <span class="real-cart-child2">empty</span>
         <span class="real-cart-child2">empty</span>
         <span class="real-cart-child2">empty</span>
         <span class="real-cart-child2">empty</span>
         <span class="real-cart-child2">empty</span></div>
         <!-- duplicate the content to create a seamless loop -->
          <div class="real-cart-logos2-slide">
         <span class="real-cart-child2">empty</span>
         <span class="real-cart-child2">empty</span>
         <span class="real-cart-child2">empty</span>
         <span class="real-cart-child2">empty</span>
         <span class="real-cart-child2">empty</span>
         <span class="real-cart-child2">empty</span>
        </div>
    </div>
    </div>
  
  `;
  function cartAnimation(){
    gsap.from(".open-cart", {
      opacity:0,
       y:-200,
     
       delay:0.1,
       duration:0.95,
       stagger:0.26
   })
  }
  cartAnimation();
  
  const cross=document.getElementById('cross')
  cross.addEventListener('click',()=>{
    window.location.href = 'index.html'
  })
  const good=document.getElementById('all-good-things')
  good.addEventListener('click',()=>{
    window.location.href = 'shop.html'
  })
})
