let characters = null;
let c_expand = null;
let c_expand_class = null;
let c_open = false;
let c_info = null;
let cv = null;
let cv_expand = null;
let cv_open = false;

function addRole(){
    document.querySelector('.add').classList.remove("hidden");
}
function closePanel(panel){
    panel.parentElement.classList.add("hidden");
}


function OnInput() {
    this.style.height = 'auto';
    this.style.height = (this.scrollHeight) + "px";
}

function openCharacters(){
    if(!c_open){
        characters.style.width = "var(--c-width)";
        characters.style.borderWidth = "2px 0 2px 2px";
        c_expand_class.remove("fa-caret-left");
        c_expand_class.add("fa-caret-right");
    }
    else{
        closeCharacter();
        characters.style.width = "0px";
        c_expand_class.remove("fa-caret-right");
        c_expand_class.add("fa-caret-left");
        setTimeout(() => {characters.style.borderWidth = "0px";}, 50);
    }
    c_open = !c_open;
}
function openConvos(){
    if(!cv_open){
        cv.classList.add("extended");
        // cv.style.maxWidth = "100%";
        // cv.style.borderWidth = "2px 2px 2px 0";
        cv_expand.classList.remove("fa-caret-right");
        cv_expand.classList.add("fa-caret-left");
    }
    else{
        // cv.style.maxWidth = "0px";
        cv.classList.remove("extended");
        cv_expand.classList.remove("fa-caret-left");
        cv_expand.classList.add("fa-caret-right");
        // setTimeout(() => {cv.style.borderWidth = "0px";}, 25);
    }
    cv_open = !cv_open;
}
function extendPullout(elem){
    pu = elem.parentElement;
    pc = pu.querySelector('.pullout-content');
    let other_pc = document.querySelectorAll(`.pullout${pu.className.includes(" left") ? ".left" : ".right"}`);
    ei = elem.querySelector('i');
    if(pc.className.includes(" extended")){
        pc.classList.remove("extended");
        other_pc.forEach(element => {
            if(element != pu){
                element.classList.remove("hidden");
            }
        });
    }
    else{
        pc.classList.add("extended");
        other_pc.forEach(element => {
            if(element != pu){
                element.classList.add("hidden");
            }
        });
    }
    // Using info icon now, no
    // if(ei.className.includes(" fa-caret-left")){
    //     ei.classList.remove("fa-caret-left");
    //     ei.classList.add("fa-caret-right");
    // }
    // else{
    //     ei.classList.remove("fa-caret-right");
    //     ei.classList.add("fa-caret-left");
    // }
}

