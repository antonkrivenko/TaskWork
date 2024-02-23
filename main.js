// document.getElementById('myform').addEventListener('submit', function(e){
//      e.preventDefault();
function checkForm(){
     let el = document.getElementById('myform')

    let  username = el.username.value
    let email = el.email.value
    let password = el.password.value
    let gender = el.gender.value
    console.log(username, email, password, gender)
    // document.write(username, email, password, gender)

    let error = ''
    if(username.length < 2 )
        error = 'Ім\'я занадто мале!!!'
    else if(email.length < 2)
         error = "Email занадто малий!!!"
    else if(!email.includes('@'))
         error = "Email немає @!!!"
    else if(password.length < 2)
         error = "Pasword занадто малий!!!"
    else if(gender == null || gender == '')
         error = "Gender error!!!"


         if(error != "") {
            document.getElementById('error').innerHTML = error;
            return false;
         }

         document.getElementById('error').innerHTML = '';
         window.location = 'index.html'

    return false;
}

const togglePasswordButton = document.getElementById('togglePassword');
const passwordInput = document.getElementById('password');

togglePasswordButton.addEventListener('click', function(event) {
  event.preventDefault();
  
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    togglePasswordButton.textContent = 'Hide';
  } else {
    passwordInput.type = 'password';
    togglePasswordButton.textContent = 'Show';
  }
});