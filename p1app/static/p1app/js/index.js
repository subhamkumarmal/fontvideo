window.onload = function(e){
    e.defaultPrevented
$('.icons').on('click',function (){
   inputarea=document.getElementById('inputarea')
    faclass=document.getElementById('faid')
    faclass.classList.toggle('fa-close')
    inputarea.classList.toggle('noneclass')
})
$('.vid-btn').on('click',function (){
    document.querySelector('.controls .active').classList.remove('active')

    idget=this.id.toString()
    document.querySelector(`#${idget}`).classList.add('active')
    let srcget=document.querySelector(`#${idget}`).getAttribute('data-src')
    console.log(srcget)
    document.querySelector('.videoarea').src= srcget;
})
};