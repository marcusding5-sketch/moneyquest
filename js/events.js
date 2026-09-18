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

                transaction: "Bought new phone"
            },


            {
                text: "Use Buy Now Pay Later",

                debt: 1400,

                happiness: 10,
                knowledge: 0,

                transaction: "Phone — Buy Now Pay Later"
            },


            {
                text: "Keep your current phone",

                happiness: -2,
                knowledge: 5,

                transaction: null
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
                text: "Buy a new laptop — $1,300",

                cash: -1300,

                happiness: 5,

                transaction: "Bought new laptop"
            },


            {
                text: "Buy refurbished — $650",

                cash: -650,

                happiness: 2,
                knowledge: 3,

                transaction: "Bought refurbished laptop"
            },


            {
                text: "Put it on your credit card",

                debt: 1300,

                happiness: 5,

                transaction: "Laptop — Credit Card"
            }

        ]
    },


    // ========================================
    // INVESTMENT OPPORTUNITY
    // ========================================

    {
        title: "Investment Opportunity 📈",

        description:
            "Your friend tells you about an investment that is 'guaranteed' to return 20%.",

        choices: [

            {
                text: "Invest $1,000 immediately",

                cash: -1000,
                investments: 1000,

                knowledge: -5,

                transaction: "Investment transfer",

                transfer: {
                    from: "Cash",
                    to: "Investments",
                    amount: 1000
                }
            },


            {
                text: "Research it first",

                knowledge: 10,

                transaction: null
            },


            {
                text: "Ignore it",

                knowledge: 3,

                transaction: null
            }

        ]
    }

];
