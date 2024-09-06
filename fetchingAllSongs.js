// To fetch all songs from the folder, we use fetch api
async function getAllSongs(){
    let a = await fetch("http://127.0.0.1:5500/Audios/");
    let response = await a.json();
    console.log(response);
    let div = document.createElement("div");
    div.innerHTML = response;
    let as = Array.from(div.getElementsByTagName("a"));
    let songs = [];
    as.forEach((elm)=>{
        console.log(elm.href);
        if(elm.href.endsWith(".mp3")){
            songs.push(elm.href);
        }
    })
    return songs;
}
async function main(){
    let p = await getAllSongs();
    console.log(p);
}
main();