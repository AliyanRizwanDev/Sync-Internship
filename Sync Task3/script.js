let audioPlayer = document.getElementById("audioPlayer");
let selectedFileNameDisplay = document.getElementById("selectedFileName");
let historyget = document.getElementById("history");
let history = [];
function playAudio() {
  let fileInput = document.getElementById("formFile");
  if (fileInput.files.length === 0) {
    alert("Please select a file.");
    return;
  }

  let selectedFile = fileInput.files[0];
  let objectURL = URL.createObjectURL(selectedFile);

  audioPlayer.src = objectURL;
  audioPlayer.play();
  selectedFileNameDisplay.textContent = `Playing: ${selectedFile.name}`;
  history.push(selectedFile.name);
  historylen = history.length - 1;
  if (historylen===0) {
      historyget.innerHTML = null;
    
  }
  historyget.innerHTML += `<tr><td scope="row">${historylen+1}</td><td>${history[historylen]}</td></tr>`;
  fileInput.files = null;
}

function stopAudio() {
  audioPlayer.pause();
  audioPlayer.currentTime = 0;
}
