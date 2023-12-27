// project requiement 
// change the Background color by generating random rgb color by clicking button.
// steps

// step 1 create onload function 
window.onload=()=>{
    main()
}

function main(){
    const root=document.getElementById('root');
    const btn=document.getElementById('change-btn');
    btn.addEventListener('click' ,function(){
        const bgColor=generateRGBColor();
        root.style.backgroundColor=bgColor;
    });
}


// step 2 create random color generator function
function generateRGBColor(){
    // rgb(0 ,0 ,0) rgb(255 ,255 ,255)
    const red =Math.floor(Math.random() * 255);
    const green= Math.floor(Math.random() * 255);
    const blue=Math.floor(Math.random() * 255);
    return `rgb(${red},${green},${blue})`;
    

}



// step 3 collect all necessary references





// step 4  handle click event 