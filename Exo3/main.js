$(document).ready(function(){
$("#btn_submit").click(function(event){
    var nameReg=/^[a-zA-Z]$/; 
    // /^[A-ZÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖ][a-zàáâäãåąčćęèéêëėį']+([-][A-Z][a-z]+)?$/;
    var phoneNumbReg=/^[0-9"(0|\\+33|0033)[6-9][0-9]{8}$"]$/;
    var emailReg=/^[a-zA-Z0-9_-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,4}$/;
    var firstname = $('#firstname').val(),
        lastname = $('#lastname').val(),
        phoneNumber = $('#phoneNumber').val(),
        email = $('#email').val();

    var errors=false;
   if(firstname == '' ||  !nameReg.test(firstname)){
       $('#firstname').css('border', '5px solid red');   
       errors=true;
   }else{
    $('#firstname').css("border","5px solid green");
    }
   if(lastname == '' ||  !nameReg.test(lastname)){
    $('#lastname').css('border', '5px solid red');   
    errors=true;
   }else{
    $('#lastname').css("border","5px solid green");
    }
   if(email == '' || !emailReg.test(mail)){
       $('#email').css('border', '5px solid red');   
       errors=true;
   }else{
    $('#email').css("border","3px solid green");
    }
   if(phoneNumber == '' || !phoneNumbReg.test(phoneNumber)){
    $('#phoneNumber').css('border', '5px solid red');   
    errors=true;
   }else{
    $('#firstname').css("border","3px solid green");
    }
   if(errors==true){
       return false;
   }else{
       return true;
   }
});
});



// $(document).ready(function(){

//     $('button').on('click', function(){

       
//             var mail = $('#mail').val();
//             var mailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//             if (!mailReg.test(mail)){
//                 alert('non');
//                 $('#mail').css('border', '5px, solid, red');
//             } else {
//                 alert('oui');
//                 $(