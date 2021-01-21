var numberArray = [];

function isAlphaNumeric() {
    var str = document.getElementById('input').value;
    if (str) {
        var alpha = new RegExp("^[A-Za-z]+$", 'i');
        var numbers = new RegExp("^[0-9]*$", 'i');

        var alphabet = alpha.test(str)
        var num = numbers.test(str);

        if (alphabet) {
            myAppendFunction(str, "myalpha");
        } else if (num) {
            
            numberArray.push(str);
            myAppendFunction(str, "myList");
        } else {
            myAppendFunction(str, "alphanum");
            
        }
    }
}



function myAppendFunction(data, id,) {
    document.getElementById(id).innerHTML += "<span style='margin:10px;'>" + data + "&nbsp;&nbsp;&nbsp;" + "<button onclick='hide()' id='btn'>delete</button>" + "</span>" + "<br>";
    //const buttonElement = document.getElementById('btn');
    console.log(data)
   
}

function hide(){
    var x = document.getElementById("myList");
    var y = document.getElementById("myalpha");
    var z = document.getElementById("alphanum");
    x.remove(x.selectedIndex); 
    y.remove(y.selectedIndex);
    z.remove(z.selectedIndex);
}
   
//Refresh the page before entering the second time in the input field
