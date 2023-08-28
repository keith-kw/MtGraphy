function regis(event){
    event.preventDefault();
    let name = document.getElementById('name').value;
    let password = document.getElementById('password').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;

    console.log('name', name);
    console.log('password', password);
    console.log('email', email);
    console.log('phone', phone);

    document.getElementById('errName').innerText = "";
    document.getElementById('errPassword').innerText = "";
    document.getElementById('errEmail').innerText = "";
    document.getElementById('errPhone').innerText = "";

    if(name.length < 5 || name.length > 50){
        document.getElementById('errName').innerText = "*Name length must between 5 to 50";
    }
    if(!alphanum(password)){
        document.getElementById('errPassword').innerText = "*Password must contain character and number";
    }
    if(!email.endsWith('gmail.com')){
        document.getElementById('errEmail').innerText = "*Invalid E-mail Address";
    }
    if(phone.length < 11 || phone.length > 13){
        document.getElementById('errPhone').innerText = "*Invalid Phone Number";
    }
}

function alphanum(str){
    let num = 0;
    let char = 0;
    for(let i = 0; i < str.length; i++){
        if('A'<= str[i] && str[i] >= 'Z'){
            char++;
        }else if('a'<= str[i] && str[i] >= 'z'){
            char++;
        }else if('0'<= str[i] && str[i] >= '0'){
            num++;
        }else{
            return false;
        }
    }
    if(num != 0 && char != 0){
        return true;
    }else{
        return false;
    }
}

document.getElementById('btn').addEventListener('click', regis);