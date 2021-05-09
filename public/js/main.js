

const arr=['https://i.pinimg.com/originals/64/0a/66/640a66e273da542d9a3e56a430431c75.jpg','https://i.pinimg.com/originals/c0/6e/69/c06e69717a40eecd3dad772adc4d8afe.png','https://i.pinimg.com/originals/19/a7/18/19a7189ef4c854509271f2bc995b6620.jpg','https://static.zerochan.net/Crayon.Shin-chan.full.1351486.jpg','https://wallpaperaccess.com/full/555299.jpg','https://www.budgetdirect.com.au/blog/wp-content/uploads/2018/03/Japan-Travel-Guide.jpg','https://photos.smugmug.com/Kyoto/Kyoto-Romantic-Cherry-Blossom-Itinerary/i-dQdfWJD/0/4575e10a/L/shutterstock_1017748132-L.jpg','https://lh3.googleusercontent.com/_J2j5us2BXck/TV50deCfcAI/AAAAAAAACn8/LMSvUNjY90E/s1600/bernard-bear-1.jpg','https://www.anime-planet.com/images/anime/screenshots/bernard-china-diapers-10537-1.jpg','https://pics.imcdb.org/10555/gv.52.jpg'];

const images1=document.querySelector('.changer');


const randimg=Math.random()*10;
let r=Math.trunc(randimg);
let my=()=>{
    
    console.log(r);
    images1.src=arr[r];
    setTimeout(() => {
        my();
    }, 1000);
}

my();








