let swagDog = [
    "https://i.imgur.com/0HJsTDe.jpeg",
    "https://i.imgur.com/0HJsTDe.jpeg",
    "https://i.imgur.com/SHWwFpI.jpeg",
    "https://i.imgur.com/rrzKJ70.png",
    "https://i.imgur.com/xyyVU.jpeg",
    "https://i.pinimg.com/736x/07/d4/93/07d493050a3a93f41b107db348dd0e61.jpg",
    "https://www.meme-arsenal.com/memes/fc323fcb68ccac5c0cd0124a7c03cde5.jpg",
    "https://s3.amazonaws.com/playbarkrun/wp-content/uploads/2017/01/12095244/131.jpg", 
    "https://i.pinimg.com/originals/47/92/0c/47920cf7b089b06f3475190640a5ec4d.jpg",
    "https://i.pinimg.com/originals/b2/18/3b/b2183b8b6976ae3a431fb89345d1dbf8.jpg"
];

const imgs = document.getElementsByTagName("img")
for (let i = 0; i < imgs.length; i++) {
    const randomImg = Math.floor(Math.random() * swagDog.length)
    imgs[i].src = swagDog[randomImg];
}

const headers = document.getElementsByTagName("h2")
for (let i = 0; i < headers.length; i++) {
    headers[i].innerText = "Swag doggo watching";
}

