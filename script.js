// For popular songs
let popular_songs_bi_arrow_left = document.getElementById("popular_songs_bi_arrow_left");
let popular_songs_bi_arrow_right = document.getElementById("popular_songs_bi_arrow_right");
let pop_song = document.querySelector(".pop_song");

// For popular artists
let popular_artist_bi_arrow_right = document.getElementById("popular_artist_bi_arrow_right");
let popular_artist_bi_arrow_left = document.getElementById("popular_artist_bi_arrow_left");
let item = document.querySelector(".item");

popular_songs_bi_arrow_right.addEventListener("click", function () {
    pop_song.scrollLeft += 330;
})
popular_songs_bi_arrow_left.addEventListener("click", function () {
    pop_song.scrollLeft -= 330;
})

popular_artist_bi_arrow_right.addEventListener("click", function () {
    item.scrollLeft += 50;
})
popular_artist_bi_arrow_left.addEventListener("click", function () {
    item.scrollLeft -= 50;
})


const songs = [
    {
        id: "1",
        songname: `On My Way<br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "Images/1.jpg"
    },
    {
        id: "2",
        songname: `Hello Welcome Home<br>
        <div class="subtitle">Billie Eilish and Khalid</div>`,
        poster: "Images/2.jpg"
    },
    {
        id: "3",
        songname: `Baby<br>
        <div class="subtitle">Justin Bieber</div>`,
        poster: "Images/3.jpg"
    },
    {
        id: "4",
        songname: `Let Me Love You<br>
        <div class="subtitle">DJ Snake and Justin Bieber</div>`,
        poster: "Images/4.jpg"
    },
    {
        id: "5",
        songname: `Beliver<br>
        <div class="subtitle">Imagine Dragons
        </div>`,
        poster: "Images/5.jpg"
    },
    {
        id: "6",
        songname: `Rose Of The Titanic<br>
        <div class="subtitle">James Horner</div>`,
        poster: "Images/6.jpg"
    },
    {
        id: "7",
        songname: `Amake Amar Moto Thakte Dao<br>
        <div class="subtitle">Anupam Roy</div>`,
        poster: "Images/7.jpg"
    },
    {
        id: "8",
        songname: `Akhon Onek Raat<br>
        <div class="subtitle">Anupam Roy</div>`,
        poster: "Images/8.jpg"
    },
    {
        id: "9",
        songname: `Pehle Bhi Main<br>
        <div class="subtitle">Vishal Mishra and Raj Shekher</div>`,
        poster: "Images/9.jpg"
    },
    {
        id: "10",
        songname: `Stay<br>
        <div class="subtitle">Justin Bieber</div>`,
        poster: "Images/10.jpg"
    },
    {
        id: "11",
        songname: `Sorry<br>
        <div class="subtitle">Justin Bieber</div>`,
        poster: "Images/11.jpg"
    },
    {
        id: "12",
        songname: `Desi Kalakaar<br>
        <div class="subtitle">Honey Singh</div>`,
        poster: "Images/12.jpg"
    },
    {
        id: "13",
        songname: `Dear Zindegi<br>
        <div class="subtitle">Amit Trivedi and Jasleen Royal</div>`,
        poster: "Images/13.jpg"
    },
    {
        id: "14",
        songname: `Give Me Some Sun Shine<br>
        <div class="subtitle">Sonu Nigam</div>`,
        poster: "Images/14.jpg"
    },
    {
        id: "15",
        songname: `De Mauka Zindegi<br>
        <div class="subtitle">Nilotpal Bora</div>`,
        poster: "Images/15.jpg"
    }
]

let music = new Audio("Audios/1.mp3");
// music.play();

/*music.addEventListener("ended", function () {
    //playing_gif.style.opacity = 0;
    masterPlay.classList.add("bi-play-circle");
    masterPlay.classList.remove("bi-pause-circle");
})*/


let songItem = document.querySelectorAll(".songItem");
songItem.forEach((elm, i) => {
    elm.getElementsByTagName("img")[0].src = songs[i].poster;
    elm.getElementsByTagName("h5")[0].innerHTML = songs[i].songname;
})

let masterPlay = document.getElementById("masterPlay");
// let playing_gif = document.getElementById("playing_gif");
let playWave = document.getElementById("playWave");

masterPlay.addEventListener("click", function () {
    let currentSong = music.currentSrc; //http://127.0.0.1:5500/Audios/3.mp3
    // console.log(music.currentSrc);
    
    let p = currentSong.split("/Audios/")[1]; // 7.mp3
    let spiltedSongIndex = p.split(".mp3")[0];
    //console.log(p);
    //console.log(spiltedSongIndex);
    // console.log(spiltedSongIndex, typeof(spiltedSongIndex));

    if (masterPlay.classList.contains("bi-play-circle")) {
        playWave.style.display = "flex";
        masterPlay.classList.remove("bi-play-circle");
        masterPlay.classList.add("bi-pause-circle");
        music.play();
        songItem.forEach((elm) => {
            // console.log(elm.getAttribute("id"));
            if (elm.getAttribute("id") == spiltedSongIndex) {
                let songPlayPause = elm.querySelector(".bi");
                songPlayPause.classList.remove("bi-play-circle");
                songPlayPause.classList.add("bi-pause-circle");
            }
        })
    }
    else {
        // playing_gif.style.display = "none";
        playWave.style.display = "none";
        playWave.style.transition = ".8s linear";
        masterPlay.classList.add("bi-play-circle");
        masterPlay.classList.remove("bi-pause-circle");
        music.pause();
        // console.log(music.currentSrc);
        songItem.forEach((elm) => {
            // console.log(elm.getAttribute("id"));
            if (elm.getAttribute("id") == spiltedSongIndex) {
                let songPlayPause = elm.querySelector(".bi");
                songPlayPause.classList.add("bi-play-circle");
                songPlayPause.classList.remove("bi-pause-circle");
            }
        })
    }
})
let nowPlayingPoster = document.getElementById("nowPlayingPoster");
let playingSongTitle = document.getElementById("playingSongTitle");
let seek = document.getElementById("seek");
let bar2 = document.getElementById("bar2");
let dot = document.getElementById("dot");
let bi = document.querySelectorAll(".bi-play-circle");
const makeAllPlays = () => {
    bi.forEach((elm) => {
        elm.classList.add("bi-play-circle");
        elm.classList.remove("bi-pause-circle");
    })
}

const makeAllNormalBackground = () => {
    songItem.forEach((elm) => {
        elm.style.background = "rgb(105, 105, 105, .0)";
    })
}
let music_download = document.getElementById("music_download");
songItem.forEach((elm) => {
    elm.addEventListener("click", function () {
        let songPlayPause = elm.querySelector(".bi");
        // playing_gif.style.display = "block";
        //playing_gif.style.transition = ".8s linear";
        playWave.style.display = "flex";
        playWave.style.transition = ".8s linear";
        if (songPlayPause.classList.contains("bi-play-circle")) {
            songId = parseInt(elm.getAttribute("id"));
            music.src = `Audios/${songId}.mp3`;
            nowPlayingPoster.src = `Images/${songId}.jpg`;
            playingSongTitle.innerHTML = songs[songId - 1].songname;

            music_download.href = `Audios/${songId}.mp3`;
            music_download.setAttribute("download", (songs[songId - 1].songname).split("<br>")[0]);
            music.play();
            makeAllPlays();
            songPlayPause.classList.remove("bi-play-circle");
            songPlayPause.classList.add("bi-pause-circle");
            masterPlay.classList.remove("bi-play-circle");
            masterPlay.classList.add("bi-pause-circle");
            makeAllNormalBackground();
            elm.style.background = "rgb(105, 105, 105, .1)";

            /*music.addEventListener("ended", function () {
                //playing_gif.style.opacity = 0;
                songPlayPause.classList.add("bi-play-circle");
                songPlayPause.classList.remove("bi-pause-circle");
                masterPlay.classList.add("bi-play-circle");
                masterPlay.classList.remove("bi-pause-circle");
            })*/

            /*seek.addEventListener("change", function () {
                music.play();
                music.currentTime = seek.value * music.duration / 100;
                makeAllPlays();
                songPlayPause.classList.remove("bi-play-circle");
                songPlayPause.classList.add("bi-pause-circle");
                masterPlay.classList.remove("bi-play-circle");
                masterPlay.classList.add("bi-pause-circle");
            })*/
        }
        else {
            //playing_gif.style.display = "none";
            // playing_gif.style.transition = ".8s linear";
            playWave.style.display = "none";
            playWave.style.transition = ".8s linear";
            music.pause();
            songPlayPause.classList.add("bi-play-circle");
            songPlayPause.classList.remove("bi-pause-circle");
            masterPlay.classList.add("bi-play-circle");
            masterPlay.classList.remove("bi-pause-circle");
            elm.style.background = "rgb(105, 105, 105, .0)";
        }
    })
})

let currentStart = document.getElementById("currentStart");
let currentEnd = document.getElementById("currentEnd");

music.onloadedmetadata = function () {
    let duration = music.duration;
    let min = Math.floor(duration / 60);
    let sec = Math.floor(duration % 60);

    if (sec < 10) {
        sec = `0${sec}`;
    }
    currentEnd.innerText = `${min}:${sec}`;
}

music.addEventListener("timeupdate", function () {
    let currentTime = music.currentTime;
    let duration = music.duration;

    let min = Math.floor(currentTime / 60);
    let sec = Math.floor(currentTime % 60);

    if (sec < 10) {
        sec = `0${sec}`;
    }
    currentStart.innerText = `${min}:${sec}`;

    let progressValue = parseInt((currentTime / duration) * 100);
    seek.value = progressValue;
    bar2.style.width = `${seek.value}%`;
    dot.style.left = `${seek.value}%`;
})

seek.addEventListener("change", function () {
    music.play();
    music.currentTime = seek.value * music.duration / 100;

    masterPlay.classList.remove("bi-play-circle");
    masterPlay.classList.add("bi-pause-circle");
})

let vol_icon = document.getElementById("vol_icon");
let vol_seek = document.getElementById("vol_seek");
let vol_bar = document.getElementsByClassName("vol_bar")[0];
let vol_dot = document.getElementById("vol_dot");

vol_seek.addEventListener("change", function () {
    vol_bar.style.width = `${vol_seek.value}%`;
    vol_dot.style.left = `${vol_seek.value}%`;
    if (vol_seek.value == 0) {
        vol_icon.classList.remove("bi-volume-down-fill");
        vol_icon.classList.add("bi-volume-mute-fill");
        vol_icon.classList.remove("bi-volume-up-fill");
    }
    if (vol_seek.value > 0 && vol_seek.value < 50) {
        vol_icon.classList.add("bi-volume-down-fill");
        vol_icon.classList.remove("bi-volume-mute-fill");
        vol_icon.classList.remove("bi-volume-up-fill");
    }
    if (vol_seek.value > 50) {
        vol_icon.classList.remove("bi-volume-down-fill");
        vol_icon.classList.remove("bi-volume-mute-fill");
        vol_icon.classList.add("bi-volume-up-fill");
    }
    music.volume = (vol_seek.value / 100);
})

let prevSong = document.getElementById("prevSong");
let nextSong = document.getElementById("nextSong");

nextSong.addEventListener("click", function () {
    // The value of songId is updating
    if (songId >= 15) {
        songId = 1;
    }
    else {
        songId += 1;
    }
    songItem.forEach((elm) => {
        let id = parseInt(elm.getAttribute("id"));
        let playPause = elm.querySelector(".bi");
        if (id == songId) {
            music.src = `Audios/${songId}.mp3`;
            music.play();
            // playing_gif.style.display = "block";
            // playing_gif.style.transition = ".8s linear";
            playWave.style.display = "flex";
            playWave.style.transition = ".8s linear";
            if (playPause.classList.contains("bi-play-circle")) {
                makeAllPlays();
                playPause.classList.remove("bi-play-circle");
                playPause.classList.add("bi-pause-circle");
                makeAllNormalBackground();
                elm.style.background = "rgb(105, 105, 105, .1)";
                nowPlayingPoster.src = `Images/${songId}.jpg`;
                playingSongTitle.innerHTML = songs[songId - 1].songname;
            }
            else {
                playPause.classList.add("bi-play-circle");
                playPause.classList.remove("bi-pause-circle");
                elm.style.background = "rgb(105, 105, 105, .0)";
                //playing_gif.style.display = "none";
                // playing_gif.style.transition = ".8s linear";
                playWave.style.display = "none";
                playWave.style.transition = ".8s linear";
            }
        }
        masterPlay.classList.remove("bi-play-circle");
        masterPlay.classList.add("bi-pause-circle");
    })
})
prevSong.addEventListener("click", function () {
    // The value of songId is updating
    if (songId <= 1) {
        songId = 15;
    }
    else {
        songId -= 1;
    }
    songItem.forEach((elm) => {
        let id = parseInt(elm.getAttribute("id"));
        let playPause = elm.querySelector(".bi");
        if (id == songId) {
            music.src = `Audios/${songId}.mp3`;
            music.play();
            //playing_gif.style.display = "block";
            playWave.style.display = "flex";
            playWave.style.transition = ".8s linear";
            if (playPause.classList.contains("bi-play-circle")) {
                makeAllPlays();
                playPause.classList.remove("bi-play-circle");
                playPause.classList.add("bi-pause-circle");
                makeAllNormalBackground();
                elm.style.background = "rgb(105, 105, 105, .1)";
                nowPlayingPoster.src = `Images/${songId}.jpg`;
                playingSongTitle.innerHTML = songs[songId - 1].songname;
            }
            else {
                playPause.classList.add("bi-play-circle");
                playPause.classList.remove("bi-pause-circle");
                elm.style.background = "rgb(105, 105, 105, .0)";
                //  playing_gif.style.display = "none";
                playWave.style.display = "none";
                playWave.style.transition = ".8s linear";
            }
        }
        masterPlay.classList.remove("bi-play-circle");
        masterPlay.classList.add("bi-pause-circle");
    })
})

let shuffleNextRepeat = document.querySelector(".shuffleNextRepeat");
shuffleNextRepeat.addEventListener("click", function () {
    let text = shuffleNextRepeat.innerHTML;
    // console.log(text);

    if (shuffleNextRepeat.classList.contains("bi-music-note-beamed")) {
        // shuffleNextRepeat.innerHTML = "Shuffle";
        shuffleNextRepeat.classList.remove("bi-music-note-beamed");
        shuffleNextRepeat.classList.remove("bi-arrow-repeat");
        shuffleNextRepeat.classList.add("bi-shuffle");

    }
    else if (shuffleNextRepeat.classList.contains("bi-shuffle")) {
        // shuffleNextRepeat.innerHTML = "Repeat";
        shuffleNextRepeat.classList.remove("bi-music-note-beamed");
        shuffleNextRepeat.classList.add("bi-arrow-repeat");
        shuffleNextRepeat.classList.remove("bi-shuffle");
    }
    else if (shuffleNextRepeat.classList.contains("bi-arrow-repeat")) {
        // shuffleNextRepeat.innerHTML = "next"; 
        shuffleNextRepeat.classList.add("bi-music-note-beamed");
        shuffleNextRepeat.classList.remove("bi-arrow-repeat");
        shuffleNextRepeat.classList.remove("bi-shuffle");
    }
})


const music_next = () => {
    if (songId >= songs.length) {
        songId = 1;
    }
    else {
        songId++;
    }
    songItem.forEach((elm) => {
        let id = parseInt(elm.getAttribute("id"));
        let playPause = elm.querySelector(".bi");
        if (id == songId) {
            music.src = `Audios/${songId}.mp3`;
            music.play();
            if (playPause.classList.contains("bi-play-circle")) {
                makeAllPlays();
                playPause.classList.remove("bi-play-circle");
                playPause.classList.add("bi-pause-circle");
                makeAllNormalBackground();
                elm.style.background = "rgb(105, 105, 105, .1)";
                nowPlayingPoster.src = `Images/${songId}.jpg`;
                playingSongTitle.innerHTML = songs[songId - 1].songname;
            }
            else {
                playPause.classList.add("bi-play-circle");
                playPause.classList.remove("bi-pause-circle");
                elm.style.background = "rgb(105, 105, 105, .0)";
            }
        }
        masterPlay.classList.remove("bi-play-circle");
        masterPlay.classList.add("bi-pause-circle");
    })
}


const repeat_music = () => {
    songId;
    songItem.forEach((elm) => {
        let id = parseInt(elm.getAttribute("id"));
        let playPause = elm.querySelector(".bi");
        if (id == songId) {
            music.src = `Audios/${songId}.mp3`;
            music.play();
            if (playPause.classList.contains("bi-play-circle")) {
                makeAllPlays();
                playPause.classList.remove("bi-play-circle");
                playPause.classList.add("bi-pause-circle");
                makeAllNormalBackground();
                elm.style.background = "rgb(105, 105, 105, .1)";
                nowPlayingPoster.src = `Images/${songId}.jpg`;
                playingSongTitle.innerHTML = songs[songId - 1].songname;
            }

        }
        masterPlay.classList.remove("bi-play-circle");
        masterPlay.classList.add("bi-pause-circle");
    })
}

const random_music = () => {
    if (songId >= songs.length) {
        songId = 1;
    }
    else {
        songId = Math.floor(Math.random() * songs.length) + 1;
    }
    songItem.forEach((elm) => {
        let id = parseInt(elm.getAttribute("id"));
        let playPause = elm.querySelector(".bi");
        if (id == songId) {
            music.src = `Audios/${songId}.mp3`;
            music.play();
            if (playPause.classList.contains("bi-play-circle")) {
                makeAllPlays();
                playPause.classList.remove("bi-play-circle");
                playPause.classList.add("bi-pause-circle");
                makeAllNormalBackground();
                elm.style.background = "rgb(105, 105, 105, .1)";
                nowPlayingPoster.src = `Images/${songId}.jpg`;
                playingSongTitle.innerHTML = songs[songId - 1].songname;
            }
            else {
                playPause.classList.add("bi-play-circle");
                playPause.classList.remove("bi-pause-circle");
                elm.style.background = "rgb(105, 105, 105, .0)";
            }
        }
        masterPlay.classList.remove("bi-play-circle");
        masterPlay.classList.add("bi-pause-circle");
    })
}

music.addEventListener("ended", function () {
    // playing_gif.style.display = "block";
    playWave.style.display = "flex";
    playWave.style.transition = ".8s linear";
    if (shuffleNextRepeat.classList.contains("bi-music-note-beamed")) {
        music_next();
    }
    else if (shuffleNextRepeat.classList.contains("bi-shuffle")) {
        random_music();
    }
    else if (shuffleNextRepeat.classList.contains("bi-arrow-repeat")) {
        repeat_music();
    }
})

// Searching Start
let search_results = document.querySelector(".search_results");
songs.forEach((elm) => {
    let a = document.createElement("a");
    a.classList.add("card");
    a.href = "#" + elm.id;
    a.innerHTML = `<img src="${elm.poster}" alt="">
    <div class="content">
        ${elm.songname}
    </div>`;
    search_results.appendChild(a);
})

let input = document.getElementsByTagName("input")[0];
input.addEventListener("keyup", function () {
    let value = input.value;
    let input_value = input.value.toLowerCase();
    let a_s = search_results.getElementsByTagName("a");
    Array.from(a_s).forEach((elm, i) => {
        let content = elm.querySelector(".content");

        let content_value = content.innerText || content.innerHTML;
        if (content_value.toLowerCase().indexOf(input_value) > -1) {
            elm.style.display = "flex";
        }
        else {
            elm.style.display = "none";
        }
    })

    if (value == "") {
        search_results.style.display = "none";
    }
    else {
        search_results.style.display = "block";
    }
})
// Searching End