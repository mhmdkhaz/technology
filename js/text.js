// header animation 
window.onload = function(){
    let HeaderImg = document.getElementById("HeaderImg");
    let mos = document.getElementById("mos");

    HeaderImg.style.transform = "scale(1)";
    mos.style.width = "20%";
};

// start in feature

window.onscroll = function scrol() {
    // start in feature
    function featuree() {
        let featureBox = document.querySelectorAll(".feature .all-box .box");

        featureBox.forEach((element)=>{
            if(window.scrollY >= element.offsetTop + 800){
                element.style.transform = "scale(1 , 1)";
            }
            
        })
    }
    featuree();
// img data animation
    function data() {
        let data = document.getElementById("data");
        let dataimg = document.getElementById("dataimg");
        let list = document.querySelectorAll(".list ol");
        let textdata = document.getElementById("textdata");
    
        if(window.scrollY >= data.offsetTop - 300){
            dataimg.style.transform = "rotateX(10deg)";
            textdata.style.left = "3%";
            textdata.style.opacity = "1";
            
            list.forEach((element)=> {
                element.style.opacity = "1";
            })
        }  
    }
    data();

    // start in hight
    function hight() {
        let hight = document.getElementById("hight");
        let text = document.getElementById("text");
        let text_tow = document.getElementById("text-tow");
        
        if(window.scrollY >= hight.offsetTop - 400){
            text.style.opacity = "1";
            text_tow.style.opacity = "1";
        }
    }
    hight();

    // hosting 
    function hosting() {
        let section = document.getElementById("hosting");
        let hostingimg = document.getElementById("hostingimg");
        let texthos = document.getElementById("hostingtext"); 
        
        if(window.scrollY >= section.offsetTop - 300){
            hostingimg.style.transform = "rotateY(10deg)";
        }
        if (window.scrollY >= texthos.offsetTop - 1000) {
            texthos.style.top = "-40%";
            texthos.style.opacity = "1";
        }
    }
    hosting();
};

// start in contact

let contact = document.getElementById("contact");
let inpucont = document.querySelectorAll(".contact  .form-group .form-control");

inpucont.forEach((element) =>{
    element.addEventListener("focus" , function focuinput() {
        contact.style.transform = " perspective(2500px) translate3d(0px, 0px, -150px) rotateX(-15deg)";
    })
    element.addEventListener("blur" , function blurinput() {
        contact.style.transform = "perspective(2500px) translate3d(0px, 0px, -150px) rotateX(45deg)";
    })
})