const firstSection = document.getElementById("firstsection");
const secondSection = document.getElementById("secondsection");
const thirdSection = document.getElementById("thirdsection");
const fourthsection = document.getElementById("fourthsection");
const envelopeSection = document.getElementById("envelopesection");
const letterQuestionSection = document.getElementById("letterquestions")
const videoQuestionSection = document.getElementById("videoquestions")

const firstButton = document.getElementById("buttonfirst");
const secondButton = document.getElementById("secondbutton");
const thirdButton = document.getElementById("thirdbutton");
const envelopeLetterButton = document.getElementById("letterenvelope");
const envelopeVideoButton = document.getElementById("videoenvelope");
const envelopeMsgButton = document.getElementById("msgsenvelope");
const messagesButton = document.getElementById("messagesbutton");
const letterQanswersButton = document.querySelectorAll(".letterqoptions")
const videoQanswersButton = document.querySelectorAll(".videoquestionoptions")

const letterQuestion = document.getElementById("letterQtext")
const videoQuestion = document.getElementById("videoQtext")

const LetterQuestions = [
  {
    question: "When is our anniversary?",
    options: ["04/13", "02/14","03/11"],
    correct: 0
  },
  {
    question : "What day was it when we met?",
    options: ["Christmas","Easter","Valentines"],
    correct: 2
  },
  {
    question: "What colour is my prayer mat?",
    options: ["Baby Pink", "Hot Pink", "Dark Blue"],
    correct: 0
  }
];
const VideoQuestions = [
  {
    question: "Who is my main supplier of goofy videos RECENTLY?",
    options: ["Shaheer", "Ismail", "Husnain"],
    correct: 1
  },
  {
    question: "What is my old nickname?",
    options: ["Gulab", "Guriya", "Chilli Milli"],
    correct: 2
  },
  {
    question: "What is your favourite F1 Team?",
    options: ["Red Bull", "Mclaren", "Ferrari"],
    correct: 0
  }
];

let currentQuestion = 0;
let currentQuestions;

secondSection.style.display = "none";
thirdSection.style.display = "none";
fourthsection.style.display = "none";
envelopeSection.style.display = "none";
letterQuestionSection.style.display = "none";
videoQuestionSection.style.display = "none";

secondSection.style.opacity = "0";
thirdSection.style.opacity = "0";
fourthsection.style.opacity = "0";
envelopeSection.style.opacity = "0";
letterQuestionSection.style.opacity = "0";
videoQuestionSection.style.opacity = "0";

function switchSection(currentSection, nextSection) {
  // Start next section invisible
  nextSection.style.opacity = "0";
  nextSection.style.display = "flex";

  // Fade current section out
  currentSection.style.opacity = "0";

  setTimeout(() => {
    // Remove old section from layout
    currentSection.style.display = "none";

    // Fade next section in
    requestAnimationFrame(() => {
      nextSection.style.opacity = "1";
    });
  }, 500);
}
function showQuestion(questiontext,answers) {
  const question = currentQuestions[currentQuestion];

  questiontext.textContent = question.question;
  answers.forEach((answer, index)=>
  {
    answer.textContent = question.options[index];
  });
}

letterQanswersButton.forEach((answer, index)=>
{
  answer.addEventListener("click",()=>
  {
    if (index === currentQuestions[currentQuestion].correct) {
      currentQuestion++;
      if (currentQuestion >= currentQuestions.length) {
        switchSection(letterQuestionSection, secondSection);
        return;
      }
      showQuestion(letterQuestion, letterQanswersButton);
    }
  });
}); 
videoQanswersButton.forEach((answer, index) => {
    answer.addEventListener("click", () => {

        if (index === currentQuestions[currentQuestion].correct) {
            currentQuestion++;

            if (currentQuestion >= currentQuestions.length) {
                switchSection(videoQuestionSection, thirdSection);
                return;
            }

            showQuestion(videoQuestion, videoQanswersButton);
        }

    });
});

firstButton.addEventListener("click", () => {
  switchSection(firstSection, envelopeSection);
});

secondButton.addEventListener("click", () => {
  switchSection(secondSection, envelopeSection);
});

thirdButton.addEventListener("click", () => {
  switchSection(thirdSection, envelopeSection);
});

envelopeLetterButton.addEventListener("click", () => {
  currentQuestions = LetterQuestions;
  currentQuestion = 0;

  showQuestion(letterQuestion, letterQanswersButton);
  switchSection(envelopeSection, letterQuestionSection);
});

envelopeVideoButton.addEventListener("click", () => {
  currentQuestions = VideoQuestions;
  currentQuestion = 0;

  showQuestion(videoQuestion, videoQanswersButton);
  switchSection(envelopeSection, videoQuestionSection);
});

envelopeMsgButton.addEventListener("click", () => {
  switchSection(envelopeSection, fourthsection);
});

messagesButton.addEventListener("click", () => {
  switchSection(fourthsection, envelopeSection);
});
