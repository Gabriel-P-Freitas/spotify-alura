const searchInput = document.getElementById("input-music");
const resultArtists = document.getElementById("result-artist");
const resultPlaylist = document.getElementById("result-playlists");

document.addEventListener("input", function () {
  const searchTerm = searchInput.value.toLowerCase();
  if (searchTerm === "") {
    resultPlaylist.classList.add("hidden");
    resultArtists.classList.add("hidden");
    return;
  }

  requestApi(searchTerm);
});

function requestApi(searchTerm) {
  const url = `http://localhost:3000/artists?name_like=${searchTerm}`;
  fetch(url)
    .then((response) => response.json())
    .then((result) => displayResults(result));
}

function displayResults(result) {
  resultPlaylist.classList.add("hidden");
  const artistName = document.getElementById("artist-name");
  const artistImage = document.getElementById("artist-img");

  result.forEach((element) => {
    artistName.innerText = element.name;
    artistImage.src = element.urlImg;
  });

  resultArtists.classList.remove("hidden");
}

const playArtist = document.getElementById("play-artist");
const cardArtist = document.getElementById("card-artist");
cardArtist.addEventListener("mouseover", () => {
  playArtist.classList.add("active");
});

cardArtist.addEventListener("mouseout", () => {
  playArtist.classList.remove("active");
});
