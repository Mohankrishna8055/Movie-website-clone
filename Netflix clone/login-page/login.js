function printdetails() {
    let Uname = document.getElementById("Uname").value;
    let Uemail = document.getElementById("userEmailid").value;
    let Upassword = document.getElementById("userpassword").value;
    let Uretypepass = document.getElementById("userRetypepassword").value;
    let verification = document.getElementById("verification");
    
    console.log(Uname);
    console.log(Uemail);
    console.log(Upassword);
    console.log(Uretypepass);
    console.log(verification.checked);
}


function check1( pass1, pass2) {
    if (pass1!=pass2) {
        return false;
    }
    else{
        return true;
    }
}

function check(){
    let Uname = document.getElementById("Uname").value;
    let Uemail = document.getElementById("userEmailid").value;
    let Upassword = document.getElementById("userpassword").value;
    let Uretypepass = document.getElementById("userRetypepassword").value;
    let verification = document.getElementById("verification");

    if(Uname===""&&Uemail===""&&Upassword===""&&Uretypepass===""&&verification.checked===false){
        alert("Please fill all manditaory fields");
        return false;
    }
    else if (Uname===""&&Uemail!=""&&Upassword!=""&&Uretypepass!=""&&verification.checked!=false){
        alert("Please fill user name to continue");
        return false;
    }
    else if (Uname!=""&&Uemail===""&&Upassword!=""&&Uretypepass!=""&&verification.checked!=false){
        alert("Please fill email id to continue");
        return false;
    }
    else if (Uname!=""&&Uemail!=""&&Upassword===""&&Uretypepass!=""&&verification.checked!=false){
        alert("Please fill password to continue");
        return false;
    }
    else if (Uname!=""&&Uemail!=""&&Upassword!=""&&Uretypepass===""&&verification.checked!=false){
        alert("Please retype the password to continue");
        return false;
    }
    else if (Uname!=""&&Uemail!=""&&Upassword!=""&&Uretypepass!=""&&verification.checked===false){
        alert("Please accept the terms and conditions");
        return false;
    }
    else if (Uname!==""&&Uemail===""&&Upassword===""&&Uretypepass===""&&verification.checked==false){
        alert("Please fill remainaing fields to continue");
        return false;
    }
    else if (Uname!=""&&Uemail!==""&&Upassword===""&&Uretypepass===""&&verification.checked==false){
        alert("Please fill remainaing fields to continue");
        return false;
    }
    else if (Uname!=""&&Uemail!=""&&Upassword!=""&&Uretypepass===""&&verification.checked==false){
        alert("Please fill remainaing fields to continue");
        return false;
    }
    else if (Uname!=""&&Uemail!=""&&Upassword!=""&&Uretypepass!==""&&verification.checked==false){
        alert("Please accept the terms and conditions");
        return false;
    }
    else if (Uname!=""&&Uemail!=""&&Upassword!=""&&Uretypepass!==""&&(verification.checked==false||verification.checked!=false)){
        let val= check1(Upassword,Uretypepass);
        if(val===false){
            alert("Retype password must be matched with passsword");
            return false;
        }
        else{
            return true;
        }
    }
    else{
        return true;  
    }
    
}


function submitForm() {
    let result = check();

    if (result === true) {
        document.getElementById("login-page").disabled = true;
        let val = document.getElementById("hidden-link");
        val.click();
    }
}
