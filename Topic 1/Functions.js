function functionname(parameter-list)
      {
         statements
      }
      

 function test(){
        var a = parseFloat(document.getElementById('abox').value);
        var b = (document.getElementById('bbox').value);
        var c = parseFloat(document.getElementById('cbox').value);

        var answer;
        if (b == '+') {
            answer = a + c;
        }
        else if (b == '-') {
            answer = a - c;
        }
        else if (b == '*') {
            answer = a * c;
        }
        else if (b == '/'){
            answer = a / c;
        }
        //var output= 'Good Job'
        document.getElementById('message').innerHTML = answer;
    }
    
    
<button type="button" onclick="test()">Calculate</button>


alert(area(5));
var area = function (radius) {
    return Math.PI * radius * radius;
};

