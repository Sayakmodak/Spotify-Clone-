async function getAllSongs(){
    let a = await fetch("http://127.0.0.1:5500/Audios/");
    let response = await a.text();
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
    /*for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if(element.href.endsWith(".mp3")){
            songs.push(element.href);
        }
    }*/
    return songs;
}
async function main(){
    let p = await getAllSongs();
    console.log(p);
}
main();