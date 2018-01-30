function count() {
                var i;
                var text = "";
                for (i = 0; i <= 9; i += 3) {
                    text += "The number is " + i + "<br>";
                 }
                document.getElementById("").innerHTML = text;
            }

var myList = new Array(-4,11,8,18,13,13,5,-7,-7,14,-4); 
            
            function countEvens(list) {
                var evens = [];
                for (var i = 0; i < list.length; i++) {
                    if (list[i] % 2 == 0) {
                        evens.push(list[i]);
                    }
                }
                return evens.length;
            }
             
            document.getElementById("").innerHTML = countEvens(myList);

function yearOfSchool() {
            var name = document.getElementById("studentsName").value;
            var credits = parseFloat(document.getElementById("creditNumber").value);
            var message;
            
            if (0 <= credits && credits < 30) {
                message = name + ", you are a freshman";
            } 
            else if (30 <= credits && credits < 60) {
                message = name + ", you are a sophomore";
            }
            else if (60 <= credits && credits < 90) {
                message = name + ", you are a junior";
            }
            else if (90 <= credits) {
                message = name + ", you are a senior";
            }
            else {
                message = name + "Please enter a valid number of credits.";
            }
            document.getElementById("messageOutput").innerHTML = message;
        }