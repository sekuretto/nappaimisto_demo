(function () {
        function contentLoaded () {
                var chars = [];
                var poistetut = [];
                var tilanne = [];
                var kaikki = [];
                a = 0;
                container = document.getElementById('container');
                deleted = document.getElementById('deleted');
                tilanne = document.getElementById('tilanne');
                
                window.addEventListener('keyup', function (e) {
                //lisätyt taulukko
                if (e.keyCode >= 46 && e.keyCode <= 90) {
                    chars.push(e.key);
                    container.textContent = chars.join('');
                    //console.log(chars);
                //poistetut
                }else if (e.keyCode === 8){
                    
                    for(i = 0; i < 1 ; i++){  
                        char = chars.join('');
                        var res = char.charAt(a);
                        poistetut.push(res);
                        deleted.textContent = poistetut.join('');
                        console.log(res);
                        a++;
                        
                    
                    }
                    //$(deleted).empty();
                //tilanne
                }if(e.keyCode >= 46 && e.keyCode <= 90){
                    kaikki.push(e.key);
                    if(e.keyCode === 8) {
                        kaikki.shift();
                        $("tilanne").empty();
                        tilanne.textContent = kaikki.join('');
                    }
                    
                    tilanne.textContent = kaikki.join('');
                    }
                }, false);
        }
 
        window.addEventListener('DOMContentLoaded', contentLoaded, false); 
}());

//backspace 8

//painettu näppäin
function myKeyPress(e){
    var keynum;

    if(window.event) { // IE                    
      keynum = e.keyCode;
    } else if(e.which){ // Netscape/Firefox/Opera                   
      keynum = e.which;
    }

    painettu = document.getElementById('painettu');
    painettu.textContent = (String.fromCharCode(keynum));
  }


//poistetut
/*function getDeletedChar(e, kinput) {
		var el = document.getElementById(kinput.id);
		var value = el.value;
		var poistetut = [];

		if (window.event) {
			if (window.event.keyCode == 8) {
				var range = document.selection.createRange();
				range.moveStart('character', -value.length);
				var idx = range.text.length;
				alert(value.charAt(idx - 1));
                poistetut.push(e.value);
			}
		} else {
			if (e.which == 8) {
				alert(value.charAt(el.selectionStart - 1));
			}
		}
		

		return false;
	}*/