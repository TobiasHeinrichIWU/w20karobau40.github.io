window.addEventListener("load", function(e){document.getElementById("optin_form").addEventListener("submit", function(e){var makeValid = function(id){document.getElementById(id).className = "element mandatory";};var makeInvalid = function(id, msg){document.getElementById(id).className = "element mandatory invalid";};
/* BEGIN ELEMENTS */try{
                    var temps = document.getElementById("fa_9").getElementsByTagName("input");
                    var valid = false;
                    for(var i=0, j=temps.length; i<j; i++){
                        if(temps[i].checked===true) valid = true;
                    }
                    if(valid!==true) throw "Bitte füllen Sie das Pflichtfeld aus.";
                makeValid("fa_9");}catch(exception){e.preventDefault();makeInvalid("fa_9", exception);}try{if(document.getElementById("fa_11").getElementsByTagName("input")[0].value.match(/^s*$/)) throw "Bitte füllen Sie das Pflichtfeld aus.";makeValid("fa_11");}catch(exception){e.preventDefault();makeInvalid("fa_11", exception);}try{if(document.getElementById("fa_12").getElementsByTagName("input")[0].value.match(/^s*$/)) throw "Bitte füllen Sie das Pflichtfeld aus.";makeValid("fa_12");}catch(exception){e.preventDefault();makeInvalid("fa_12", exception);}try{var validmail = new RegExp("^[a-zA-Z0-9_.\-]+@[a-zA-Z0-9_.\-]+\.[a-zA-Z0-9]{2,13}$");var value = document.getElementById("fa_13").getElementsByTagName("input")[0].value;if(value && !validmail.test(value)) throw "Bitte füllen Sie das Pflichtfeld aus.";if(document.getElementById("fa_13").getElementsByTagName("input")[0].value.match(/^s*$/)) throw "Bitte füllen Sie das Pflichtfeld aus.";makeValid("fa_13");}catch(exception){e.preventDefault();makeInvalid("fa_13", exception);}try{if(document.getElementById("fa_17").getElementsByTagName("input")[0].checked!=true) throw "Bitte füllen Sie das Pflichtfeld aus.";makeValid("fa_17");}catch(exception){e.preventDefault();makeInvalid("fa_17", exception);}/* END ELEMENTS */
});});/* BEGIN DTP *//* END DTP */