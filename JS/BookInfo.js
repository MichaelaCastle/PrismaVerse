let bookID = 1;
// Loads the heading
let loadHeading = (bookInfo) => {
    // Create header
    header = document.createElement("header");
    header.className = "flex-rc-p-g";
    header.style.backgroundImage = `linear-gradient(90deg, transparent, #000000D0, #000000D0, transparent), url('${bookInfo.topPic}')`;

    // Creates image 
    img = document.createElement("img");
    img.src = bookInfo.cover;
    header.appendChild(img);

    // Creates div
    div = document.createElement("div");
    div.className = "flex-col";

        // Creates Title header
        title = document.createElement("h1");
        title.className = "f25";
        title.innerText = bookInfo.title;
        div.appendChild(title);

        // Creates Author header
        author = document.createElement("h2");
        author.className = "f15";
        author.innerText = userData.find((u) => u.userID === bookInfo.userID).username;
        div.appendChild(author);

    // Book statistic variables
    chapters = chapterData.filter((c) => c.bookID === bookInfo.bookID);
    likes = likesData.filter((l) => l.contentTypeID === 2 && chapters.find((c) => c.chapterID === l.contentID) != null);
    comments = commentData.filter((l) => l.contentTypeID === 2 && chapters.find((c) => c.chapterID === l.contentID) != null);

        // Creates div with likes,comments and chapters
        stats = document.createElement("div");
        stats.className = "stats flex-r-p-g";
            // Elements in div (3 divs containing their respective image and statistc variable)
            stats.innerHTML = `<div class="flex-cc f125"><i class="fa fas fa-heart"></i><p>${likes.length}</p></div>
                        <div class="flex-cc f125"><i class="fa fas fa-comment"></i><p>${comments.length}</p></div>
                        <div class="flex-cc f125"><i class="fa fas fa-list"></i><p>${chapters.length}</p></div>`;
        div.appendChild(stats);

    // Creates div with buttons
    btns = document.createElement("div");
    btns.className = "read-btns flex-r-p-g";
    
        // If book has not been read
        if(chapters.length > 0){
            let startText = "Start Reading";
            let url = new URL("http://127.0.0.1:5500/Chapter.html");
            read = readData.filter((r) => r.userID === userID && r.read === 1 && chapters.find((c) => c.chapterID === r.chapterID) != null);
            // If book has been read
            if(read.length > 0){
                read = read.sort((a, b) => chapters.find((c) => c.chapterID === b.chapterID).chapterIndex - chapters.find((c) => c.chapterID === a.chapterID).chapterIndex);
                lastChapter = chapters.find((c) => c.chapterID === read[0].chapterID);//readData.find((r) => r.userID === userID && chapters.find((c) => c.chapterID === r.chapterID) != null).chapterID;
                url.searchParams.append('chapterID', (chapters.find((c) => c.chapterIndex === lastChapter.chapterIndex + 1) ?? lastChapter).chapterID);
                startText = "Continue Reading";
            }
            else{
                url.searchParams.append('chapterID', chapters.find((c) => c.chapterIndex === 1).chapterID);
            }
            // Creates the first button 
            btns.innerHTML = `<a href='${url}' class="icon-btn colors-secondary labeled"><i class="fa fas fa-book-open"></i><p>${startText}</p></a>`;
        }

        // Create the Subscribe/Unsubscribe button
        if(bookSubData.filter((s) => s.userID === userID && s.bookID === bookInfo.bookID).length > 0){
            btns.innerHTML += `<button class="icon-btn colors-secondary"><i class="fa fas fa-minus"></i><p>Unsubscribe</p></button>`;
        }
        else{
            btns.innerHTML += `<button class="icon-btn colors-secondary"><i class="fa fas fa-plus"></i><p>Subscribe</p></button>`;
        }

    div.appendChild(btns);
    header.appendChild(div);
    return header;
    // <header class="flex-rc-p-g">
    //     <img src="Images/book-cover.jpg">
    //     <div class="flex-col">
    //         <h1 class="f25">My Fake Boyfriend</h1>
    //         <h2 class="f15">ToTheExtreme95</h2>
    //         <div class="stats flex-r-p-g">
    //             <div class="flex-cc f125"><i class="fa fas fa-heart"></i><p>2.9M</p></div>
    //             <div class="flex-cc f125"><i class="fa fas fa-comment"></i><p>12M</p></div>
    //             <div class="flex-cc f125"><i class="fa fas fa-list"></i><p>134</p></div>
    //         </div>
    //         <div class="read-btns flex-r-g">
    //             <button class="icon-btn labeled"><i class="fa fas fa-book-open"></i><p>Start reading</p></button>
    //             <button class="icon-btn"><i class="fa fas fa-plus"></i><p>Subscribe</p></button>
    //         </div>
    //     </div>
    // </header>
}

