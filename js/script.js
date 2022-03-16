const closeBtn = document.querySelector(".close");
const menuBtn = document.querySelector(".menu")

closeBtn.addEventListener('click', function(){
    document.querySelector(".navbar").style.transform = "translateY(-1000px) translateX(-50%)"
})
menuBtn.addEventListener('click', function(){
    document.querySelector(".navbar").style.transform = "translateY(0) translateX(-50%)"
})