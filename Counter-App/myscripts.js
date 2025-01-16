let re=document.querySelector(".result");
let dec=document.getElementById("b1");
let res=document.getElementById("b2");
let inc=document.getElementById("b3");

dec.addEventListener("click",function (e){
    let x=document.getElementById("h2");
    let y=parseInt(x.innerHTML);
    // console.log(y);
    y=y-1;
    x.innerHTML=`${y}`;
});
inc.addEventListener("click",function (e){
    let x=document.getElementById("h2");
    let y=parseInt(x.innerText);
    y=y+1;
    x.innerHTML=y;
});
res.addEventListener("click",function (e){
    let x=document.getElementById("h2");
    let y=parseInt(x.innerText);
    y=0;
    x.innerHTML=y;
});

