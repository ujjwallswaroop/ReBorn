document.querySelector("#button1")
.addEventListener("mouseover",function(){
    gsap.to("#main video",{
        opacity: 1,
        duration:1.5,
        ease:Power4
    })
})


document.querySelector("#ftext button").addEventListener("mouseleave",function(){
    gsap.to("#main video",{
        opacity: 0,
        duration:1.5,
        ease:Power4
    })

})