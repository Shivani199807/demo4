
const form=document.getElementById('form');
const userfirstname=document.getElementById('firstname');
const userlastname=document.getElementById('lastname');
const useremail=document.getElementById('email');
const userpassword=document.getElementById('password');
const userdob=document.getElementById('dateofbirth');
const mgender=document.getElementById('malegender');
const fgender=document.getElementById('femalegender');
const cgender=document.getElementById('customgender');


const showError=(input,message)=>{
    const Controls=input.parentElement;
    form.classList.add('error');
    const errors=Controls.querySelector('small');
    errors.textContent=message;
};

const checkUserName=()=>{
    if(userfirstname===""){
        showError(userfirstname,'What ur name?')
    }
}

form.addEventListener('submit',function(e){
    e.preventDefault();
    checkUserName();
});












// form.addEventListener('submit',(e)=>{
//     e.preventDefault();
//     checkInputs();
        
// });

// function checkInputs(){
//     const userfirstnameValue=userfirstname.value.trim();
//     const userlastnameValue=userlastname.value.trim();
//     const useremailValue=useremail.value.trim();
//     const userpasswordValue=userpassword.value.trim();
//     if(userfirstnameValue===""){
//         setErrorFor(firstname,"What's ur Name?")
//     }
// }

// function setErrorFor(input,message){
//     const Controls=input.parentElement;
//     const small=Controls.querySelector('small');
//     small.innerText=message;
//     Controls.className=" error";

// }