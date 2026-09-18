const player = {

    month: 1,

    cash: 5000,

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

}
updateDashboard();
