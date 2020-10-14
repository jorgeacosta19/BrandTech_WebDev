var valueA;
var valueB;
var valueC;

function calculator() {
    /*Variables */

    var $result = document.getElementById('result');
    var $zero = document.getElementById('zero');
    var $one = document.getElementById('one');
    var $two = document.getElementById('two');
    var $three = document.getElementById('three');
    var $four = document.getElementById('four');
    var $five = document.getElementById('five');
    var $six = document.getElementById('six');
    var $seven = document.getElementById('seven');
    var $eight = document.getElementById('eight');
    var $nine = document.getElementById('nine');
    var sum = document.getElementById('sum');
    var sub = document.getElementById('sub');
    var mult = document.getElementById('mult');
    var division = document.getElementById('division');
    var equal = document.getElementById('equal');
    var decimal = document.getElementById('decimal');
    var clear = document.getElementById('clear');


    /*===Events ===*/
    zero.onclick = function(e) {
        $result.textContent = $result.textContent + "0";
    }
    one.onclick = function(e) {
        $result.textContent = $result.textContent + "1";
    }
    two.onclick = function(e) {
        $result.textContent = $result.textContent + "2";
    }
    three.onclick = function(e) {
        $result.textContent = $result.textContent + "3";
    }
    four.onclick = function(e) {
        $result.textContent = $result.textContent + "4";
    }
    five.onclick = function(e) {
        $result.textContent = $result.textContent + "5";
    }
    six.onclick = function(e) {
        $result.textContent = $result.textContent + "6";
    }
    seven.onclick = function(e) {
        $result.textContent = $result.textContent + "7";
    }
    eight.onclick = function(e) {
        $result.textContent = $result.textContent + "8";
    }
    nine.onclick = function(e) {
        $result.textContent = $result.textContent + "9";
    }
    clear.onclick = function(e) {
        clearScreen();
    }
    sum.onclick = function(e) {
        valueA = $result.textContent;
        valueC = "+";
        cleaning();
    }
    sub.onclick = function(e) {
        valueA = $result.textContent;
        valueC = "-";
        cleaning();
    }
    mult.onclick = function(e) {
        valueA = $result.textContent;
        valueC = "*";
        cleaning();
    }
    division.onclick = function(e) {
        valueA = $result.textContent;
        valueC = "/";
        cleaning();
    }
    equal.onclick = function(e) {
        valueB = $result.textContent;
        solving();
    }

    function cleaning() {
        $result.textContent = "";
    }

    function clearScreen() {
        $result.textContent = "";
        valueA = 0;
        valueB = 0;
        valueC = "";
    }

    function solving() {
        var solv = 0;
        switch (valueC) {
            case "+":

                solv = parseFloat(valueA) + parseFloat(valueB);
                break;
            case "-":
                solv = parseFloat(valueA) - parseFloat(valueB);
                break;

            case "*":
                solv = parseFloat(valueA) * parseFloat(valueB);
                break;
            case "/":
                solv = parseFloat(valueA) / parseFloat(valueB);
                break;

        }
        // clearScreen();
        $result.textContent = solv;

    }


}