let otput = document.getElementById('Display');


function display(num) {
    otput.value += num;
}
function clearthings(){
    otput.value="";
    
    // document.getElementById('Display').value="";
}

function calculate(){
    
    otput.value = eval(otput.value);
    
   
}
function Del(){
    otput.value=otput.value.slice(0,-1);
}