function closeCharacter(){
    c_info.style.maxHeight = "0px";
    c_info.style.overflowY = "hidden";
}
function showHide(elemName){
    let elem = document.querySelector(elemName);
    if(elem.className.includes(" hidden")){
        elem.classList.remove("hidden");
    }
    else{
        elem.classList.add("hidden");
    }
}
let userId = 2;
let participants = [
    {
        id: 1,
        name: "Starlight",
        pfp: "Images/pfp.jpg",
        color: "hsl(270 100% 30%)"
    },
    {
        id: 2,
        name: "Jaylex",
        pfp: "Images/pfp2.jpg",
        color: "hsl(300 100% 15%)"
    },
    {
        id: 3,
        name: "Flora",
        pfp: "Images/pfpGreen2.webp",
        color: "hsl(120 100% 20%)"
    }
];
let msgData = [
    {
        userId: 1,
        content: "Hello, this is a test message",
        usingCharacter: false,
        characterId: 0,
        deleted: false,
        isImage: false
    },
    {
        userId: 2,
        content: "Hi, how are you?",
        usingCharacter: false,
        characterId: 0,
        deleted: false,
        isImage: false
    },
    {
        userId: 1,
        content: "Good. We need a longer message, so... kjjfa jk akjfdjkajfkaj fkasjfk ahgiwhreugi huesg hushg usngjks guih 98tu89w f8j8 jf8wjfi8vhs87egh 8ewg yeas hf87qwhf 98qehf  89q rf809qh efh 7dfh w87qfh 87waehf 87awhf 8ahf98  aw8f 8w7ah 89aw h87awht8 hwa8t7 haw87efh sfy 8aw hgds hg9s jg9esj g 9ijse og es9g8 es80rg es8gh eshg 9seh g9esh g 9h eg hserg",
        usingCharacter: false,
        characterId: 0,
        deleted: false,
        isImage: false
    },
    {
        userId: 1,
        content: "mulitple from one person",
        usingCharacter: false,
        characterId: 0,
        deleted: false,
        isImage: false
    },
    {
        userId: 2,
        content: "just need more messages",
        usingCharacter: false,
        characterId: 0,
        deleted: false,
        isImage: false
    },
    {
        userId: 1,
        content: "Good. We need a longer message, so... kjjfa jk akjfdjkajfkaj hwa8t7 haw87efh sfy 8aw hgds hg9s jg9esj g 9ijse og es9g8 es80rg es8gh eshg 9seh g9esh g 9h eg hserg",
        usingCharacter: false,
        characterId: 0,
        deleted: false,
        isImage: false
    },
    {
        userId: 1,
        content: "Good. We need a longer message, so... kjjfa jk akjfdjkajfkaj fkasjfk ahgiwhreugi huesg hushg usngjks guih 98tu89w f8j8 jf8wjfi8vhs87egh 8ewg yeas hf87qwhf 98qehf  89q rf809qh efh 7dfh w87qfh 87waehf 87awhf 8ahf98  aw8f 8w7ah 89aw h87awht8 hwa8t7 haw87efh sfy 8aw hgds hg9s jg9esj g 9ijse og es9g8 es80rg es8gh eshg 9seh g9esh g 9h eg hserg",
        usingCharacter: false,
        characterId: 0,
        deleted: false,
        isImage: false
    },
    {
        userId: 2,
        content: "Good. We need a longer message,aw hgds hg9s jg9esj g 9ijse og es9g8 es80rg es8gh eshg 9seh g9esh g 9h eg hserg",
        usingCharacter: false,
        characterId: 0,
        deleted: false,
        isImage: false
    },
    {
        userId: 2,
        content: "Good. We need a longer message, so... kjjfa jk akjfdjkajfkaj fkasjfk aw87efh sfy 8aw hgds hg9s jg9esj g 9ijse og es9g8 es80rg es8gh eshg 9seh g9esh g 9h eg hserg",
        usingCharacter: false,
        characterId: 0,
        deleted: true,
        isImage: false
    },
    {
        userId: 2,
        content: "***BOLD ITALIC*** *_*UNDERLINED and ** BOLD and *<#FFFF00>*COLORS*</>* ** yeah! *_* Also * ITALIC * *-*and STRIKETHROUGH yeah yeah yeah*-*\n*<#FFFF00>*IT EXTENDS\nLINES*</>*\nJust please don't keyboard spam...",
        usingCharacter: false,
        characterId: 0,
        deleted: false,
        isImage: false
    }
    ,
    {
        userId: 2,
        content: "That message is really just this but with * instead of |:\n|||BOLD ITALIC||| |_|UNDERLINED and || BOLD and |<#FFFF00>|COLORS|</>| || yeah! |_| Also | ITALIC | |-|and STRIKETHROUGH yeah yeah yeah|-|\n|<#FFFF00>|IT EXTENDS\nLINES|</>|\nJust please don't keyboard spam...",
        usingCharacter: false,
        characterId: 0,
        deleted: false,
        isImage: false
    },
    {
        userId: 1,
        content: "this is a *<#FF0000>*character*</>* message",
        usingCharacter: true,
        characterId: 1,
        deleted: false,
        isImage: false
    },
    {
        userId: 1,
        content: "Images/pfp.jpg",
        usingCharacter: true,
        characterId: 2,
        deleted: false,
        isImage: true
    }//,
    // {
    //     userId: 2,
    //     content: "Images/darkRed.jpg",
    //     usingCharacter: false,
    //     characterId: 0,
    //     deleted: false,
    //     isImage: true
    // }
];
let characterData = [
    {
        id: 1,
        userid: 1,
        name: "Jay Star",
        nickname: "Magic boi",
        color: "hsl(200 100% 15%)",
        pfp: "Images/Pfps/Jay512.png",
        notes: "About to have another character arc\nWaiting on the Night to Fall\nFan of Bluey",
        description: "Full name: Jay Star\nAge: 24\nLink: prismoria.site/Jay.html"
    },
    {
        id: 2,
        userid: 2,
        name: "Jacob",
        nickname: "Ray of sunshine",
        color: "hsl(0 100% 15%)",
        pfp: "Images/Pfps/Jacob512.png",
        notes: "",
        description: "Full name: Jacob Jackson\nAge: 22\nLink: prismoria.site/Jacob.html"
    },
    {
        id: 3,
        userid: 2,
        name: "Elliot",
        nickname: "Doggo",
        color: "hsl(75 100% 15%)",
        pfp: "Images/Pfps/Elliot512.png",
        notes: "Anniversary: (date)\nStill planning payback\nRennovation ideas for the lab\nYooooooooooooooooooo",
        description: "Full name: Elliot Evans\nAge: 42\nLink: prismoria.site/Elliot.html"
    },
    {
        id: 4,
        userid: 1,
        name: "Sam",
        nickname: "NERD",
        color: "hsl(120 100% 15%)",
        pfp: "Images/Pfps/Sam512.png",
        notes: "",
        description: ""
    },
    {
        id: 5,
        userid: 2,
        name: "Rene",
        nickname: "Computer boi",
        color: "hsl(270 100% 15%)",
        pfp: "Images/Pfps/Rene512.png",
        notes: "",
        description: ""
    },
    {
        id: 6,
        userid: 1,
        name: "Adam",
        nickname: " ",
        color: "hsl(30 100% 15%)",
        pfp: "Images/Pfps/Adam512.png",
        notes: "",
        description: ""
    }
];

