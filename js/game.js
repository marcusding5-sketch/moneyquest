// ========================================
// PLAYER DATA
// ========================================

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


// ========================================
// TRANSACTION HISTORY
// ========================================

const transactions = [];


// Add a new transaction

function addTransaction(description, amount, type) {

    transactions.unshift({

        month: player.month,

        description: description,

        amount: amount,

        type: type

    });

    updateTransactionLog();

}


// Display transactions on the page

function updateTransactionLog() {

    const log =
        document.getElementById("transaction-log");

    if (!log) {
        return;
    }


    // Show message if nothing has happened yet

    if (transactions.length === 0) {

        log.innerHTML =
            '<p class="empty-transactions">No transactions yet.</p>';

        return;
    }


    log.innerHTML = "";


    transactions.forEach(transaction => {

        const item =
            document.createElement("div");

        item.classList.add("transaction-item");


        const sign =
            transaction.amount >= 0 ? "+" : "-";

        const amount =
            Math.abs(transaction.amount);


        item.innerHTML = `
            <span class="transaction-month">
                Month ${transaction.month}
            </span>

            <span class="transaction-description">
                ${transaction.description}
            </span>

            <strong class="${transaction.type}">
                ${sign}$${amount.toLocaleString()}
            </strong>
        `;


        log.appendChild(item);

    });

}


// ========================================
// UPDATE DASHBOARD
// ========================================

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
        (leftover >= 0 ? "+$" : "-$") +
        Math.abs(leftover).toLocaleString();

}


// ========================================
// MONTHLY FINANCES
// ========================================

function processMonthlyFinances() {

    // Receive salary

    player.cash += player.salary;

    addTransaction(
        "💼 Monthly salary",
        player.salary,
        "transaction-income"
    );


    // Pay living expenses

    player.cash -= player.livingExpenses;

    addTransaction(
        "🧾 Living expenses",
        -player.livingExpenses,
        "transaction-expense"
    );

}


// ========================================
// SHOW RANDOM LIFE EVENT
// ========================================

function showRandomEvent() {

    const randomIndex =
        Math.floor(Math.random() * events.length);


    const event =
        events[randomIndex];


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


        button.textContent =
            choice.text;


        button.classList.add(
            "choice-button"
        );


        button.addEventListener(
            "click",

            function () {

                makeChoice(choice);

            }
        );


        choicesContainer.appendChild(button);

    });

}


// ========================================
// PLAYER MAKES A CHOICE
// ========================================

function makeChoice(choice) {


    // ----------------------------
    // CASH
    // ----------------------------

    if (choice.cash) {

        player.cash += choice.cash;


        addTransaction(

            choice.transaction ||
            choice.text,

            choice.cash,

            choice.cash > 0
                ? "transaction-income"
                : "transaction-expense"

        );

    }


    // ----------------------------
    // SAVINGS
    // ----------------------------

    if (choice.savings) {

        player.savings +=
            choice.savings;


        addTransaction(

            choice.transaction ||
            choice.text,

            choice.savings,

            "transaction-saving"

        );

    }


    // ----------------------------
    // INVESTMENTS
    // ----------------------------

    if (choice.investments) {

        player.investments +=
            choice.investments;


        addTransaction(

            choice.transaction ||
            choice.text,

            choice.investments,

            "transaction-investment"

        );

    }


    // ----------------------------
    // DEBT
    // ----------------------------

    if (choice.debt) {

        player.debt +=
            choice.debt;


        addTransaction(

            choice.transaction ||
            choice.text,

            choice.debt,

            "transaction-debt"

        );

    }


    // ----------------------------
    // HAPPINESS + KNOWLEDGE
    // ----------------------------

    player.happiness +=
        choice.happiness || 0;


    player.knowledge +=
        choice.knowledge || 0;


    // ----------------------------
    // MONTHLY SALARY + EXPENSES
    // ----------------------------

    processMonthlyFinances();


    // Move to next month

    player.month++;


    // Refresh screen

    updateDashboard();

    showRandomEvent();

}


// ========================================
// START GAME
// ========================================

updateDashboard();

updateTransactionLog();

showRandomEvent();
