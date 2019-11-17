$(document).ready(function() {
    console.log("logic loaded");

    //----------------------------  CLICK HANDLERS---------------------------------------------------------------
    // run palindrom algo when palbtn clicked
    $(document).on("click", "#palBtn", function() {
        //get the input string to check
        console.log("clicked");
        let inputText = $(".palBox").val();
        console.log(`Checking to see if ${inputText} is a palindrome`);

        palCheck(inputText);
    });
    //run remove duplicates when noDup clicked
    $(document).on("click", "#noDup", function() {
        console.log("clicked noDup");

        let inputArray = $(".dupBox")
            .val()
            .toString()
            .split(" ");
        console.log(`initial input as an array is ${inputArray}`);
        let uniquesOnly = [];
        for (i = 0; i < inputArray.length; i++) {
            //when it is a repeat the index of input will be less than the current i
            if (inputArray.indexOf(inputArray[i]) === i) {
                //if its a uniquq push it to the unique array
                uniquesOnly.push(inputArray[i]);
                console.log(uniquesOnly);
            }
        }
        alert(
            ` you entered ${uniquesOnly.length} unique inputs. they are: ${uniquesOnly}`
        );
    });
    //run fizz buzz algo when fizzbox clicked
    $(document).on("click", "#fizzBuzz", function() {
        console.log("fizz buzzing");
        //turn parse the strings to an integer so that if the user accidentally puts in non number we can get mad at him for it
        let toBeFizzBuzzed = $(".fizzBox").val();
        console.log(`the entry to be fizz buzzed is ${toBeFizzBuzzed}`);

        fizzBuzz(toBeFizzBuzzed);
    });
    $(document).on("click", "#negBtn", function() {
        console.log(`clicked`);
        let toBecomeNegative = $(".negBox").val();
        console.log(`turning ${toBecomeNegative} to a negative integer`);
        returnNeg(toBecomeNegative);
    });

    //--------------------FUNCTIONS--------------------------------------------
    const palCheck = inputText => {
        let reveresedArray = [];
        for (i = 0; i < inputText.length; i++) {
            reveresedArray.push(inputText.charAt(inputText.length - i - 1));
            console.log(reveresedArray);
        }
        let inputReversed = reveresedArray.join("");
        if (inputText === inputReversed) {
            console.log("yes");
            alert("yes that is a palidrome");
            return true;
        } else {
            alert(`no ${inputReversed} is not the same as ${inputText}`);
            return false;
        }
    };
    const filterUnique = (input, i) =>
        inputArray.filter((input, i) => {
            //when it is a repeat the index of input will be less than the current i
            if (inputArray.indexOf(input) === i) {
                //if its a uniquq push it to the unique array
                uniquesOnly.push(input);
                console.log(uniquesOnly);
            }
        });
    const fizzBuzz = stringOfNumbers => {
        //if number is divisible by three return fizz if divisible by 5 return buzz else return the number
        let numArray = stringOfNumbers.split(" ");
        let fizzBuzzedArry = [];
        numArray.forEach(number => {
            let result;

            if (number % 15 === 0) {
                result = number % 15;
                console.log("this is divisible by 15");
                console.log(`${number} divided by 15 was ${result}`);
                fizzBuzzedArry.push(`FizzBuzz`);
                return;
            } else if (number % 5 === 0) {
                result = number % 5;

                console.log("this is divisible by 5");
                console.log(`result of division is ${result}`);
                fizzBuzzedArry.push("Buzz");
                console.log("buzz");
            } else if (number % 3 === 0) {
                result = number % 3;
                console.log("this is divisible by 3");
                console.log(`result of division is ${result}`);
                fizzBuzzedArry.push("fizz");
                console.log("fizz");
            } else {
                fizzBuzzedArry.push(number);
                console.log(number);
            }
        });
        alert(` original list was ${stringOfNumbers}
        \n FizzBuzzed Version is ${fizzBuzzedArry}`);
    };
    function returnNeg(str) {
        let stringToInt = parseInt(str);
        console.log(`input string as a integeree returns as ${stringToInt}`);
        if (stringToInt < 0) {
            alert("That number is already negative");
        } else if (stringToInt > 0) {
            str = "-" + str;
            alert(parseInt(str));
        } else {
            alert("That's not a number");
        }
    }

    //return the first recurring character in a list
    function returnFirstRecurring(arry) {
        for (i = 0; i < arry.length; i++) {
            if (arry.indexOf(arry[i]) < i) {
                return arry[i];
            } else {
                ("no repeats");
            }
        }
    }
    console.log("expecting c to return");
    console.log(returnFirstRecurring(["a", "b", "c", "c"]));
    console.log("expecting a to return");
    console.log(returnFirstRecurring(["a", "b", "a", "b"]));
    console.log("expecting nothing to return");
    console.log(returnFirstRecurring(["a"]));
});
