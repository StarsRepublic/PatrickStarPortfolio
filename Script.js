document.addEventListener("DOMContentLoaded", function() {
    const textElement = document.querySelector('.text-3');
    const words = ["Web Developer", "Programmer", "Photo/Video Editor","Digital Artist"];
    let index = 0;
    let letterIndex = 0;

    function type() {
        const currentWord = "A " + words[index]; // Prepend "A" to the current word
        textElement.textContent = currentWord.slice(0, letterIndex + 1);
        letterIndex++;

        if (letterIndex === currentWord.length + 1) {
            setTimeout(() => {
                erase();
            }, 1500); // Pause before erasing
        } else {
            setTimeout(type, 100); // Type speed
        }
    }

    function erase() {
        const currentWord = "A " + words[index];
        textElement.textContent = currentWord.slice(0, letterIndex);
        letterIndex--;

        if (letterIndex === 2) { // 2 because "A " is 2 characters long
            index = (index + 1) % words.length;
            setTimeout(type, 500); // Pause before typing the next word
        } else {
            setTimeout(erase, 50); // Erase speed
        } 
    }


    type(); // Start typing
});
