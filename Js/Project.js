let checkUsername;
let checkFullname;
let checkEmail;
let checkPassword;

//USERNAME
const usr=document.getElementById('Username');
const error1=document.getElementById('error1');
const spcial =/^[a-zA-Z0-9]+$/;

usr.addEventListener('input',function(){
    const value=usr.value;
    if(value.length>15 || value.length<3 ){
    error1.style.display='block';
    usr.className='invalid';
    usr.style.border="2px solid red";
    error1.innerText="Username must be between 3 and 15 characters";
    }else if(!spcial.test(value)){
    error1.style.display='block';
    usr.className='invalid';
    error1.innerText="Username can only contain letters and numbers";
    }
    else{
    error1.style.display='none';
    usr.className= 'valid' ;
    usr.style.border="2px solid green";
    checkUsername=true;
    }
  });

//FULLNAME
const ful=document.getElementById('FullName');
const error2 = document.getElementById('error2');
const onlyLettersAndSpaces = /^[a-zA-Z\s]+$/;


ful.addEventListener('input', function () {
  const fullName = ful.value;
  const hasTwoParts = fullName.split(/\s+/).length >= 2;
  if (!fullName) {
    error2.innerText ="Please enter your full name";
    error2.style.display = 'block';
    ful.style.border="2px solid red";
    ful.className='invalid' ;
  } else if (!onlyLettersAndSpaces.test(fullName)) {
    error2.innerText =  "Full name must contain only letters and spaces";
    error2.style.display = 'block';
    ful.className='invalid' ;
    ful.style.border="2px solid red";
  } else
    if (!hasTwoParts){
    error2.innerText = "Please enter your full name";
    error2.style.display = 'block';
    ful.className='invalid' ;
    ful.style.border="2px solid red";
}
    else {
    error2.style.display = 'none';
    ful.className='valid' ;
    ful.style.border="2px solid green";
    checkFullname=true;
    }
});

//EMAIL
const email=document.getElementById('Email');
const error3=document.getElementById('error3');
function validateEmail(email) {
const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
return regex.test(email);
}
email.addEventListener('input',function(){
    if(!validateEmail(email.value)){
        error3.style.display='block';
        email.className='invalid';
        email.style.border="2px solid red";
        error3.innerText="Please enter a valid email address";
    }else{
        error3.style.display='none';
        email.className='valid';
        email.style.border="2px solid green";
        checkEmail=true;
    }
})

//PASSWORD
let check1;
let check2;
let check3;
const pass=document.getElementById('Password');)
pass.addEventListener('input',function(){
    const value=pass.value;
    if(value.length>=8){
      document.getElementById('charectrs').className='valid';
      pass.style.border="2px solid green";
      check1=true; 
    }else{
      document.getElementById('charectrs').className='invalid';
    }

    if(/\d/.test(value) || /[!@$%$#%/\|]/.test(value)){
      document.getElementById('num').className='valid';
      pass.style.border="2px solid green";
      check2=true;
    }else{
      document.getElementById('num').className='invalid';
    }

  const passw =pass.value.toLowerCase();
  const fulll=document.getElementById('FullName').value.toLowerCase();
  const emia=document.getElementById('Email').value.toLowerCase();
  const mail=emia.split('@')[0];
  if(passw.includes(fulll) || passw.includes(mail)){
    document.getElementById('cannot').className='invalid';
  }else if(passw.includes(fulll) && passw.includes(mail)){
    document.getElementById('cannot').className='invalid';
  }else{
    document.getElementById('cannot').className='valid';
    pass.style.border="2px solid green";
    check3=true;
  }

  if(check1 && check2 && check3){
    document.getElementById('Pas').className='valid';
    pass.style.border="2px solid green";
    checkPassword=true;
  }else{
    document.getElementById('Pas').className='invalid';
  }
});

//SUBMIT
const but= document.getElementById('Submit');
function checkform(){
  const ok=
  checkUsername && checkFullname && checkEmail && checkPassword;
  but.disabled=!ok
  but.style.backgroundColor= ok ? "#465FF1" : "#465FF1B2";
}
document.querySelectorAll("input").forEach(i=>{
  i.addEventListener('input',checkform)
});

//FORM
const message=document.getElementById('success');
const form=document.getElementById('formm');
form.addEventListener("submit",function(){
  const usernamee=document.getElementById('Username').value;
  const fullnamee=document.getElementById('FullName').value;
  const emaill=document.getElementById('Email').value;
  const passwordd=document.getElementById('Password').value;
  localStorage.setItem("formData",JSON.stringify({usernamee,fullnamee,emaill,passwordd:"*".repeat(passwordd.length)}));
})
window.addEventListener("load",function(){
const saved=this.localStorage.getItem("formData");
if(saved){
  const data=JSON.parse(saved);
  console.log(data);
  this.localStorage.removeItem("formData");
}
});
form.addEventListener("submit",function(event){
localStorage.setItem("successMessage","Account Created Successfully!");
});
window.addEventListener("load",function(){
const msg=this.localStorage.getItem("successMessage");
if(msg){
message.textContent=msg;
message.style.display="block";
this.localStorage.removeItem("successMessage");}
});