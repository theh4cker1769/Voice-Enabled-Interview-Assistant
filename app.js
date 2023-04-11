

const btn = document.querySelector('.talk');
const btn2 = document.querySelector('.talk2');
const content = document.querySelector('.content');
const content2 = document.querySelector('.content2');
const texts = document.querySelector('.assistant');

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();


let p = document.createElement("p");

recognition.onresult = (event) => {
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    speakThis(transcript.toLowerCase());
}



btn.addEventListener('click', ()=>{
    recognition.start();
})



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
        speak("Good Morning");
        
    }

    else if(hr == 12) {
        speak("Good noon");
    }

    else if(hr > 12 && hr <= 17) {
        speak("Good Afternoon");
    }

    else {
        speak("Good Evening");
    }
}

window.addEventListener('load', ()=>{
    wishMe("");
    speak("Namaste");
    speak("I'm a virtual interview assistant. I am going to ask you series of questions can you answer it properly ");  
})


function speakThis(message) {
    const speech = new SpeechSynthesisUtterance();

    speech.text = "I did not understand what you said please try again";

    if(message.includes('yes')) {
        const finalText = "Let's Start our interview";
        speech.text = finalText;

        const Question = "Most popular framework of javascript is ";
        speech.text = Question;
        texts.innerText = Question;

        const recognition2 = new SpeechRecognition();

        recognition2.onresult = (event) => {
            const current = event.resultIndex;
            const transcript = event.results[current][0].transcript;
            content2.textContent = transcript;
            speakThisQuestion(transcript.toLowerCase());
        }

        btn2.addEventListener('click', ()=>{
            alert('hello')
            recognition2.start();
        })
        
        function speakThisQuestion(message) {

            const speech = new SpeechSynthesisUtterance();

            speech.text = "I did not understand what you said please try again";

            if (message.includes('react')) {
                const QuestionInter = "You got that right";
                speech.text = QuestionInter;
                texts.innerText = QuestionInter;
            }
        }

        


    }

    else {
        const QuestionInter = "Speak Again";
        speech.text = QuestionInter;
    }

    

    

    speech.volume = 1;
    speech.pitch = 1;
    speech.rate = 1;

    window.speechSynthesis.speak(speech);
}


