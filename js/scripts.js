var romanConvert = function(num) {

        var romanString = "";
        var romanNumerals = ["M", "CM", "D", "CD","C","XC","L","XL","X","IX","V","IV","I"];
        var numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
        if ((num > 3999) || (num < 1)) {
            romanString += "The Romans don't believe in your number!";
        } else {
            for (var i = 0; i < numbers.length; i++) {
                while(num >= numbers[i]) {
                    romanString += romanNumerals[i];
                    num -= numbers[i];
                }
            }
        }

        return romanString;

};

$(document).ready(function() {
    $("form#number").submit(function(event) {
        var num = parseInt($("input#number").val());
        var result = romanConvert(num);

        $('.romanConvert').text(result);

        event.preventDefault();
    });
});

//
// Symbol  Value
// I       1
// V       5
// X       10
// L       50
// C       100
// D       500
// M       1,000
