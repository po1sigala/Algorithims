$(document).ready(function() {
    console.log("logic loaded");
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
        //convert the input seperated by spaces into an array.
        /*[a,c,c,d,f,g,g]
        0,a
        1,c
        2,c
        3,d
        4,f
        5,g
        6,g
        */
        let inputArray = $(".dupBox")
            .val()
            .toString()
            .split(" ");
        console.log(`initial input as an array is ${inputArray}`);
        let uniquesOnly = [];
        for (i = 0; i < inputArray.length; i++) {
            // filterUnique(inputArray[i], i);
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
    const fizzBuzz = number => {
        //if number is divisible by three return fizz if divisible by 5 return buzz else return the number
        let numArray = number.split("");
        numArray.forEach(number => {
            if (number % 15 === 0) {
                return "FizzBuzz";
            } else if (number % 5 === 0) {
                return "Buzz";
            } else if (number % 3) {
                return "Fizz";
            } else {
                return number;
            }
        });
    };
});
