const burger = document.getElementById("nav-burger");
const cross = document.getElementById("cross");
const liWrapper = document.getElementById("li-wrapper");
const liWrapperBurger = document.getElementById("li-wrapper-burger");

burger.addEventListener("click", handleBurgerClick)
cross.addEventListener("click", handleBurgerClick);

liWrapper.addEventListener("click", handleLiActiveState);
liWrapperBurger.addEventListener("click", handleLiActiveState);

function handleBurgerClick(e)
{
    const burgerNav = document.getElementById("burger-opened");
    if(e.target.id === "nav-burger" || e.target.parentElement.id === "nav-burger")
    {
        burgerNav.style.display = "flex";
    }
    else if(e.target.id === "cross" || e.target.parentElement.id === "cross")
    {
        burgerNav.style.display = "none";
    }
    else{
        console.log(e.target);
    }
}

function handleLiActiveState(e)
{
    const classes = Array.from(e.target.classList);
    //console.log(e);
    if(classes.includes("nav-item")){
        const children = Array.from(e.target.parentElement.children);
        //console.log(children);
        children.forEach(child => {
            child.classList.remove("nav-item-isActive");
            //console.log(child.classList)
        })
        e.target.classList.add("nav-item-isActive");
    }
}