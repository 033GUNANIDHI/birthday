function checkPassword(){
    var password = document.getElementById("passwordInput").value;
    var correctPassword = "pinku"; // girlfriend name here

    if(password.toLowerCase() === correctPassword){
        document.getElementById("lockScreen").style.display = "none";
        document.getElementById("mainContent").style.display = "block";
    } 
    else{
        document.getElementById("error").innerHTML = "Wrong Password 😜 Try Again";
    }
}
// TYPING LOVE LETTER

const text = `
Dear pinku gurl ❤️

From the day you came into this world,
it became a more beautiful place.

Today is your 17th birthday 🎂
and I just want you to know
how special you are to me.

You are my besto,
my motivator,
and the best page in my life.

Happy Birthday  pinku ❤️
`;

let i = 0;

function typeLetter(){

if(i < text.length){
document.getElementById("loveLetter").innerHTML += text.charAt(i);
i++;
setTimeout(typeLetter,50);
}

}

typeLetter();


// OPEN SURPRISE
function openSurprise(){
    document.getElementById("surpriseBox").style.display = "block";
}

// CAKE CUT
function cutCake(){
    document.querySelector(".cake").innerHTML = "🍰";
    document.getElementById("message").innerHTML =
    "Happy Birthday My dear❤️ You are the best person in everyone's life.";
    startFireworks();
}


// FLOATING HEARTS
function createHeart(){
    const heart = document.createElement("div");
    heart.classList.add("heart");

    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (Math.random() * 3 + 2) + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

// HEARTS LOOP
setInterval(createHeart, 500);

// SIMPLE FIREWORK EFFECT
function startFireworks(){
    for(let i=0;i<20;i++){
        const spark = document.createElement("div");
        spark.classList.add("spark");

        spark.style.left = Math.random()*100 + "vw";
        spark.style.top = Math.random()*100 + "vh";

        document.body.appendChild(spark);

        setTimeout(()=>{
            spark.remove();
        },2000);
    }
}

// DAYS SINCE BIRTH
const birthDate = new Date("March 20, 2009 00:00:00").getTime(); 
// girlfriend birth date change pannunga

setInterval(function(){

let now = new Date().getTime();
let diff = now - birthDate;

let days = Math.floor(diff / (1000*60*60*24));
let hours = Math.floor((diff % (1000*60*60*24)) / (1000*60*60));
let minutes = Math.floor((diff % (1000*60*60)) / (1000*60));
let seconds = Math.floor((diff % (1000*60)) / 1000);

document.getElementById("lifeTimer").innerHTML =
days + " Days " + hours + " Hours " + minutes + " Minutes " + seconds + " Seconds";

},1000);

