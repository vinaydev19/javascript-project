let songsArr = [
  {
    songName: "Pehle Bhi Main",
    songUrl: "/songs/Pehle Bhi Main.mp3",
    songImg: "/images/animal.jpg",
    songRunTime: "4:10",
  },
  {
    songName: "Ram Siya Ram",
    songUrl: "/songs/Ram Siya Ram.mp3",
    songImg: "/images/ram.jpg",
    songRunTime: "3:30",
  },
  {
    songName: "jale",
    songUrl: "/songs/Jale 2.mp3",
    songImg: "/images/jale.jpg",
    songRunTime: "2:39",
  },
  {
    songName: "Arjan Vailly Ne",
    songUrl: "/songs/Arjan Vailly Ne.mp3",
    songImg: "/images/animal.jpg",
    songRunTime: "3:02",
  },
];

let audio = new Audio();
let AllSongs = document.querySelector("#all-songs");
let selectedSong = 0;
let poster = document.querySelector("#left");
let backward = document.querySelector("#backward");
let play = document.querySelector("#play");
let forward = document.querySelector("#forward");

function ShowSongInHtml() {
  let clutter = "";
  songsArr.forEach((song, index) => {
    clutter += `
                  <div class="song-card" id="${index}">
                <div class="part1">
                  <img src="${song.songImg}" alt="" />
                  <h2>${song.songName}</h2>
                </div>
                <h6>${song.songRunTime}</h6>
              </div>
        `;
  });

  //   console.log(clutter);
  audio.src = songsArr[selectedSong].songUrl;
  poster.style.backgroundImage = `url(${songsArr[selectedSong].songImg})`;
  AllSongs.innerHTML = clutter;
}

ShowSongInHtml();

AllSongs.addEventListener("click", (e) => {
  //   console.log(songsArr[e.target.id]);
  selectedSong = e.target.id;
  play.innerHTML = `<i class="ri-pause-fill"></i>`;
  playFlag = 1;
  ShowSongInHtml();
  audio.play();
});

let playFlag = 0;
play.addEventListener("click", () => {
  if (playFlag == 0) {
    play.innerHTML = `<i class="ri-pause-fill"></i>`;
    ShowSongInHtml();
    audio.play();
    playFlag = 1;
  } else {
    play.innerHTML = `<i class="ri-play-fill"></i>`;
    playFlag = 0;
    ShowSongInHtml();
    audio.pause();
  }
});

forward.addEventListener("click", (e) => {
  if (selectedSong > songsArr.length - 1) {
    selectedSong++;

    ShowSongInHtml();
    audio.play();
  } else {
    forward.style.opacity = 0.3;
  }
});
backward.addEventListener("click", (e) => {
  if (selectedSong > 0) {
    selectedSong--;
    ShowSongInHtml();
    audio.play();
  } else {
    backward.style.opacity = 0.3;
  }
});
