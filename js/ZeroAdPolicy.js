const btn1 = document.querySelector(".ad1 button");
document.querySelector(".ad1").style.transition="opacity 1s";

btn1.addEventListener("click", () => {
    document.querySelector(".ad1").style.background="whitesmoke no-repeat url(../assets/3-1AdClosed.png)";
    setTimeout(() => document.querySelector(".ad1").style.opacity=0, 1000);
});