const events = [

    // ========================================
    // NEW PHONE
    // ========================================

    {
        title: "The New Phone 📱",

        description:
            "Your phone still works, but everyone seems to have the latest model. What do you do?",

        choices: [

            {
                text: "Buy it for $1,400",

                cash: -1400,

                happiness: 10,
                knowledge: 0,

                transaction: "Bought new phone",

                result:
                    "You bought the new phone for $1,400.",

                lesson:
                    "Wanting something is different from needing it. Large lifestyle purchases can significantly reduce the cash you have available for emergencies or future goals."
            },


            {
                text: "Use Buy Now Pay Later",

                debt: 1400,

                happiness: 10,
                knowledge: 0,

                transaction:
                    "Phone — Buy Now Pay Later",

                result:
                    "You got the phone without paying the full price upfront, but took on $1,400 of debt.",

                lesson:
                    "Buy Now Pay Later can make expensive purchases feel cheaper because payment is delayed. The debt still exists and future repayments reduce the money available for other expenses."
            },


            {
                text: "Keep your current phone",

                happiness: -2,
                knowledge: 5,

                transaction: null,

                result:
                    "You decided to keep your current phone and saved your money.",

                lesson:
                    "Choosing not to replace something that still works can protect your cash for emergencies, savings or other financial goals."
            }

        ]
    },


    // ========================================
    // LAPTOP EMERGENCY
    // ========================================

    {
        title: "Emergency! 💻",

        description:
            "Your laptop suddenly stops working and you need one for school.",

        choices: [

            {
                text:
                    "Buy a new laptop — $1,300",

                cash: -1300,

                happiness: 5,

                transaction:
                    "Bought new laptop",

                result:
                    "You spent $1,300 on a new laptop.",

                lesson:
                    "Unexpected essential expenses are one reason an emergency fund is useful. Having cash set aside can prevent an emergency from becoming debt."
            },


            {
                text:
                    "Buy refurbished — $650",

                cash: -650,

                happiness: 2,
                knowledge: 3,

                transaction:
                    "Bought refurbished laptop",

                result:
                    "You bought a refurbished laptop for $650.",

                lesson:
                    "Comparing alternatives can reduce the cost of an essential purchase. The cheapest option is not always best, but value matters."
            },


            {
                text:
                    "Put it on your credit card",

                debt: 1300,

                happiness: 5,

                transaction:
                    "Laptop — Credit Card",

                result:
                    "You bought the laptop using $1,300 of credit.",

                lesson:
                    "Credit can help cover urgent expenses, but unpaid balances can create future repayment obligations and may incur interest."
            }

        ]
    },


    // ========================================
    // INVESTMENT OPPORTUNITY
    // ========================================

    {
        title:
            "Investment Opportunity 📈",

        description:
            "Your friend tells you about an investment that is 'guaranteed' to return 20%.",

        choices: [

            {
                text:
                    "Invest $1,000 immediately",

                cash: -1000,
                investments: 1000,

                knowledge: -5,

                transaction:
                    "Investment transfer",

                transfer: {
                    from: "Cash",
                    to: "Investments",
                    amount: 1000
                },

                result:
                    "You invested $1,000 without researching the opportunity.",

                lesson:
                    "Be cautious when an investment promises unusually high or 'guaranteed' returns. Understanding the investment and its risks should come before committing your money."
            },


            {
                text:
                    "Research it first",

                knowledge: 10,

                transaction: null,

                result:
                    "You decided to investigate the investment before putting money into it.",

                lesson:
                    "Research helps you understand potential returns, risks, fees and whether an investment fits your financial goals."
            },


            {
                text:
                    "Ignore it",

                knowledge: 3,

                transaction: null,

                result:
                    "You decided not to invest.",

                lesson:
                    "You do not need to participate in every investment opportunity. Avoiding something you do not understand can be a valid financial decision."
            }

        ]
    }

];
