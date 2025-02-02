
//Text animation till Citat delen se här........
const element = document.getElementById("dynamisk-citat");
const citatArray = ["‘The cliffs of Shetland bear the wisdom of millennia, and the wind sweeping across the islands sings a song of freedom and courage. – Ylva & Eddie’",
    "‘Beauty lies in the details. – Ylva & Eddie ’",  "‘Be the change you wish to see in the world. – Mahatma Gandhi ’",
    "‘The journey of a thousand miles begins with a single step. – Lao Tzu ’",
    "‘Life is what happens when you're busy making other plans. – John Lennon ’",
    "‘Hope is a waking dream. – Aristotle ’",
    "‘Imagination is more important than knowledge. – Albert Einstein ’",
    "‘To travel is to live. – Hans Christian Andersen ’",
    "‘He who has a why to live can bear almost any how. – Friedrich Nietzsche ’",
    "‘Happiness is when what you think, what you say, and what you do are in harmony. – Mahatma Gandhi ’"]; 

const totalTid = 10 * 1000; // 10sek skrivstid (omvandla till ms)!
const bytsCitatTid = 2 * 10 * 1000; //var 2:a min byts citat=testat, ok 3 min för långtid att vänta
let citatIndex = 0;//det här är = citatArrays index. OBS!

function skrivCitat(){
    //ef 5:e min ta bort liggande citatet.
    element.innerHTML = "";
    let index = 0;
    const text = citatArray[citatIndex];//hämtas nästa citat fr citatArrayen.
    let textLength = text.length;
    let speed = (totalTid/textLength); 

    //Utskrift-metoden till citat som skrivs ut långsammare....
    function typeWriter(){
        if(index < textLength){
            element.innerHTML += text.charAt(index);
            index++;

            //Timeout funktion= Jätte bra!
            setTimeout (typeWriter, speed);
        }
        else {
            //lägg till en punkt efter citatet är skriven.
            element.innerHTML += ".";
        }
    }
    typeWriter(); //starta utskriften

    //gå till nästa citat;citaten är slut då börja om igen frn början mha %!Underbart!!!
    citatIndex = (citatIndex + 1) % citatArray.length;
}

//Anrop till 1:a citat och starta loopen
window.onload = () => {
    skrivCitat(); //anropa citat metoden och visa 1:a citat
    setInterval (skrivCitat, bytsCitatTid); //anropa funktion + tiden
}