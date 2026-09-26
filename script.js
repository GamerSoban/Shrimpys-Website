const firstSection = document.getElementById("firstsection");
const secondSection = document.getElementById("secondsection");
const thirdSection = document.getElementById("thirdsection");

const firstButton = document.getElementById("buttonfirst");
const secondButton = document.getElementById("secondbutton");

secondSection.style.display = "none";
thirdSection.style.display = "none";

secondSection.style.opacity = "0";
thirdSection.style.opacity = "0";

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
  switchSection(firstSection, secondSection);
});

secondButton.addEventListener("click", () => {
  switchSection(secondSection, thirdSection);
});