// Temporary filled variable that keeps track of the current character id the user has selected
let currentCharacterId = 0
let currentUserId = 2
let currentEditCharacterId = 1;

// Gets the data in the textarea needed for a message 
function getMessage(){
    const messageInput = document.getElementById('input');

    // Get textarea text
    const content = messageInput.value;
    // Reset textarea
    messageInput.value = '';

    // Sets parameters needed to construct message
    const userId = currentUserId;  
    const usingCharacter = false; 
    const characterId = currentCharacterId; 
    const isImage = false;
    const deleted = false;  
    
    // Send message if a message was typed
    if(content.trim()){
        sendMessage(userId, content, usingCharacter, characterId, isImage, deleted);
    }
    // else{
    //     console.log("nothing in the textarea");
    // }

}

// Adds a message to the table of all the message data between users (msgData)
// Is not permanently adding it to the table (Update the table in the database with SQL)
function sendMessage(userId, content, usingCharacter = false, characterId = 0, isImage = false, deleted = false) {
    // Create a new message object
    const newMessage = {
        userId: userId,
        content: content,
        usingCharacter: usingCharacter,
        characterId: characterId,
        deleted: deleted,
        isImage: isImage
        };

         // Push the new message to msgData array
         msgData.push(newMessage);

        // Call addMessage function to add this new message
        addMessage();
}

