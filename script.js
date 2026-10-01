const firstSection = document.getElementById("firstsection");
const secondSection = document.getElementById("secondsection");
const thirdSection = document.getElementById("thirdsection");
const fourthsection = document.getElementById("fourthsection");
const envelopeSection = document.getElementById("envelopesection");
const letterQuestionSection = document.getElementById("letterquestions")
const videoQuestionSection = document.getElementById("videoquestions")
const msgsQuestionSection = document.getElementById("msgssectionquestions")

const firstButton = document.getElementById("buttonfirst");
const secondButton = document.getElementById("secondbutton");
const thirdButton = document.getElementById("thirdbutton");
const envelopeLetterButton = document.getElementById("letterenvelope");
const envelopeVideoButton = document.getElementById("videoenvelope");
const envelopeMsgButton = document.getElementById("msgsenvelope");
const messagesButton = document.getElementById("messagesbutton");
const letterQanswersButton = document.querySelectorAll(".letterqoptions")
const videoQanswersButton = document.querySelectorAll(".videoquestionoptions")
const msgsQannswersButton = document.querySelectorAll(".msgsquestionoptions")

const letterQuestion = document.getElementById("letterQtext")
const videoQuestion = document.getElementById("videoQtext")
const msgsQuestion = document.getElementById("msgsQtext")

secondSection.style.display = "none";
thirdSection.style.display = "none";
fourthsection.style.display = "none";
envelopeSection.style.display = "none";
letterQuestionSection.style.display = "none";
videoQuestionSection.style.display = "none";
msgsQuestionSection.style.display = "none"

secondSection.style.opacity = "0";
thirdSection.style.opacity = "0";
fourthsection.style.opacity = "0";
envelopeSection.style.opacity = "0";

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
  switchSection(envelopeSection, secondSection);
});

envelopeVideoButton.addEventListener("click", () => {
  switchSection(envelopeSection, thirdSection);
});

envelopeMsgButton.addEventListener("click", () => {
  switchSection(envelopeSection, fourthsection);
});

messagesButton.addEventListener("click", () => {
  switchSection(fourthsection, envelopeSection);
});
