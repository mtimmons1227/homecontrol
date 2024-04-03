// Array of funny song names
const funnySongs = [
    "The Duck Song",
    "The Hamster Dance",
    "Banana Phone",
    "I'm Gonna Be (500 Miles) - The Proclaimers",
    "Numa Numa",
    "Never Gonna Give You Up - Rick Astley",
    "Gummy Bear Song",
    "Why Have I Lost You"
];

// Get the song name display element
const songNameDisplay = document.getElementById('songName');

// Function to display a random funny song name
function displayRandomSongName() {
    const randomIndex = Math.floor(Math.random() * funnySongs.length);
    songNameDisplay.textContent = funnySongs[randomIndex];
}

// Function to handle Play/Pause functionality
function togglePlayPause() {
    const playPauseButton = document.getElementById('playPauseMusic');
    if (playPauseButton.innerHTML.includes('Play')) {
        playPauseButton.innerHTML = '<i class="fas fa-pause"></i> Pause';
        // Display a random funny song name when the "Play" button is clicked
        displayRandomSongName();
    } else {
        playPauseButton.innerHTML = '<i class="fas fa-play"></i> Play';
    }
}

// Function to handle Stop functionality
function stopMusic() {
    document.getElementById('playPauseMusic').innerHTML = '<i class="fas fa-play"></i> Play';
    songNameDisplay.textContent = "Song Name";
}

// Function to handle Next button functionality
function playNextSong() {
    displayRandomSongName();
}

// Event listeners for music control buttons
document.getElementById('playPauseMusic').addEventListener('click', togglePlayPause);
document.getElementById('stopMusic').addEventListener('click', stopMusic);
document.getElementById('nextTrack').addEventListener('click', playNextSong);

window.addEventListener('beforeinstallprompt', (event) => {
  // Prevent Chrome 67 and earlier from automatically showing the prompt
  event.preventDefault();
  // Stash the event so it can be triggered later
  deferredPrompt = event;
  // Update UI to notify the user they can add to home screen
  showInstallButton();
});
// Get the temperature display element
const temperatureDisplay = document.getElementById('temperatureDisplay');

// Initial temperature value
let temperature = 78;

// Function to display the current temperature
function displayTemperature() {
    temperatureDisplay.textContent = temperature + '°F';
}

// Function to increase the temperature
function increaseTemperature() {
    temperature++;
    displayTemperature();
}

// Function to decrease the temperature
function decreaseTemperature() {
    temperature--;
    displayTemperature();
}

// Event listeners for temperature control buttons
document.getElementById('increaseTemp').addEventListener('click', increaseTemperature);
document.getElementById('decreaseTemp').addEventListener('click', decreaseTemperature);

// Display the initial temperature
displayTemperature();