// Display the newly sent message
function addMessage(){
    // Gets the section
    let msg_c = document.querySelector('#chat > section');

    // Reverses the order of the message data
    msgData = msgData.reverse();

    let p = participants.find((u) => u.id == msgData[0].userId);


    // Data in first array is newly added data
    if(msgData[0].deleted){

        // Create message deleted div (This is serperate from a normal message div)
        let message = document.createElement("div");
        message.className = "message deleted flex-row p10";
        let name = document.createElement("p");
        name.className = "f125";
        name.innerText = `${p.name} has deleted this message`;
        message.appendChild(name);
        msg_c.appendChild(message);
    }

    //vars
    let uc = msgData[0].usingCharacter;
    let c = uc ? characterData.find((u) => u.id == msgData[0].characterId) : null;
    let color = uc ? c.color : p.color;

    //Create the main message div
    let message = document.createElement("div");
    message.className = "message user-grid top p10";


    if(msgData[0].userId === userId) { message.classList.add("flip"); }
    // if(uc) { message.classList.add("character-msg"); }
    //pfp

    // Create profile picture image element
    let icon = document.createElement("img");
    icon.src = !uc ? p.pfp : c.pfp;
    icon.classList.add("user-image");
    if(uc) icon.style.borderColor = color;
    if(uc) icon.style.backgroundColor = color;
    if(uc) icon.style.borderWidth = "3px";

    // If profile picture is clicked and is not using a character, go to users profile
    if(!uc) icon.addEventListener("click", () =>
    {
        localStorage.setItem("id", p.id);
        window.location.href = "Profile3.html";
    });

    // If profile picture is clicked and is a character, open character info
    if(uc) icon.addEventListener("click", () => { openCharacter(c.id - 1); });
    message.appendChild(icon);

    //name
    let name = document.createElement("h2");
    name.className = "name";
    name.innerText = !uc ? p.name : c.name;
    name.style.backgroundColor = color;
    message.appendChild(name);
    //content

    let text = !msgData[0].isImage ? document.createElement('p') : document.createElement('img');
    text.className = "text p10";
    if(!msgData[0].isImage)
    {
        text.innerHTML = styleText(msgData[0].content);//msgData[m].content;
    }
    else {text.src = msgData[0].content; }
    text.style.backgroundColor = color;

    //combine
    message.appendChild(text);
    msg_c.prepend(message);

    // Reverses message data back to correct order
    msgData = msgData.reverse();

    //let msg_c = document.querySelector('#chat > section');
    //msg_c.innerHTML = "";
    //loadMessages();

    window.scroll(0, Number.MAX_SAFE_INTEGER);
}

function loadMessages(){
    // Gets the section
    let msg_c = document.querySelector('#chat > section');

    // Reverses the order of the message data
    msgData = msgData.reverse();

    // <div class="message deleted flex-row p10">
    //     <p class="f125">X has deleted this message</p>
    // </div>
    // For every message 
    for(let m = 0; m < msgData.length; m++){
        let p = participants.find((u) => u.id == msgData[m].userId);

        // If message is deleted
        if(msgData[m].deleted){

            // Create message deleted div (This is serperate from a normal message div)
            let message = document.createElement("div");
            message.className = "message deleted flex-row p10";
            let name = document.createElement("p");
            name.className = "f125";
            name.innerText = `${p.name} has deleted this message`;
            message.appendChild(name);
            msg_c.appendChild(message);
            continue
        }
        //vars
        let uc = msgData[m].usingCharacter;
        let c = uc ? characterData.find((u) => u.id == msgData[m].characterId) : null;
        let color = uc ? c.color : p.color;

        //Create the main message div
        let message = document.createElement("div");
        message.className = "message user-grid top p10";


        if(msgData[m].userId === userId) { message.classList.add("flip"); }
        // if(uc) { message.classList.add("character-msg"); }
        //pfp

        // Create profile picture image element
        let icon = document.createElement("img");
        icon.src = !uc ? p.pfp : c.pfp;
        icon.classList.add("user-image");
        if(uc) icon.style.borderColor = color;
        if(uc) icon.style.backgroundColor = color;
        if(uc) icon.style.borderWidth = "3px";

        // If profile picture is clicked and is not using a character, go to users profile
        if(!uc) icon.addEventListener("click", () =>
        {
            localStorage.setItem("id", p.id);
            window.location.href = "Profile3.html";
        });

        // If profile picture is clicked and is a character, open character info
        if(uc) icon.addEventListener("click", () => { openCharacter(c.id - 1); });

        
        message.appendChild(icon);
        //name
        let name = document.createElement("h2");
        name.className = "name";
        name.innerText = !uc ? p.name : c.name;
        name.style.backgroundColor = color;
        message.appendChild(name);
        //content
        let text = !msgData[m].isImage ? document.createElement('p') : document.createElement('img');
        text.className = "text p10";
        if(!msgData[m].isImage)
        {
            text.innerHTML = styleText(msgData[m].content);//msgData[m].content;
        }
        else {text.src = msgData[m].content; }
        text.style.backgroundColor = color;
        //combine
        message.appendChild(text);
        msg_c.appendChild(message);
    }

    // Reverses message data back to correct order
    msgData = msgData.reverse();

    window.scroll(0, Number.MAX_SAFE_INTEGER);
}

