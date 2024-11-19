var imgList = Array.from(document.querySelectorAll('.item img'));
var lightBoxContainer = document.querySelector('.lightBoxContainer')
var lightitem = document.querySelector('.lightitem')

var nextBtn = document.querySelector('#next');
var prvBtn = document.querySelector('#prv');
var currentIndex;

for(let i=0 ; i<imgList.length ; i++){
    imgList[i].addEventListener('click' , function(event){
        lightBoxContainer.classList.replace('d-none' , 'd-flex')
        var imgsrc = event.target.getAttribute('src')
        lightitem.style.backgroundImage = `url(${imgsrc})`;
        currentIndex = imgList.indexOf(event.target) ;
        console.log();
        
    })
}


function nextSlide(){
    if (currentIndex== imgList.length){
        currentIndex=0;
    }
    currentIndex++;
    var imgsrc = imgList[currentIndex].getAttribute('src')
    lightitem.style.backgroundImage = `url(${imgsrc})`
    
    
}

function prvSilde(){
    if(currentIndex==-1){
        currentIndex=5;
    }
    currentIndex--;
    var imgsrc = imgList[currentIndex].getAttribute('src')
    lightitem.style.backgroundImage = `url(${imgsrc})`

}

prvBtn.addEventListener('click' , prvSilde)
nextBtn.addEventListener('click' , nextSlide)
