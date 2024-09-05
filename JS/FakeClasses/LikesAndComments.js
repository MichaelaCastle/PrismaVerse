let likesData = [
    {
        userID: 1,
        contentID: 1,
        contentTypeID: 2
    },
    {
        userID: 2,
        contentID: 1,
        contentTypeID: 2
    },
    {
        userID: 2,
        contentID: 2,
        contentTypeID: 2
    },
    {
        userID: 3,
        contentID: 2,
        contentTypeID: 2
    }
];
// ******** THESE NEED A RPLY TO COMMENT ID ********
let commentData = [
    {
        userID: 1,
        contentID: 1,
        contentTypeID: 2,
        content: "This is an example comment. yay!",
        isReply: false,
        replyTo: 0,
        time: "2 days ago"
    },
    {
        userID: 3,
        contentID: 2,
        contentTypeID: 2,
        content: "This is an example comment. yay!",
        isReply: false,
        replyTo: 0,
        time: "2 days ago"
    },
    {
        userID: 2,
        contentID: 2,
        contentTypeID: 2,
        content: "This is an example comment. yay!",
        isReply: false,
        replyTo: 0,
        time: "2 days ago"
    },
    {
        userID: 1,
        contentID: 2,
        contentTypeID: 2,
        content: "This is an example comment. yay!",
        isReply: true,
        replyTo: 0,
        time: "1 days ago"
    },
    {
        userID: 3,
        contentID: 2,
        contentTypeID: 2,
        content: "This is an example comment. yay!",
        isReply: true,
        replyTo: 1,
        time: "1 days ago"
    }
]
let readData = [
    {
        userID: 0,
        chapterID: 0,
        read: 0
    },
    {
        userID: 1,
        chapterID: 1,
        read: 1
    },
    {
        userID: 1,
        chapterID: 2,
        read: 0
    },
]





let loadFooter = (contentInfo, type, userID) => {
    let footer = document.createElement("footer");
    let likesList = likesData.filter((l) => l.contentTypeID === type).filter((l) => l.contentID === contentInfo.chapterID);
    let likesTitle = document.createElement("h2");
    likesTitle.className = "f175";
    likesTitle.innerText = `Likes (${likesList.length})`;
    footer.appendChild(likesTitle);
    let likesDiv = document.createElement("div");
    likesDiv.className = "flex-rc-g likes";
    likesDiv.innerHTML = '<button class="icon-btn like-btn user-scale" onclick="like(this)"><i class="fa fa-regular fa-heart"></i></button>';
    likesList.forEach((l) => {
        likeImg = document.createElement("img");
        likeImg.src = userData.find((u) => u.userID === l.userID).pfp;
        likeImg.className = "user-image";
        if(l.userID === userID){
            likesDiv.querySelector(".icon-btn").classList.add("liked");
            likesDiv.querySelector(".icon-btn i").classList.remove("fa-regular");
            likesDiv.querySelector(".icon-btn i").classList.add("fas");
        }
        likesDiv.appendChild(likeImg);
    });
    footer.append(likesDiv);

    let cList = commentData.filter((l) => l.contentTypeID === type).filter((l) => l.contentID === contentInfo.chapterID);
    let cTitle = document.createElement("h2");
    cTitle.className = "f175";
    cTitle.innerText = `Comments (${cList.length})`;
    footer.appendChild(cTitle);
    footer.innerHTML += `
             <div class="flex-r-g message-line">
                 <img class="user-image-bottom" src="${userData.find((u) => u.userID === userID).pfp}" />
                 <textarea placeholder="Type something..." rows="1"></textarea>
                 <button class="icon-btn"><i class="fa fas fa-comment"></i><p>Comment</p></button>
             </div>`;
    let cDiv = document.createElement("div");
    cDiv.className = "comments flex-col";
    cList.forEach((l) => {
        ccDiv = document.createElement("div");
        ccDiv.className = "comment flex-c-p";
        if(l.isReply){ ccDiv.classList.add("replied"); }

        ug = document.createElement("div");
        ug.className = "user-grid top";

        cImg = document.createElement("img");
        cImg.src = userData.find((u) => u.userID === l.userID).pfp;
        cImg.className = "user-image";
        ug.appendChild(cImg);

        let name = document.createElement("h2");
        name.className = "name flex-col f125";
        nameText = document.createElement("span");
        nameText.innerText = userData.find((u) => u.userID === l.userID).username;
        name.appendChild(nameText);
        if(l.isReply && l.replyTo != 0){
            replyText = document.createElement("span");
            replyText.innerText = `Reply to: ${userData.find((u) => u.userID === l.replyTo).username}`;
            replyText.className = "f125";
            name.appendChild(replyText);
        }
        ug.appendChild(name);

        text = document.createElement("p");
        text.className = "text f115";
        text.innerText = l.content;
        ug.appendChild(text);
        ccDiv.appendChild(ug);

        btns = document.createElement("div");
        btns.className = "buttons flex-rc-g";
        btns.innerHTML = /*'<button class="icon-btn small like-btn" onclick="like(this)"><i class="fa fa-regular fa-heart"></i></button>' + */'<button class="icon-btn small"><i class="fa fa-solid fa-reply"></i><p>Reply</p></button>';

        time = document.createElement("p");
        time.className = "f115";
        time.innerText = l.time;
        btns.appendChild(time);
        ccDiv.appendChild(btns);

        cDiv.appendChild(ccDiv);
    });
    footer.appendChild(cDiv);
    return footer;
}