// Gets the characterid of current character being viewed/edited
function getEditCharacterId(){

}

function roleInfoSave(){
    //console.log("button clicked");

    // Gets text in notes textarea
    let roleNotes = document.querySelector('.f125.notes');
    const roleNotesContent = roleNotes.value;
    console.log("Notes: " + roleNotesContent);

    // Gets text in description textarea
    let roleDescription = document.querySelector('.f125.description');
    const roleDescriptionContent = roleDescription.value;
    console.log("Description: " + roleDescriptionContent);

    // Save the data
    //
}

// Resets character id so no role is currently selected
function unselectRole(){
    currentCharacterId = 0; 
    console.log('User ID:', currentUserId);
    console.log('Character ID:', currentCharacterId);  
}

// Gets the userId and characterId of role selected
function roleSelect(){
    //console.log("hi");

    const selectedUserId = this.getAttribute('user-id');
    const selectedCharacterId = this.getAttribute('character-id');

    currentUserId = selectedUserId;
    currentCharacterId = selectedCharacterId;
    let roleBtn = document.querySelector('#role-btn');
    let img = roleBtn.querySelector("img");
    img.src = "Images/pfp2.jpg";
    let character = characterData.find((x) => x.id === parseInt(currentCharacterId));
    img.src = character.pfp;

    console.log('User ID:', currentUserId);
    console.log('Character ID:', currentCharacterId);
}

function loadCharacters(){
    // let role_c = document.querySelector('.roles');
    let cs = document.querySelector('.character-select');
    let role_c = document.querySelector('.characters');
    let pagination = document.querySelector('.pagination');
    for(let c = 0; c < characterData.length; c++){
        let role = document.createElement("div");
        role.className = "role-element flex-row";
        role.style.setProperty('--role-color', characterData[c].color);

        // Add reference to id and userid to the button
        role.setAttribute('user-id', characterData[c].userid);
        role.setAttribute('character-id', characterData[c].id);

        let userGrid = document.createElement("div");
        userGrid.className = "user-grid";
        userGrid.addEventListener('click', () => {openCharacter(c);});

        //pfp
        let icon = document.createElement("img");
        icon.className = "user-image";
        icon.src = characterData[c].pfp;
        userGrid.appendChild(icon);
        //name
        let name = document.createElement("h1");
        name.classList.add("name");
        name.innerText = characterData[c].name;
        userGrid.appendChild(name);
        //nickname
        let nickname = document.createElement("p");
        nickname.classList.add("text");
        nickname.innerText = characterData[c].nickname;
        userGrid.appendChild(nickname);
        //edit button
        let edit = document.createElement("button");
        edit.className = "icon-btn circular";
        edit.innerHTML = `<i class="fa fas fa-pencil"></i>`;
        //combine
        role.appendChild(userGrid);
        role.appendChild(edit);
        //Testing
        console.log("role = ", role);
        console.log("pagnation = ", pagination);
        role_c.insertBefore(role, pagination);

        // Role Selection (Bottom Left)
        if(characterData[c].userid === userId){
            let roleP = document.createElement("button");
            roleP.className = "icon-btn labeled";

            // Add reference to id and userid to the button
            roleP.setAttribute('user-id', characterData[c].userid);
            roleP.setAttribute('character-id', characterData[c].id);

            roleP.style.setProperty('--c-col', characterData[c].color);
            let nameP = document.createElement("p");
            nameP.innerText = characterData[c].name;
            roleP.appendChild(nameP);
            cs.appendChild(roleP);

            // Adds the roleSelect function to button onclick
            roleP.addEventListener('click', roleSelect);
        }
    }

    // <button class="icon-btn"><p>Jacob</p></button>

    // <div class="role flex-col flex-center">
    //     <img src="Images/pfp.jpg"/>
    //     <p>Jay Star</p>
    // </div>

    // <div class="role-element flex-row" style="--role-color: rgb(9, 70, 16); --role-color-2: rgb(35, 15, 0)">
    //     <div class="user-grid">
    //         <img class="user-image" src="Images/pfp.jpg" />
    //         <h1 class="name">Faolan</h1>
    //         <p class="text">Trickster</p>
    //     </div>
    //     <button class="icon-btn circular"><i class="fa fas fa-pencil"></i></button>
    // </div>
}

