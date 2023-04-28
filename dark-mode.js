document.addEventListener('DOMContentLoaded', function () {

    const dataSet = document.documentElement.dataset;
    dataSet.theme = "light"
    var calculatorInput;
    const calculatorResult = document.querySelector('.resultado');
    dateBuilder();

    document.querySelector('#toggle-dark').onclick = function () {

        const inDarkMode = (dataSet.theme === 'dark');
        dataSet.theme = inDarkMode ? "light" : "dark";
    }

    document.querySelector('.user-name-input').onchange = function () {
        const nameInput = this.value;
        document.querySelector('.user-name-header').innerHTML = greetingMessageBuilder(nameInput);
        document.querySelector('.user-name-footer').innerHTML = greetingMessageBuilder(nameInput);

    }

    document.querySelector('.input-calculator').onchange = function () {

        calculatorInput = this.value
    }

    document.querySelector(".calculator-show-bt").onclick = function () {
        if (calculatorInput === undefined) {

            calculatorResult.innerHTML = "Insira uma expressão";

        } else {
            const result = eval(calculatorInput);
            calculatorResult.innerHTML = `${result}`;
        }
    }

    document.querySelector('.calculator-delete-bt').onclick = function () {

        result = "";
        calculatorResult.innerHTML = `${result}`;
    }

    document.querySelector('.text-to-center').onchange = function () {

        document.querySelector('.centered-text').innerHTML = `${this.value}`;
    }
});

function dateBuilder() {

    const date = new Date();
    const months = [
        "janeiro", "fevereiro", "março", "abril",
        "maio", "junho", "julho", "agosto",
        "setembro", "outubro", "novembro", "dezembro"
    ];
    let month = months[date.getMonth()];
    const dateFooter = document.querySelector('.date');
    dateFooter.innerHTML = `${date.getDate()} de ${month}, ${date.getFullYear()}`;
}

function greetingMessageBuilder(name) {

    const date = new Date();
    const hour = date.getHours();

    if(hour < 12) {

        return "Bom dia " + name; 

    } else {

        return "Boa tarde " + name;
    }
}
