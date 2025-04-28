

function showSection(sectionId) {
  const sections = document.querySelectorAll(".section");
  sections.forEach((section) => section.style.display = "none");
  document.getElementById(sectionId).style.display = "block";
}

const audioPlayer = document.getElementById("mainAudio");
const audioTitle = document.getElementById("audioTitle");
const audioThumbnail = document.getElementById("audioThumbnail");
const playPauseBtn = document.getElementById("playPauseBtn");
const progressBar = document.getElementById("progressBar");
const currentTimeDisplay = document.getElementById("currentTime");
const totalDurationDisplay = document.getElementById("totalDuration");

function playTutorial(title, file, thumb) {
  audioPlayer.src = file;
  audioTitle.innerText = title;
  audioThumbnail.src = thumb;
  audioPlayer.play();
  playPauseBtn.innerHTML = '<i class="bi bi-pause-fill"></i>';
  showSection('player');
}

function togglePlay() {
  if (audioPlayer.paused) {
    audioPlayer.play();
    playPauseBtn.innerHTML = '<i class="bi bi-pause-fill"></i>';
  } else {
    audioPlayer.pause();
    playPauseBtn.innerHTML = '<i class="bi bi-play-fill"></i>';
  }
}

function rewindAudio() {
  audioPlayer.currentTime -= 10;
}

function forwardAudio() {
  audioPlayer.currentTime += 10;
}

function speedUpAudio() {
  audioPlayer.playbackRate = audioPlayer.playbackRate === 1 ? 1.5 : 1;
}

function updateProgress() {
  if (!audioPlayer.duration) return;
  const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
  progressBar.value = progress;
  currentTimeDisplay.innerText = formatTime(audioPlayer.currentTime);
}

function setDuration() {
  totalDurationDisplay.innerText = formatTime(audioPlayer.duration);
}

function seekAudio(value) {
  audioPlayer.currentTime = (value / 100) * audioPlayer.duration;
}

function formatTime(seconds) {
  const min = Math.floor(seconds / 60);
  const sec = Math.floor(seconds % 60);
  return `${min < 10 ? '0' : ''}${min}:${sec < 10 ? '0' : ''}${sec}`;
}