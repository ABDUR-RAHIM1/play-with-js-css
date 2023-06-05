
//  color btn code 
const colorPlateBtn  = document.getElementById("colorPlateBtn");
const color_plate_wrapper = document.querySelector(".color_plate_wrapper");
 
colorPlateBtn.addEventListener("click", ()=>{ 
    if ( color_plate_wrapper.style.left == "-999px") {
        color_plate_wrapper.style.left = "0px"
    }else{
        color_plate_wrapper.style.left = "-999px"
    }
})

// color change with color usese color btn

const body = document.body;
const colorBtn = document.querySelectorAll('.color')
colorBtn.forEach(btn => {
     btn.addEventListener("click", ()=>{
        if (btn.className == "black color") { 
            body.style.backgroundColor = "#3f4347"
        }
        else if(btn.className == "red color"){
            body.style.backgroundColor = "#d85e55"
        }
        else if(btn.className == "blue color"){
            body.style.backgroundColor = "#3489eb"
        }
        else if(btn.className == "brown color"){
            body.style.backgroundColor = "brown"
        }
        else{
            console.log("wrong")
        }
     })
  
})

// categories  code is here

const categoriBtn = document.querySelectorAll(".categoriBtn")
const html = document.querySelector(".html")
const css = document.querySelector(".css")
const bootstrap = document.querySelector(".bootstrap")
const javascript = document.querySelector(".javascript")
 
categoriBtn.forEach(categoriBtn =>{
      categoriBtn.addEventListener("click", ()=>{
        console.log(categoriBtn.innerText)
        if (categoriBtn.innerText === "HTML") {
            html.style.display = "block"
            css.style.display = "none"
            bootstrap.style.display = "none"
            javascript.style.display = "none"
        }
        if (categoriBtn.innerText === "CSS") {
            html.style.display = "none"
            css.style.display = "block"
            bootstrap.style.display = "none"
            javascript.style.display = "none"
        }
        if (categoriBtn.innerText === "BOOTSTRAP") {
            html.style.display = "none"
            css.style.display = "none"
            bootstrap.style.display = "block"
            javascript.style.display = "none"
        }
        if (categoriBtn.innerText === "JAVASCRIPT") {
            html.style.display = "none"
            css.style.display = "none"
            bootstrap.style.display = "none"
            javascript.style.display = "block"
        }
        
        
      })
})


//  iamge gallary 

const mainImage = document.getElementById("mainImage")
const singleImg = document.querySelectorAll(".sImg");

singleImg.forEach(img =>{
     img.addEventListener("click", ()=>{
        mainImage.src = img.src
     })
})

//  slider 
const imageArray = ["image/8.PNG", "image/9.PNG", "image/10.PNG","image/11.PNG","image/12.PNG",]
const slider = document.querySelector(".sliderImg")
const leftBtn = document.querySelector(".left")
const rightBtn = document.querySelector(".right")
 console.log(slider.url)

let count = 0;
// right btn 
console.log(imageArray.length)
rightBtn.addEventListener("click", ()=>{
    count ++
      for(let i = 0; i < imageArray.length; i++) {
        const element = imageArray[count]; 
        slider.src = element
        if (count >= imageArray.length) {
            count = 0
        }
    }
})

leftBtn.addEventListener("click", ()=>{
    count --
      for(let i = 0; i < imageArray.length; i++) {
        const element = imageArray[count]; 
        slider.src = element 
        if (count <= 0) {
            count = imageArray.length-1
        }
    }
})

// classlist add on js 

const playOn = document.getElementById("playOn");
const playOnText = document.getElementById("playOnText")
 
playOn.addEventListener("click", ()=>{ 
    let x ;
      if (x !== true) {
        playOnText.classList = "playOneClass"
        x = true
      }else if(x === true){
        
          playOn.remove.classList= "playOneClass"
      }
})