// Load Contents
let loadContent = (bookInfo) => {
    // Create section element 
    content = document.createElement("section");
    content.className = "details flex-rc-p-g";

    // Create article element
    summary = document.createElement("article");
    summary.className = "summary";

    // Create Sumaary header
    header = document.createElement("h2");
    header.className = "Summary";
    summary.appendChild(header);

    // Parses text and creates different paragraph elements
    text = bookInfo.summary.split("\n");
    text.forEach((t) => {
        p = document.createElement("p");
        p.innerText = t;
        summary.appendChild(p);
    });

    content.appendChild(summary);
    return content;
    // <section class="details flex-rc-p-g">
    //     <article class="summary">
    //         <h2>Summary</h2>
    //         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec magna metus, lobortis ac purus vel, dignissim cursus ligula. Etiam dignissim odio nisl, ac finibus elit consectetur in. Sed maximus elit quam, ac malesuada sapien scelerisque eu. Praesent dignissim placerat lobortis. Nunc interdum convallis nisi et eleifend. Aliquam in ullamcorper massa. Mauris nec neque metus. Curabitur finibus orci neque, id fermentum mauris mollis ac. Pellentesque ullamcorper risus quis dignissim scelerisque.<br><br>
    //             Curabitur sit amet nulla bibendum, auctor neque ac, laoreet neque. Curabitur et nulla vel arcu imperdiet bibendum. Nulla eget pretium enim. Aenean scelerisque pretium leo, id volutpat elit. Sed porta leo nunc, in pretium tellus dapibus non. Praesent eget lorem iaculis, venenatis tortor sodales, varius libero. Donec non accumsan magna. Aliquam sit amet mattis ex. Donec eget pellentesque augue. Aliquam nec magna at orci maximus aliquam. Aenean condimentum dolor in blandit malesuada.<br><br>
    //             Fusce imperdiet diam a elit hendrerit tempor. Aenean imperdiet magna sit amet odio pretium, sed egestas neque sollicitudin. Duis accumsan sollicitudin justo et commodo. Proin sit amet suscipit nisl. Nullam luctus mauris turpis, ultrices tincidunt eros imperdiet eu. Quisque non felis dui. Quisque euismod, tortor sit amet egestas congue, urna risus tempus mi, vel varius eros nisi a sem. Proin dictum nisi sit amet massa pharetra, at ultrices sapien porta. Curabitur pretium sapien sed cursus porttitor. Suspendisse quis sagittis magna. Proin sit amet augue ut urna sollicitudin aliquam.</p>
    //     </article>
    // </section>
}

// Load Tags
let loadTags = (bookInfo) => {
    // Create section element
    tags = document.createElement("section");
    tags.className = "tags flex-rc-p-g";
    let tagConnInfo = tagConnectionData.filter((t) => t.bookID === bookInfo.bookID);
    let tagInfo = tagData.filter((t) => tagConnInfo.find((tc) => tc.tagID === t.tagID) != null);
    if(tagInfo.length > 0){
        tagInfo = tagInfo.sort((b, a) => b.categoryID - a.categoryID);
    }
    let category = 0;
    let group = null;

    // For every book category (genre, rating, fandom)
    tagInfo.forEach((t) => {
        if(t.categoryID != category){
            if(group != null){
                tags.appendChild(group);
            }
            // Create div for each category
            group = document.createElement("div");
            group.className = "group flex-rc-g";
            category = t.categoryID;
            // Creater header
            nameD = document.createElement("h2");
            nameD.className = "category";
            nameD.innerText = tagCategoryData.find((c) => c.categoryID === category).name;
            group.appendChild(nameD);
        }
        // Create tags
        tag = document.createElement("p");
        tag.className = "tag";
        addedRange = 20;
        col = (Math.random() * (Math.abs(bookInfo.hue1 - bookInfo.hue2) + addedRange)) + Math.min(bookInfo.hue1, bookInfo.hue2) - (addedRange / 2);
        tag.style.backgroundColor = `hwb(${col} 20% 40% / 0.5)`;
        tag.innerText = t.name;
        group.appendChild(tag);
    });
    if(group != null){
        tags.appendChild(group);
    }
    return tagInfo.length > 0 ? tags : document.createElement("div");
    // <section class="tags flex-rc-p-g">
    // <div class="group flex-rc-g">
    //     <div class="category">Genre</div>
    //     <div class="tag">Romance</div>
    //     <div class="tag">Mystery</div>
    // </div>
    // </section>
    // <hr>
}

// Load contents of entire page
let loadWriting = (id) => {
    let bookInfo = bookData.find((b) => b.bookID === id);
    loadStyle2FromData(bookInfo);
    book = document.createElement("section");
    book.id = "book-info";
    if(bookInfo.complete === 1){ book.className = "complete"; }
    book.appendChild(loadHeading(bookInfo));
    book.appendChild(loadTags(bookInfo));
    book.appendChild(document.createElement("hr"));
    book.appendChild(loadContent(bookInfo));
    document.querySelector("main").appendChild(book);
}

// Startup
function starting() {
    loadStyle(userID);
    const tx = document.querySelectorAll("textarea");
    let urlSearch = new URLSearchParams(window.location.search);
    if(urlSearch.get('chapterID') != null){
        chapterID = parseInt(urlSearch.get('chapterID'));
    }
    loadWriting(bookID);
}
window.onload = starting;