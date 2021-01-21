let bar = document.querySelector(".bar");
let cross = document.querySelector(".cross");

bar.addEventListener("click" , (event)=>{
    console.log(event.target)
    cross.classList.remove("display-none");
    bar.classList.add("display-none");
})

cross.addEventListener("click" , (event)=>{
    console.log(event.target)
    bar.classList.remove("display-none");
    cross.classList.add("display-none");
})
