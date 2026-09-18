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


// ========================================
// ADD TRANSACTION
// ========================================

function addTransaction(description, amount, type) {

    transactions.unshift({
        month: player.month,
        description: description,
        amount: amount,
        type: type
    });

    updateTransactionLog();
}


// ========================================
// TRANSACTION RECEIPT
// ========================================

function updateTransactionLog() {

    const log =
        document.getElementById("transaction-log");

    if (!log) {
        return;
    }


    if (transactions.length === 0) {

        log.innerHTML = `
            <div class="receipt-empty">
                No transactions yet
            </div>
        `;

        return;
    }


    log.innerHTML = "";


    // Group transactions by month
    const groupedTransactions = {};


    transactions.forEach(transaction => {

        if (!groupedTransactions[transaction.month]) {

            groupedTransactions[transaction.month] = [];

        }

        groupedTransactions[transaction.month]
            .push(transaction);

    });


    // Newest month first
    const months =
        Object.keys(groupedTransactions)
            .map(Number)
            .sort((a, b) => b - a);


    months.forEach(month => {

        const monthTransactions =
            groupedTransactions[month];


        const monthSection =
            document.createElement("div");

        monthSection.classList.add(
            "receipt-month"
        );


        // MONTH TITLE
        const monthTitle =
            document.createElement("div");

        monthTitle.classList.add(
            "receipt-month-title"
        );

        monthTitle.textContent =
            "MONTH " + month;

        monthSection.appendChild(
            monthTitle
        );


        let netCashFlow = 0;


        // Show transactions in order
        monthTransactions
            .slice()
            .reverse()
            .forEach(transaction => {


                const row =
                    document.createElement("div");

                row.classList.add(
                    "receipt-row"
                );


                // DESCRIPTION
                const description =
                    document.createElement("span");

                description.classList.add(
                    "receipt-description"
                );


                const cleanDescription =
                    transaction.description
                        .replace(/[💼🧾📱💻📈]/g, "")
                        .trim();


                description.textContent =
                    cleanDescription;


                // AMOUNT
                const amount =
                    document.createElement("strong");

                amount.classList.add(
                    "receipt-amount"
                );


                // ----------------------------
                // TRANSFER
                // ----------------------------

                if (
                    transaction.type ===
                    "transaction-transfer"
                ) {

                    amount.textContent =
                        "$" +
                        Math.abs(
                            transaction.amount
                        ).toLocaleString();


                    amount.classList.add(
                        "receipt-transfer"
                    );

                }


                // ----------------------------
                // DEBT
                // ----------------------------

                else if (
                    transaction.type ===
                    "transaction-debt"
                ) {

                    amount.textContent =
                        "Debt +$" +
                        Math.abs(
                            transaction.amount
                        ).toLocaleString();


                    amount.classList.add(
                        "receipt-debt"
                    );

                }


                // ----------------------------
                // NORMAL TRANSACTION
                // ----------------------------

                else {

                    const sign =
                        transaction.amount >= 0
                            ? "+"
                            : "-";


                    amount.textContent =
                        sign +
                        "$" +
                        Math.abs(
                            transaction.amount
                        ).toLocaleString();


                    if (
                        transaction.amount >= 0
                    ) {

                        amount.classList.add(
                            "receipt-positive"
                        );

                    }

                    else {

                        amount.classList.add(
                            "receipt-negative"
                        );

                    }


                    // Calculate cash flow
                    if (
                        transaction.type ===
                        "transaction-income" ||

                        transaction.type ===
                        "transaction-expense"
                    ) {

                        netCashFlow +=
                            transaction.amount;

                    }

                }


                row.appendChild(
                    description
                );

                row.appendChild(
                    amount
                );

                monthSection.appendChild(
                    row
                );

            });


        // ========================================
        // NET CASH FLOW
        // ========================================

        const totalRow =
            document.createElement("div");

        totalRow.classList.add(
            "receipt-total"
        );


        const totalLabel =
            document.createElement("span");

        totalLabel.textContent =
            "NET CASH FLOW";


        const totalAmount =
            document.createElement("strong");


        const totalSign =
            netCashFlow >= 0
                ? "+"
                : "-";


        totalAmount.textContent =
            totalSign +
            "$" +
            Math.abs(
                netCashFlow
            ).toLocaleString();


        if (netCashFlow >= 0) {

            totalAmount.classList.add(
                "receipt-positive"
            );

        }

        else {

            totalAmount.classList.add(
                "receipt-negative"
            );

        }


        totalRow.appendChild(
            totalLabel
        );

        totalRow.appendChild(
            totalAmount
        );


        monthSection.appendChild(
            totalRow
        );


        log.appendChild(
            monthSection
        );

    });

}


