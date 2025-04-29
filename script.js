const passwordBox = document.getElementById('password');
const lenght = 12;

// Uppercase A-Z
const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
// Lowercase a-z
const lowercase = 'abcdefghijklmnopqrstuvwxyz';
// Special chars
const specialChars = '!@#$%^&*()_+-={}[]|\\:;"\'<>?,./~`©®';

const allChar = uppercase+lowercase + specialChars;


    function creatPassword(){
        let password = "";
    
        password += uppercase[Math.floor(Math.random() * uppercase.length)];
        password += lowercase[Math.floor(Math.random() * lowercase.length)];
        password += specialChars[Math.floor(Math.random() * specialChars.length)];
    
        while(lenght> password.length){
            password += allChar[Math.floor(Math.random() * allChar.length)];
        }
        passwordBox.value = password;
    }

function copyPassword(){
    passwordBox.select();
    document.execCommand("copy");
   
}
