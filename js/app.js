
    function checkForm(form) {
            var e = 0;
            for (var i = 0; i < form.length-1; i++) {
                if (!form[i].value.replace(/^\s+|\s+$/g, '')){
                    form[i].style.border='1px solid #FF8484';
                    e = 1;
                }
            }
            if(e) {
                alert ('Поле является обязательным для ввода');
                {
                    alert.style.color='#FF8484'
                };
                return false;
            }
        }
        

var inputs = document.querySelectorId('required');
var button = document.querySelectorId('submitbutton');

var handleChange = () => {
	for	(var input of inputs) {
  	if (input.value === "") {
    	button.setAttribute('disabled', '');
    	return;
    }
  }
  button.removeAttribute('disabled');
}

for (var input of inputs) {
	input.onkeydown = input.onkeyup = input.onkeypress = input.change = handleChange;
}
