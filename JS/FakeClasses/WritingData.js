let bookData = [
    {
        bookID: 1,
        userID: 1,
        hasChapters: true,
        title: "My Fake Boyfriend",
        summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor scelerisque ante, ut placerat ante consectetur facilisis. In nec commodo augue. Duis egestas tempor massa gravida gravida. In mattis vulputate imperdiet. Nulla iaculis imperdiet eros, vitae commodo massa rhoncus eget. Etiam eget tincidunt enim. Maecenas ornare erat sed feugiat hendrerit. Sed elementum placerat tincidunt. Etiam quis lacus ac nisl varius sagittis.\nNulla risus arcu, porttitor vel semper id, ultrices quis magna. Nunc varius lacus at egestas vulputate. Vestibulum nec turpis risus. Aliquam at ornare purus. In iaculis dui ut justo aliquet venenatis vitae quis magna. Maecenas imperdiet dui eu porta facilisis. Maecenas ornare, tortor a facilisis rutrum, enim tortor pretium nisi, sed suscipit lacus elit at ligula. Mauris a iaculis lorem, eget varius lectus. Aenean vel elit nec orci pulvinar rhoncus. Pellentesque placerat molestie sapien dapibus fringilla. Integer quis volutpat est.\nMorbi non mauris sem. Integer ac nunc ac turpis bibendum fringilla. Suspendisse egestas, nulla sit amet aliquet rhoncus, leo justo eleifend quam, ac tincidunt lacus lacus in nunc. Duis et nunc in dui rhoncus tempus. Vestibulum bibendum nunc a elit rhoncus, eu posuere sapien vehicula. Praesent ipsum est, consectetur a maximus quis, venenatis non risus. Aliquam vel mi dolor.",
        cover: "Images/book-cover.jpg",
        topPic: "Images/greenH.jpg",
        complete: 1,
        hue1: 120,
        hue2: 200,
        hue3: 160
    },
    {
        bookID: 2,
        userID: 2,
        hasChapters: false,
        title: "The Snow",
        summary: "",
        cover: "",
        topPic: "",
        complete: 0,
        hue1: 120,
        hue2: 160,
        hue3: 140
    },
    {
        bookID: 3,
        userID: 3,
        hasChapters: true,
        title: "Lost In The Past",
        summary: "nah",
        cover: "Images/yellowVert.jpg",
        topPic: "Images/yellowH.jpg",
        complete: 0,
        hue1: 60,
        hue2: 20,
        hue3: 40
    }
];
let chapterData = [
    {
        chapterID: 1,
        chapterIndex:1,
        bookID: 1,
        contents: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor scelerisque ante, ut placerat ante consectetur facilisis. In nec commodo augue. Duis egestas tempor massa gravida gravida. In mattis vulputate imperdiet. Nulla iaculis imperdiet eros, vitae commodo massa rhoncus eget. Etiam eget tincidunt enim. Maecenas ornare erat sed feugiat hendrerit. Sed elementum placerat tincidunt. Etiam quis lacus ac nisl varius sagittis.\nNulla risus arcu, porttitor vel semper id, ultrices quis magna. Nunc varius lacus at egestas vulputate. Vestibulum nec turpis risus. Aliquam at ornare purus. In iaculis dui ut justo aliquet venenatis vitae quis magna. Maecenas imperdiet dui eu porta facilisis. Maecenas ornare, tortor a facilisis rutrum, enim tortor pretium nisi, sed suscipit lacus elit at ligula. Mauris a iaculis lorem, eget varius lectus. Aenean vel elit nec orci pulvinar rhoncus. Pellentesque placerat molestie sapien dapibus fringilla. Integer quis volutpat est.\nMorbi non mauris sem. Integer ac nunc ac turpis bibendum fringilla. Suspendisse egestas, nulla sit amet aliquet rhoncus, leo justo eleifend quam, ac tincidunt lacus lacus in nunc. Duis et nunc in dui rhoncus tempus. Vestibulum bibendum nunc a elit rhoncus, eu posuere sapien vehicula. Praesent ipsum est, consectetur a maximus quis, venenatis non risus. Aliquam vel mi dolor.\nFusce scelerisque nibh erat, quis congue elit ullamcorper ac. Ut a gravida massa. Quisque egestas mi a ullamcorper euismod. Aenean vitae enim at ex vehicula pharetra sed sed purus. Donec ut turpis id nulla sollicitudin lobortis. Sed condimentum mi lacinia mollis faucibus. Donec et erat a mauris volutpat tincidunt. Praesent scelerisque lobortis ligula id vulputate. Quisque eleifend ac nulla non vehicula.\nNunc eget malesuada sem. Mauris eget dui metus. Nulla facilisi. Donec nec dignissim elit. In interdum elit vitae felis scelerisque, a varius metus euismod. Sed mattis neque turpis, id sodales dui convallis vulputate. Vivamus lacinia est in nunc congue lobortis. In ut hendrerit sem. Morbi et nulla purus. Ut et est vitae nulla pretium sollicitudin. Maecenas lacinia massa vel ipsum posuere aliquet.\nVestibulum in porta augue, sit amet volutpat mi. Nam cursus congue nunc eget pretium. Quisque porttitor augue quis ipsum fermentum, ac auctor ante sollicitudin. Maecenas in lorem condimentum, lobortis diam ut, pharetra tortor. Suspendisse sit amet pulvinar ligula, a lobortis risus. Duis vitae ante tempor, posuere tortor vel, gravida elit. Cras sit amet dapibus mi.",
        title: "The Favor"
    },
    {
        chapterID: 2,
        chapterIndex: 2,
        bookID: 1,
        contents: "I stood at the edge of the universe, the place where everything we knew ended and the unknown began. The sky stretched infinitely above me, a canvas of swirling galaxies and distant stars. It was breathtaking, and yet, all I could think about was Tommy. His laughter, his touch, the way he made everything feel like it was going to be okay.\nBut Tommy was gone now, and I was the only one who remembered he ever existed. The world continued to spin, people went about their lives, and I was stuck in this twilight zone where my memories were the only proof that Tommy had been real.\nI glanced around at the faces of my friends and family, searching for any hint of recognition when I mentioned his name. Nothing. They looked at me with confusion, pity even, as if I had conjured up an imaginary friend to fill some void in my life. But Tommy was real. He had to be.\nThe weight of his absence pressed down on me, making it hard to breathe. How could the universe just erase someone like that? How could I be the only one left to bear the memory of his existence? It was as if the universe had shifted, leaving me in a reality where Tommy had never been, and I was the only one who knew the truth.\nI closed my eyes and let the darkness wash over me, hoping that somewhere, somehow, Tommy was looking up at the same sky, missing me just as much as I missed him.",
        title: "Popping The Question"
    },
    {
        chapterID: 3,
        chapterIndex: 1,
        bookID: 2,
        contents: "This is a short story: Suspendisse volutpat interdum tellus, nec tristique quam facilisis a. Cras ac diam nibh. Quisque elit urna, aliquam vel tortor eget, luctus interdum nisl. Cras vitae arcu leo. Nulla orci turpis, consectetur ac eros eget, rutrum tempus nisl. Sed luctus erat augue, quis feugiat tortor rutrum ac. Nulla tincidunt risus ligula, sollicitudin lobortis arcu sodales eu. Morbi suscipit nunc nunc, quis dignissim nisi condimentum sollicitudin. Duis rutrum leo a nisl posuere consequat.\nAliquam nec ultricies augue. Fusce lobortis aliquam tortor, sit amet scelerisque nulla convallis lacinia. Aliquam lacus felis, congue vitae tortor sit amet, imperdiet congue dui. Donec efficitur erat at dui varius tristique. Aenean interdum dui ullamcorper, elementum risus eu, posuere arcu. Sed bibendum nibh vel tellus ornare egestas. Suspendisse massa ipsum, laoreet sed sollicitudin eu, imperdiet sed orci. Donec hendrerit iaculis nisi ut volutpat. Duis gravida lectus ut elit dapibus, eu suscipit lorem laoreet. Donec pretium pulvinar nisl nec feugiat. Phasellus tristique et ex sit amet bibendum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis gravida diam vitae convallis porta. Donec nisi urna, egestas eu mattis bibendum, finibus at turpis.",
        title: "The Snow"
    },
    {
        chapterID: 4,
        chapterIndex: 3,
        bookID: 1,
        contents: "This is a short story: Suspendisse volutpat interdum tellus, nec tristique quam facilisis a. Cras ac diam nibh. Quisque elit urna, aliquam vel tortor eget, luctus interdum nisl. Cras vitae arcu leo. Nulla orci turpis, consectetur ac eros eget, rutrum tempus nisl. Sed luctus erat augue, quis feugiat tortor rutrum ac. Nulla tincidunt risus ligula, sollicitudin lobortis arcu sodales eu. Morbi suscipit nunc nunc, quis dignissim nisi condimentum sollicitudin. Duis rutrum leo a nisl posuere consequat.\nAliquam nec ultricies augue. Fusce lobortis aliquam tortor, sit amet scelerisque nulla convallis lacinia. Aliquam lacus felis, congue vitae tortor sit amet, imperdiet congue dui. Donec efficitur erat at dui varius tristique. Aenean interdum dui ullamcorper, elementum risus eu, posuere arcu. Sed bibendum nibh vel tellus ornare egestas. Suspendisse massa ipsum, laoreet sed sollicitudin eu, imperdiet sed orci. Donec hendrerit iaculis nisi ut volutpat. Duis gravida lectus ut elit dapibus, eu suscipit lorem laoreet. Donec pretium pulvinar nisl nec feugiat. Phasellus tristique et ex sit amet bibendum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis gravida diam vitae convallis porta. Donec nisi urna, egestas eu mattis bibendum, finibus at turpis.",
        title: "3rd Chapter"
    }
];
let tagConnectionData = [
    {
        bookID: 1,
        tagID: 1
    },
    {
        bookID: 1,
        tagID: 2
    },
    {
        bookID: 1,
        tagID: 3
    },
    {
        bookID: 1,
        tagID: 8
    },
    {
        bookID: 1,
        tagID: 12
    },
    {
        bookID: 1,
        tagID: 13
    }
]
let bookSubData = [
    {
        userID: 1,
        bookID: 1
    },
    {
        userID: 2,
        bookID: 1
    }
];
let tagCategoryData = [
    {
        categoryID: 1,
        name: "Genre"
    },
    {
        categoryID: 2,
        name: "Mature Rating"
    },
    {
        categoryID: 3,
        name: "Fandom"
    },
    {
        categoryID: 4,
        name: "Triggers"
    }
];
let tagData = [
    {
        tagID: 1,
        name: "Romance",
        categoryID: 1
    },
    {
        tagID: 2,
        name: "Fantasy",
        categoryID: 1
    },
    {
        tagID: 3,
        name: "Fluff",
        categoryID: 1
    },
    {
        tagID: 4,
        name: "Horror",
        categoryID: 1
    },
    {
        tagID: 5,
        name: "Teen Fiction",
        categoryID: 1
    },
    {
        tagID: 6,
        name: "Mystery",
        categoryID: 1
    },
    {
        tagID: 7,
        name: "Sci-fi",
        categoryID: 1
    },
    {
        tagID: 8,
        name: "Supernatural",
        categoryID: 1
    },
    {
        tagID: 9,
        name: "HermitCraft",
        categoryID: 3
    },
    {
        tagID: 10,
        name: "Supernatural",
        categoryID: 3
    },
    {
        tagID: 11,
        name: "Harry Potter",
        categoryID: 3
    },
    {
        tagID: 12,
        name: "Good Omens",
        categoryID: 3
    },
    {
        tagID: 13,
        name: "SFW",
        categoryID: 2
    }
];