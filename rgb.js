// DOM 
let boxes=document.querySelectorAll('.box');
let rgbCode=document.querySelector('#rgbCode');
let winLabel=document.getElementById('winLabel');
boxes=Array.from(boxes);
boxes.map(box=>{
    box.style.background=`rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`;
    box.addEventListener('click',check);
});
let i=Math.floor(Math.random()*6);
rgbCode.textContent=boxes[i].style.background;
function check(){
    // if code Matched
    if(this.style.background==rgbCode.textContent){
        boxes.forEach(box=>{
            box.style.background=this.style.background;
            box.style.opacity='1';
        })
        rgbCode.style.background=rgbCode.textContent;
        winLabel.textContent="You Guess It";
        winLabel.style.background='Green';
        winLabel.style.transform='rotateY(360deg)';
        winLabel.style.transition='1s all ease-out';
        return true;
    }
    else{
        this.style.opacity='0';
    }
}
