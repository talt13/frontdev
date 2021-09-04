function checkParams() {
        var text = $('#required').val();
       
         
        if(text.length >=1) {
            $('#submitbutton').removeAttr('disabled');
            
        } 
        else {
            $('#submitbutton').attr('disabled', 'disabled');
        };
    
        text.onblur = function() {
            if(input.length >=1) { 
            input.classList.add('invalid');
            error.innerHTML = 'Поле является обязательным для ввода'
            }
        };

        text.onfocus = function() {
            if (this.classList.contains('invalid')) {

            this.classList.remove('invalid');
            error.innerHTML = "";
            }
        };
};


$('#submitbutton').on('click', function () {
    var validation = true;
    if (validation) {

        return true;
    }
    else {
        return false;
    }
});
    
checkParams();