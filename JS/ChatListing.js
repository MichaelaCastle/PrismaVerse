let inSub = false;
function openSubmenu(menu) {
    // Hide all elements with class="tabcontent" by default */
    let tabcontent = document.querySelectorAll("#options .body .section");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Show the specific tab content
    document.querySelector(`#${menu}`).style.display = "block";

    inSub = true;
}
function backOptions() {
    if(inSub){
        let tabcontent = document.querySelectorAll("#options .body .section");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        document.querySelector(`#o_chat`).style.display = "block";
        document.querySelector(`#o_appearance`).style.display = "block";
        document.querySelector(`#o_application`).style.display = "block";
    }
}



let currColorPick = null;
function openColors(){
    document.querySelector('.colors').style.display = "flex";
}
function openMoreColors(col){
    document.querySelector('.more-colors').style.display = "flex";
    currColorPick = col;
    document.querySelector(`.colors .c${col}`).style.borderWidth = "5px";
    document.querySelector(`.colors .c${col}`).style.filter = "saturate(60%) brightness(200%)";
    document.querySelector(`.colors .c${col === 1 ? 2 : 1}`).style.borderWidth = "2px";
    document.querySelector(`.colors .c${col === 1 ? 2 : 1}`).style.filter = "none";
}
function setCol(col){
    if(col < 390){
        document.documentElement.style.setProperty(`--color${currColorPick}`, col);
        document.documentElement.setAttribute(`data-theme-${currColorPick}`, "normal");
        let col2 = parseInt(getComputedStyle(document.body).getPropertyValue(`--color${currColorPick === 1 ? 2 : 1}`));
        console.log(col);
        console.log(col2);
        console.log(col + col2);
        document.documentElement.style.setProperty("--color5", (Math.abs(col - col2) <= 180) ? ((col + col2) / 2) : (((col + col2) / 2) + 180));
        document.querySelector(`.colors .c${currColorPick}`).style.borderColor = `hwb(var(--color${currColorPick}) 0% 60%)`;
        document.querySelector(`.colors .c${currColorPick}`).style.backgroundColor = `hwb(var(--color${currColorPick}) 0% 0%)`;
    }
    else if(col === 400){
        document.documentElement.setAttribute(`data-theme-${currColorPick}`, "black");
        document.querySelector(`.colors .c${currColorPick}`).style.borderColor = "hsl(0 0% 30%)";
        document.querySelector(`.colors .c${currColorPick}`).style.backgroundColor = "hsl(0 0% 0%)";
    }
    else if(col === 500){
        document.documentElement.setAttribute(`data-theme-${currColorPick}`, "dark");
        document.querySelector(`.colors .c${currColorPick}`).style.borderColor = "hsl(0 0% 80%)";
        document.querySelector(`.colors .c${currColorPick}`).style.backgroundColor = "hsl(0 0% 50%)";
    }
    else{
        document.documentElement.setAttribute(`data-theme-${currColorPick}`, "light");
        document.querySelector(`.colors .c${currColorPick}`).style.borderColor = "hsl(0 0% 80%)";
        document.querySelector(`.colors .c${currColorPick}`).style.backgroundColor = "hsl(0 0% 50%)";
    }
}