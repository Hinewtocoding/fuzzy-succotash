const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

function speak(sentence) {
    const text_speak = new SpeechSynthesisUtterance(sentence);

    text_speak.rate = 1;
    text_speak.pitch = 1;

    window.speechSynthesis.speak(text_speak);
}

function wishMe() {
    var day = new Date();
    var hr = day.getHours();

    if(hr >= 0 && hr < 12) {
        speak("Good Morning Boss");
    }

    else if(hr == 12) {
        speak("Good noon Bro");
    }

    else if(hr > 12 && hr <= 17) {
        speak("Good Afternoon Bro");
    }

    else {
        speak("Good Evening Bro");
    }
}

window.addEventListener('load', ()=>{
    speak("Activating Inertia");
    speak("Going online");
    wishMe();
})

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onresult = (event) => {
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    speakThis(transcript.toLowerCase());
}

btn.addEventListener('click', ()=>{
    recognition.start();
})

function speakThis(message) {
    const speech = new SpeechSynthesisUtterance();

    speech.text = "I did not understand what you said please try again";

    if(message.includes('hey') || message.includes('hello')) {
        const finalText = "Hey buddy, how are you";
        speech.text = finalText;
    }

    else if(message.includes('how are you')) {
        const finalText = "I am fine , tell me how can i help you";
        speech.text = finalText;
    }
    
    else if(message.includes('game')) {
        const finalText = "Click on the Refrence link below to play game";
        speech.text = finalText;
    }

    else if(message.includes('who made you')) {
        const finalText = "I was Produced by Asjad";
        speech.text = finalText;
    }

    else if(message.includes('name')) {
        const finalText = "My name is Inertia";
        speech.text = finalText;
    }
    
    else if(message.includes('set')) {
        window.open("https://timeanddate.com", "_blank");
        const finalText = "Opening stopwatch";
        speech.text = finalText;
    }
   
    else if(message.includes('purpose')) {
        const finalText = "My Purpose is to serve as a voice assistant. I was solely made to be presented in Scienject";
        speech.text = finalText;
    }

  
    else if(message.includes('open google')) {
        window.open("https://google.com", "_blank");
        const finalText = "Opening Google";
        speech.text = finalText;
    }
    
    else if(message.includes('open instagram')) {
        window.open("https://instagram.com", "_blank");
        const finalText = "Opening instagram";
        speech.text = finalText;
    }

    else if(message.includes('open youtube')) {
        window.open("https://youtube.com", "_blank");
        const finalText = "Opening youtube";
        speech.text = finalText;
    }

    else if(message.includes('what is') || message.includes('is') || message.includes('what are')) {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "This is what i found on internet regarding " + message;
        speech.text = finalText;
    }

    else if(message.includes('wikipedia')) {
        window.open(`https://en.wikipedia.org/wiki/${message.replace("wikipedia", "")}`, "_blank");
        const finalText = "This is what i found on wikipedia regarding " + message;
        speech.text = finalText;
    }

    else if(message.includes('time')) {
        const time = new Date().toLocaleString(undefined, {hour: "numeric", minute: "numeric"})
        const finalText = time;
        speech.text = finalText;
    }

    else if(message.includes('meaning of life')) {
        const finalText = "Life Has Multipule Meanings one being to live a happy duration of time given";
        speech.text = finalText;
    }

    else if(message.includes('date')) {
        const date = new Date().toLocaleString(undefined, {month: "short", day: "numeric"})
        const finalText = date;
        speech.text = finalText;
    }



    else if(message.includes('calculator')) {
        window.open('Calculator:///')
        const finalText = "Opening calculator , let me know if you have a maths question, i might not be a genius but will sure help.";
        speech.text = finalText;
    }

    else {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "I found some information for " + message + " on google";
        speech.text = finalText;
    }
    

    speech.volume = 1;
    speech.pitch = 1;
    speech.rate = 1;

    window.speechSynthesis.speak(speech);
}