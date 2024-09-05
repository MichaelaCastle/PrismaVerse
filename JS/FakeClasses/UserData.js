let userData = [
    {
        userID: 1,
        joined: "May 2024",
        totalXP: 1983,
        followers: 12000,
        following: 1268,
        sketchNavID: 1,
        bG_Reference: "Images/purpleVert.jpg",
        topPic_Reference: "Images/purpleH.jpg",
        hue1: 270,
        hue2: 330,
        hue3: 300,
        pfp: "Images/pfp2.jpg",
        username: "Jaylex",
        linkID: 1,
        online: true,
        bio: "Fusce scelerisque nibh erat, quis congue elit ullamcorper ac. Ut a gravida massa. Quisque egestas mi a ullamcorper euismod. Aenean vitae enim at ex vehicula pharetra sed sed purus. Donec ut turpis id nulla sollicitudin lobortis. Sed condimentum mi lacinia mollis faucibus. Donec et erat a mauris volutpat tincidunt. Praesent scelerisque lobortis ligula id vulputate. Quisque eleifend ac nulla non vehicula."
    },
    {
        userID: 2,
        joined: "May 2014",
        totalXP: 1983,
        followers: 12000,
        following: 1268,
        sketchNavID: 2,
        bG_Reference: "Images/greenVert.jpg",
        topPic_Reference: "Images/greenH.jpg",
        hue1: 120,
        hue2: 160,
        hue3: 140,
        pfp: "Images/pfpGreen.png",
        username: "Flora",
        linkID: 2,
        online: false,
        bio: "Fusce scelerisque nibh erat, quis congue elit ullamcorper ac. Ut a gravida massa. Quisque egestas mi a ullamcorper euismod. Aenean vitae enim at ex vehicula pharetra sed sed purus. Donec ut turpis id nulla sollicitudin lobortis. Sed condimentum mi lacinia mollis faucibus. Donec et erat a mauris volutpat tincidunt. Praesent scelerisque lobortis ligula id vulputate. Quisque eleifend ac nulla non vehicula."
    },
    {
        userID: 3,
        joined: "May 2014",
        totalXP: 1983,
        followers: 12000,
        following: 1268,
        sketchNavID: 2,
        bG_Reference: "Images/greenVert.jpg",
        topPic_Reference: "Images/greenH.jpg",
        hue1: 120,
        hue2: 160,
        hue3: 140,
        pfp: "Images/pfp.jpg",
        username: "*PASTEL*",
        linkID: 2,
        online: false,
        bio: "Fusce scelerisque nibh erat, quis congue elit ullamcorper ac. Ut a gravida massa. Quisque egestas mi a ullamcorper euismod. Aenean vitae enim at ex vehicula pharetra sed sed purus. Donec ut turpis id nulla sollicitudin lobortis. Sed condimentum mi lacinia mollis faucibus. Donec et erat a mauris volutpat tincidunt. Praesent scelerisque lobortis ligula id vulputate. Quisque eleifend ac nulla non vehicula."
    }
];
let profileData = [
    {
        profileID: 1,
        userID: 1,
        joined: "May 2024",
        totalXP: 1983,
        followers: 12000,
        following: 1268,
        sketchNavID: 1,
        bG_Reference: "Images/purpleVert.jpg",
        topPic_Reference: "Images/purpleH.jpg",
        hue1: 270,
        hue2: 330,
        hue3: 300,
        pfp: "Images/pfp2.jpg",
        username: "Jaylex",
        linkID: 1
    },
    {
        profileID: 2,
        userID: 2,
        joined: "May 2014",
        totalXP: 1983,
        followers: 12000,
        following: 1268,
        sketchNavID: 2,
        bG_Reference: "Images/greenVert.jpg",
        topPic_Reference: "Images/greenH.jpg",
        hue1: 120,
        hue2: 160,
        hue3: 140,
        pfp: "Images/pfpGreen.png",
        username: "Flora",
        linkID: 2
    },
    {
        profileID: 3,
        userID: 3,
        joined: "May 2014",
        totalXP: 1983,
        followers: 12000,
        following: 1268,
        sketchNavID: 2,
        bG_Reference: "Images/greenVert.jpg",
        topPic_Reference: "Images/greenH.jpg",
        hue1: 120,
        hue2: 160,
        hue3: 140,
        pfp: "Images/pfp.jpg",
        username: "*PASTEL*",
        linkID: 2
    }
]



let loadStyle = (id) => {
    user = userData.find((u) => u.userID === id);
    loadStyleFromData(user);
}
let loadStyleFromData = (data) => {
    document.documentElement.style.setProperty('--color1', data.hue1);
    document.documentElement.style.setProperty('--color2', data.hue2);
    document.documentElement.style.setProperty('--color5', data.hue3);
}
let loadStyle2FromData = (data) => {
    document.documentElement.style.setProperty('--color3', data.hue1);
    document.documentElement.style.setProperty('--color4', data.hue2);
    document.documentElement.style.setProperty('--color5', data.hue3);
}

let userID = 1;