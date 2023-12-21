let imgs;

document.addEventListener('DOMContentLoaded', ()=>{

    imgs = document.getElementsByClassName("tankImg");

    document.getElementById("check").addEventListener('change', (e)=>{change(e)});
});

function change(e){
    if (e.currentTarget.checked) {
        for (const img of imgs) {
            img.src = img.src.replace("top", "bot");
        }
    } else {
        for (const img of imgs) {
            img.src = img.src.replace("bot", "top");
        }
    }

    let progressBars = document.getElementsByTagName("progress");

    for (const bar of progressBars) {
        bar.value = Math.random() * 100;
    }
}