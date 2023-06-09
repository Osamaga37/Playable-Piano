const pianoKeys = document.querySelectorAll(".piano-keys .key"),
volumeSlider = document.querySelector(".volume-slider input"),
keysCheckbox = document.querySelector(".keys-checkbox input");

let allkeys = [],
 audio = new Audio("tunes/a.wav"); //by default, audio src is "a" tune

const playTune = (key) =>{
    audio.src = `tunes/${key}.wav`; // passing audio src based on key pressed
    audio.play(); //playing audio

    const clickedKey = document.querySelector(`[data-key="${key}"]`); // getting clicked key element
    clickedKey.classList.add("active"); // adding active class to the clicked key element
    setTimeout(() => { //removing active class to the clicked key element
        clickedKey.classList.remove("active");
    }, 150)
}

pianoKeys.forEach(key => {
    allkeys.push(key.dataset.key); // adding data-key value to the allKeys array
    // calling playTune function with passing data-key value as an argument
    key.addEventListener("click", () => playTune(key.dataset.key))
    console.log();
});

const showHideKeys = () => {
    // toggling hide class from each key on the checkbox click
    pianoKeys.forEach(key => key.classList.toggle("hide"));
}

const handleVolume = (e) => {
    audio.volume = e.target.value; // passing the range slider value as an audio volume
}

const pressKey = (e) => {
    // if the pressed key is in the allKeys array, only call the playTune function
    if (allkeys.includes(e.key))playTune(e.key);
}

keysCheckbox.addEventListener("click", showHideKeys);
volumeSlider.addEventListener("input", handleVolume);
document.addEventListener("keydown", pressKey);