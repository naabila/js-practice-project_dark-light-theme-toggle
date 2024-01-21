let body=document.querySelector('body');
let toggle=document.querySelector('.switch');
let check=document.querySelector('.check')
toggle.addEventListener('change',()=>{
    if(check.checked){
        body.classList.add('dark');
    }else{
        body.classList.remove('dark');
    }
})
