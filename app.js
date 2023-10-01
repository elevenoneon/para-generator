const input = document.getElementById("numOfwords");
const container = document.querySelector(".container");

const generateWord = (n) => {
    let text = "";
    const letters = "abcdefghijklmnopqrstuvwxyz";

    for (let i = 1; i <= n; ++i) {
        text += letters[(Math.random() * 25).toFixed(0)];
    }

    return text;
};

const generatePara = () => {
    const numOfWords = Number(input.value);

    const para = document.createElement("p");

    let data = "";

    for (let i = 0; i < numOfWords; ++i) {
        const randomNumber = (Math.random() * 15).toFixed(0);
        data += generateWord(randomNumber);
        data += " ";
    }

    para.innerText = data;

    para.setAttribute("class", "paras");

    container.append(para);
};