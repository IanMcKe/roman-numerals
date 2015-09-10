var romanNumerals = function(num) {
        // some code
        // var conNum = num;
        // var romanString = "";
        // var countNum = 0;
        // if ((Math.floor(num / 1000) >= 1) && (Math.floor(num / 1000) < 4)) {
        //     countNum = Math.floor(num / 1000);
        //     for (var i = 1; i <= countNum; i++) {
        //         romanString += "M";
        //     }
        //
        // } else {
        // // if number % 1000 >= 1
        // //     divide by 1000,
        // // else if
        // //
        // // else if
        //     romanString += "I";
        // }

        //return romanString;

        var romanString = "";
        var romanNumerals = ["M", "CM", "D", "CD","C","XC","L","XL","X","IX","V","IV","I"];
        var numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

        for (var i = 0; i < romanNumerals.length; i++) {
            while(num >= numbers[i]) {
                romanString += romanNumerals[i];
                num -= numbers[i];
            }
        }

        return romanString;
};



//
// Symbol  Value
// I       1
// V       5
// X       10
// L       50
// C       100
// D       500
// M       1,000
