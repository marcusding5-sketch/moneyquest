const events = [

    {
        title: "The New Phone 📱",

        description:
            "Your phone still works, but everyone seems to have the latest model. What do you do?",

        choices: [

            {
                text: "Buy it for $1,400",
                cash: -1400,
                happiness: 10,
                knowledge: 0
            },

            {
                text: "Use Buy Now Pay Later",
                cash: 0,
                debt: 1400,
                happiness: 10,
                knowledge: 0
            },

            {
                text: "Keep your current phone",
                cash: 0,
                happiness: -2,
                knowledge: 5
            }

        ]

    },


    {
        title: "Emergency! 💻",

        description:
            "Your laptop suddenly stops working and you need one for school.",

        choices: [

            {
                text: "Buy a new laptop — $1,300",
                cash: -1300,
                happiness: 5
            },

            {
                text: "Buy refurbished — $650",
                cash: -650,
                happiness: 2,
                knowledge: 3
            },

            {
                text: "Put it on your credit card",
                debt: 1300,
                happiness: 5
            }

        ]

    },


    {
        title: "Investment Opportunity 📈",

        description:
            "Your friend tells you about an investment that is 'guaranteed' to return 20%.",

        choices: [

            {
                text: "Invest $1,000 immediately",
                cash: -1000,
                investments: 1000,
                knowledge: -5
            },

            {
                text: "Research it first",
                knowledge: 10
            },

            {
                text: "Ignore it",
                knowledge: 3
            }

        ]

    }

];
