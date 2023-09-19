function printdetails() {
    let Uname = document.getElementById("Uname").value;
    let Uemail = document.getElementById("userEmailid").value;
    let Upassword = document.getElementById("userpassword").value;
    let Uretypepass = document.getElementById("userRetypepassword").value;
    let verification = document.getElementById("verification").value;
    
    console.log(Uname);
    console.log(Uemail);
    console.log(Upassword);
    console.log(Uretypepass);
    console.log(verification);
}


function check1() {
    let Upassword = document.getElementById("userpassword").value;
    let Uretypepass = document.getElementById("userRetypepassword").value;

    if (Upassword!=Uretypepass) {
        alert("Retype password must be matched with passsword");
        return false;
    }
    else{
        return true;
    }
}

function check2() {
    
    let verification = document.getElementById("verification").value;
    if (!verification.checked()) {
        alert("Please agree the terms and conditions");
        return false;
    }
    else{
        return true;
    }
}

function check3(){
    let Uname = document.getElementById("Uname").value;
    let Uemail = document.getElementById("userEmailid").value;

    if(Uname==""&&Uemail==""){
        alert ("please enter all the manidatry fields");
        return false;
    }
    else{
        return true;
    }
}


// function totalcheck(){
//     if((check1() && check2() && check3())==true){
//         window.location.href = "C:/PROJECT FILES/GITHUB/Movie-website-clone/Netflix clone/home-Afterlogin/netflix.html";
//     }
// }
