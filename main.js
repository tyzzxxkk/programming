let count = 0;

const resultH1 = document.getElementsByTagName('h1')[0];
const plusButton = document.getElementsByTagName('button')[0];

plusButton.addEventListener("click", () => {
    count++;
    resultH1.innerText = count;
});