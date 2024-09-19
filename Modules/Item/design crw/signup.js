let SignupBtn = document.getElementById('SignupBtn')
if(SignupBtn){
    SignupBtn.addEventListener('click' , ()=>{
        let email = document.getElementById('email')
        let password = document.getElementById('password')
        console.log(email.value,password.value);


    })

}
