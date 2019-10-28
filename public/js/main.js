$(document).ready(function() {
    console.log("logic loaded");
    // run palindrom algo when
    $(document).on("click", "#palBtn", function() {
        //get the input string to check
        console.log("clicked");
        let inputText = $(".palBox").val();
        console.log(`Checking to see if ${inputText} is a palindrome`);

        palCheck(inputText);
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
            console.log(`no ${inputReversed} is not the same as ${inputText}`);
            return false;
        }
    };
});
