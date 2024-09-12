var hedaerElement = document.querySelector("header");

window.addEventListener("scroll",function(e){

if(window.scrollY >= hedaerElement.offsetHeight){
hedaerElement.classList.add("sticky");
hedaerElement.children[0].classList.add("hidden")
}else 
{
hedaerElement.classList.remove("sticky");
hedaerElement.children[0].classList.remove("hidden")
}

})