// ========================================
// UPDATE DASHBOARD
// ========================================

function updateDashboard() {

    document.getElementById("cash").textContent =
        "$" +
        player.cash.toLocaleString();


    document.getElementById("savings").textContent =
        "$" +
        player.savings.toLocaleString();


    document.getElementById("investments").textContent =
        "$" +
        player.investments.toLocaleString();


    document.getElementById("debt").textContent =
        "$" +
        player.debt.toLocaleString();


    document.getElementById("month-display").textContent =
        "Month " +
        player.month;


    document.getElementById("salary").textContent =
        "+$" +
        player.salary.toLocaleString();


    document.getElementById("living-expenses").textContent =
        "-$" +
        player.livingExpenses.toLocaleString();


    const leftover =
        player.salary -
        player.livingExpenses;


    document.getElementById("monthly-leftover").textContent =
        (leftover >= 0 ? "+$" : "-$") +
        Math.abs(
            leftover
        ).toLocaleString();

}


// ========================================
// MONTHLY FINANCES
// ========================================

function processMonthlyFinances() {

    // Receive salary

    player.cash +=
        player.salary;


    addTransaction(
        "Monthly salary",
        player.salary,
        "transaction-income"
    );


    // Pay living expenses

    player.cash -=
        player.livingExpenses;


    addTransaction(
        "Living expenses",
        -player.livingExpenses,
        "transaction-expense"
    );

}


// ========================================
// SHOW RANDOM LIFE EVENT
// ========================================

function showRandomEvent() {

    const randomIndex =
        Math.floor(
            Math.random() *
            events.length
        );


    const event =
        events[randomIndex];


    document.getElementById(
        "event-title"
    ).textContent =
        event.title;


    document.getElementById(
        "event-description"
    ).textContent =
        event.description;


    const choicesContainer =
        document.getElementById(
            "choices"
        );


    choicesContainer.innerHTML =
        "";


    event.choices.forEach(choice => {

        const button =
            document.createElement(
                "button"
            );


        button.textContent =
            choice.text;


        button.classList.add(
            "choice-button"
        );


        button.addEventListener(
            "click",

            function () {

                makeChoice(
                    choice
                );

            }
        );


        choicesContainer.appendChild(
            button
        );

    });

}


// ========================================
// PLAYER MAKES A CHOICE
// ========================================

function makeChoice(choice) {


    // ========================================
    // TRANSFER
    // Cash -> Investments / Savings
    // ========================================

    if (choice.transfer) {

        player.cash +=
            choice.cash || 0;


        player.savings +=
            choice.savings || 0;


        player.investments +=
            choice.investments || 0;


        addTransaction(

            choice.transfer.from +
            " → " +
            choice.transfer.to,

            -choice.transfer.amount,

            "transaction-transfer"

        );

    }


    // ========================================
    // NORMAL CASH TRANSACTION
    // ========================================

    else if (choice.cash) {

        player.cash +=
            choice.cash;


        addTransaction(

            choice.transaction ||
            choice.text,

            choice.cash,

            choice.cash > 0
                ? "transaction-income"
                : "transaction-expense"

        );

    }


    // ========================================
    // SAVINGS
    // ========================================

    if (
        choice.savings &&
        !choice.transfer
    ) {

        player.savings +=
            choice.savings;


        addTransaction(

            choice.transaction ||
            choice.text,

            choice.savings,

            "transaction-saving"

        );

    }


    // ========================================
    // INVESTMENTS
    // ========================================

    if (
        choice.investments &&
        !choice.transfer
    ) {

        player.investments +=
            choice.investments;


        addTransaction(

            choice.transaction ||
            choice.text,

            choice.investments,

            "transaction-investment"

        );

    }


    // ========================================
    // DEBT
    // ========================================

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


    // ========================================
    // HAPPINESS + KNOWLEDGE
    // ========================================

    player.happiness +=
        choice.happiness || 0;


    player.knowledge +=
        choice.knowledge || 0;


    // ========================================
    // MONTHLY SALARY + EXPENSES
    // ========================================

    processMonthlyFinances();


    // ========================================
    // NEXT MONTH
    // ========================================

    player.month++;


    // Update dashboard

    updateDashboard();


    // Show next event

    showRandomEvent();

}


// ========================================
// START MONEYQUEST
// ========================================

updateDashboard();

updateTransactionLog();

showRandomEvent();
