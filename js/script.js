function init() {

    var button = document.getElementById('entrybutton');
  
    function showText() { 

      var text = document.getElementById('entryinput');
      document.getElementById('textoutput').innerHTML = text.value;
      alert("Cooper Christon: " + text.value);
    }
  
    button.addEventListener('click', showText);
}
    
window.addEventListener('load', init);