function loadUsers(){
    let role_c = document.querySelector('.users');
    for(let c = 0; c < participants.length; c++){
        let role = document.createElement("div");
        role.className = "role flex-cc";
        role.style.setProperty('--role-color', participants[c].color);
        //pfp
        let icon = document.createElement("img");
        icon.src = participants[c].pfp;
        role.appendChild(icon);
        //name
        let name = document.createElement("p");
        name.innerText = participants[c].name;
        role.appendChild(name);
        //combine
        role_c.appendChild(role);
    }
}

let styleText = (s) => {
    if(!s.includes('*')) return s;
    s = styleSubtext(s, '***', "font-weight:600;font-style: italic;");
    s = styleSubtext(s, '**', "font-weight:600;");
    s = styleSubtext(s, '*_*', "text-decoration: underline solid currentColor");
    s = styleSubtext(s, '*-*', "text-decoration: line-through solid currentColor");
    
    
    let b = (s + " ").split('*<#').join("[special{word}]*nobodyuses").split("*</>*").join("[special{word}]*nobodyuses").split(">*").join("[special{word}]*nobodyuses").split("[special{word}]*nobodyuses");
    s = b[0];
    for(let si = 3; si - 2 < b.length; si += 3){
        if(b.length > si){
            s += `<span style='color:#${b[si-2]}'>${b[si-1]}</span>${b[si]}`;
        }
        else if(b.length > si - 1){
            s += `*<#${b[si-1]}>*${b[si-1]}`;
        }
        else if(b.length > si - 2){
            s += `*<#${b[si-1]}`;
        }
    }
    s = styleSubtext(s, '*', "font-style: italic;");
    return s;
    /*
    let bi = (s + " ").split('***');
    s = bi[0];
    for(let si = 2; si - 1 < bi.length; si += 2){
        if(bi.length > si){
            s += `<span style='font-weight:600;font-style: italic;'>${bi[si-1]}</span>${bi[si]}`;
        }
        else if(bi.length > si - 1){
            s += `***${bi[si-1]}`;
        }
    }
    let b = (s + " ").split('**');
    s = b[0];
    for(let si = 2; si - 1 < b.length; si += 2){
        if(b.length > si){
            s += `<span style='font-weight:600;'>${b[si-1]}</span>${b[si]}`;
        }
        else if(b.length > si - 1){
            s += `**${b[si-1]}`;
        }
    }
    let i = (s + " ").split('*');
    s = i[0];
    for(let si = 2; si - 1 < i.length; si += 2){
        if(i.length > si){
            s += `<span style='font-style: italic;'>${i[si-1]}</span>${i[si]}`;
        }
        else if(i.length > si - 1){
            s += `*${i[si-1]}`;
        }
    }
    */
    return s;
}
let styleSubtext = (s, splitter, style) => {
    let b = (s + " ").split(splitter);
    s = b[0];
    for(let si = 2; si - 1 < b.length; si += 2){
        if(b.length > si){
            s += `<span style='${style}'>${b[si-1]}</span>${b[si]}`;
        }
        else if(b.length > si - 1){
            s += `${splitter}${b[si-1]}`;
        }
    }
    return s;
}
let c_info_notes = null;
let c_info_desc = null;
function openCharacter(c){
    c_info.style.setProperty('--character-color', characterData[c].color);
    c_info.querySelector('header h2').innerText = characterData[c].name;
    c_info.querySelector('header p').innerText = characterData[c].nickname;
    c_info.querySelector('header img').src = characterData[c].pfp;
    c_info_notes.value = characterData[c].notes;
    c_info_desc.value = characterData[c].description;
    OnInput.call(c_info_notes);
    OnInput.call(c_info_desc);
    c_info_notes.disabled = characterData[c].userid != userId;
    c_info_desc.disabled = characterData[c].userid != userId;
    c_info.style.maxHeight = "90vh";
    setTimeout(() => {c_info.style.overflowY = "visible";}, 50);
}

