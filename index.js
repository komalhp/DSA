


let btn=document.querySelector('#submit');
btn.addEventListener('click',formdata);

function formdata(e){
    e.preventDefault();
   
    let name=document.getElementById('Name').value;
    // console.log(name)
    
    let Email=document.getElementById('Email').value;
    let Number=document.getElementById('Number').value;
    let Address=document.getElementById('Address').value;
    console.log(name,Number,Address)
}