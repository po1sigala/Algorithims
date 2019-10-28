$(document).ready(function() {
    console.log("logic loaded");
    // run palindrom algo when
    $(document).on("click", "#palBtn", function() {
        //get the input string to check
        console.log("clicked");
        let inputText = $(".palBox").val();
        console.log(`Checking to see if ${inputText} is a palindrome`);
    });
});