async function starting() {
    const tx = document.querySelectorAll("textarea");
    for(let i = 0; i < tx.length; i++){
        tx[i].setAttribute("style", "height:" + (tx[i].scrollHeight - 7) + "px;");
        tx[i].addEventListener("input", OnInput, false);
    }

    characters = document.querySelector('.characters');
    c_expand = document.querySelector('#characters .expand i');
    // c_expand_class = c_expand.classList; // I don't think we need this, moving expand class to a new page for now for feature addition (11/27/2024)
    c_info = document.querySelector('#character-info');
    c_info_notes = c_info.querySelector('.notes');
    c_info_desc = c_info.querySelector('.description');
    cv = document.querySelector('.convos');
    cv_expand = document.querySelector('#convos .expand i');

    loadMessages();
    loadCharacters();
    // loadUsers(); // Removed this feature
    
    const cr = characters.querySelectorAll('.roles .role');
    for(let c = 0; c < cr.length; c++){
        cr[c].addEventListener("click", () => openCharacter(c));
    }

    // add event listeners
    addEventListeners();
    
    window.scroll(0, Number.MAX_SAFE_INTEGER);
}
window.onload = starting;


// Helper method for adding event listeners
const addEventListeners = () => {
    // Focus events
    // focus events don't bubble, must use capture phase
    document.body.addEventListener("focus", event => {
        const target = event.target;
        switch (target.tagName) {
            case "INPUT":
            case "TEXTAREA":
            case "SELECT":
                document.body.classList.add("keyboard");
        }
    }, true); 
    document.body.addEventListener("blur", () => {
        document.body.classList.remove("keyboard");
    }, true); 
    window.scroll(0, Number.MAX_SAFE_INTEGER);

    // To close New Role (adding role) popup
    document.querySelector('#exit-panel').addEventListener('click', function () {
        closePanel(this); // Pass the button as the panel to close
    });

    // To send message on Enter keypress
    const inputBox = document.querySelector('#input');
    inputBox.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            // sened message and update stream
            getMessage();

            // clear input box
            inputBox.value = '';
        }
    });

    // Back button to go to DM list
    document.querySelector('.back-button').addEventListener('click', loadConversations);
};

function loadRolePage()
{
    // get elements
    const infoIcon = document.querySelector('.chat-info');
    const header = document.querySelector(".message-name");
    const onlineText = document.querySelector(".online");
    const imageElement = document.querySelector(".user-image");
    const backButton = document.querySelector('.back-button');
    const footer = document.querySelector('.flex-c-p-g');

    // hide info icon
    infoIcon.style.display = 'none';

    // update header
    header.innerHTML = "Roles";
    onlineText.style.display = "none";
    imageElement.style.display = "none";

    // replace event for back button
    backButton.removeEventListener('click', loadConversations);
    backButton.addEventListener('click', loadChatPage);
    
    // update content
    let characterRoles = document.querySelector(".characters");
    let chatMessages = document.querySelector("#chat");
    chatMessages.innerHTML = characterRoles.innerHTML;

    // remove footer
    footer.style.display = 'none';
}

const loadChatPage = () => {
    // get elements
    const infoIcon = document.querySelector('.chat-info');
    const name = document.querySelector(".message-name");
    const onlineText = document.querySelector(".online");
    const imageElement = document.querySelector(".user-image");
    const backButton = document.querySelector('.back-button');
    const footer = document.querySelector('.flex-c-p-g');

    // reset info icon display
    infoIcon.style.display = 'block';

    // update header
    name.innerHTML = "Starlight";
    onlineText.style.display = "block";
    imageElement.style.display = "block";

    // replace event for back button
    backButton.removeEventListener('click', loadChatPage);
    backButton.addEventListener('click', loadConversations);

    // load messages
    loadMessages();

    // add footer
    footer.style.display = 'block';
}
const loadConversations = () => {
    window.location.href = 'Chats4.html';
}

window.addEventListener("scroll", function() {
    var header = document.querySelector(".message-header-grid");
    // Adjust the position based on scroll
    var scrollPosition = window.scrollY;
    header.style.top = 50 + scrollPosition * 0.5 + 'px'; // Move header with scroll
});

window.onload = starting;

