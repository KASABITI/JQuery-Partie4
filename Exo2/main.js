// il faut recuperer les valeur saisies dans les inputs
// on doit additioner les valeurs et on doit fait la moyenne
// on peut afficher la moyenne dans une alert

$(document).ready(function(){
$("#average").click (function(){
    var sum = 0;
    var average = 0;
    $('.notes').each(function() {
        sum += parseFloat($(this).val());
       
    });
    average = sum /$(".notes").length;
    alert("la moyenne est " + average);
});
    
});