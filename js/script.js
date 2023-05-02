const btn=document.querySelector('#Platinum .btncontainer button');
const platinum=document.querySelector('#Platinum .hidden');
btn.addEventListener('click',()=>{
    platinum.style.display=(!(platinum.style.display=='none'))?'none':'block';
});
btn.addEventListener('mouseover',()=>{
btn.innerText='platinum part';
});
btn.addEventListener('mouseout',()=>{
    btn.innerText='View More';
    });
const babybtn=document.querySelector('#baby .btncontainer button');
const baby=document.querySelector('#baby .hidden');
babybtn.addEventListener('click',()=>{
    baby.style.display=(!(baby.style.display=='none'))?'none':'block';
});
babybtn.addEventListener('mouseover',()=>{
babybtn.innerText='baby part';
});
babybtn.addEventListener('mouseout',()=>{
    babybtn.innerText='View More';
});
const specialbtn=document.querySelector('#special .btncontainer button');
const special=document.querySelector('#special .hidden');
specialbtn.addEventListener('click',()=>{
    special.style.display=(!(special.style.display=='none'))?'none':'block';
});
specialbtn.addEventListener('mouseover',()=>{
    specialbtn.innerText='special part';
});
specialbtn.addEventListener('mouseout',()=>{
    specialbtn.innerText='View More';
});