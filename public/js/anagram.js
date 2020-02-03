//take a word and an arry of words. fin dthe anagrams in the list of the work
function anagrams(word, words) {
    let pattern = word.split("");
    let mapped = pattern.map(letter => (letter = `[${pattern}]`));

    pattern = mapped.join("");
    pattern = `^${pattern}$`;
    console.log(pattern);
    const regeX = new RegExp(pattern);
    const isAnagram = word => {
        regeX.test(word);
    };
    const matched = words.filter(word => regeX.test(word));

    return matched;
}
console.log(
    anagrams("dog", ["god", "god", "dog", "frank", "gdo", "gdo", "dogggg"])
);
