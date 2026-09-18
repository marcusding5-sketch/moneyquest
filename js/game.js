const player = {

    month: 1,

    cash: 3000,

    salary: 2800,

    livingExpenses: 1400,

    savings: 0,

    investments: 0,

    debt: 0,

    happiness: 70,

    knowledge: 10

};

function updateDashboard() {

    document.getElementById("cash").textContent =
        "$" + player.cash.toLocaleString();

    document.getElementById("savings").textContent =
        "$" + player.savings.toLocaleString();

    document.getElementById("investments").textContent =
        "$" + player.investments.toLocaleString();

    document.getElementById("debt").textContent =
        "$" + player.debt.toLocaleString();

    document.getElementById("month-display").textContent =
        "Month " + player.month;
    document.getElementById("salary").textContent =
    "+$" + player.salary.toLocaleString();

document.getElementById("living-expenses").textContent =
    "-$" + player.livingExpenses.toLocaleString();

const leftover =
    player.salary - player.livingExpenses;

document.getElementById("monthly-leftover").textContent =
    "+$" + leftover.toLocaleString();

}

function processMonthlyFinances() {

    // Receive monthly salary
    player.cash += player.salary;

    // Pay monthly living expenses
    player.cash -= player.livingExpenses;

}

updateDashboard();

function showRandomEvent() {

    const randomIndex =
        Math.floor(Math.random() * events.length);

    const event = events[randomIndex];

    document.getElementById("event-title").textContent =
        event.title;

    document.getElementById("event-description").textContent =
        event.description;


    const choicesContainer =
        document.getElementById("choices");

    choicesContainer.innerHTML = "";


    event.choices.forEach(choice => {

        const button =
            document.createElement("button");

        button.textContent = choice.text;

        button.classList.add("choice-button");

        button.addEventListener("click", function () {

            makeChoice(choice);

        });

        choicesContainer.appendChild(button);

    });

}

function makeChoice(choice) {

    player.cash += choice.cash || 0;

    player.savings += choice.savings || 0;

    player.investments +=
        choice.investments || 0;

    player.debt += choice.debt || 0;

    player.happiness +=
        choice.happiness || 0;

    player.knowledge +=
        choice.knowledge || 0;


    processMonthlyFinances();

player.month++;

updateDashboard();

showRandomEvent();
}

updateDashboard();
showRandomEvent();
