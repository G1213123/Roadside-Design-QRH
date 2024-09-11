const questions = [
    {
        index: 0,
        question: "What type of Street Furniture is being designed?",
        choices: ["Kerbs", "Crash Barriers", "Railings", "Traffic Signs", "Signal Equipment", "Traffic Bollard"],
        followUp: [100,200,300,400,500]
    },
    {
        index: 100,
        question: "What is the adjoining road feature?",
        choices: ["Carriagewway to Footpath", "Carriageway to Verges", "Carriageway to Bridge Decks", "Cycle Track to Footpath", "Footpath To Boundary/Planter"],
        followUp: [101,102,103,104,105]
    },
    {   
        index: 101,
        question: "Is there a drop kerb presence?",
        choices: ["Yes - for pedestrian crossing", "Yes - for vehicular run-in", "No"],
        followUp: [111,112,113]
    },
    {   
        index: 102,
        answer: "K2 - Kerb",
    },
    {   
        index: 103,
        answer: "K3 - Kerb",
    },
    {   
        index: 104,
        answer: "E1 - Edge",
    },
    {   
        index: 105,
        answer: "E3 - Kerb",
    },
    {   
        index: 111,
        answer: "K10 to K14 - Kerb",
    },
    {   
        index: 112,
        answer: "K5 to K9 - Kerb",
    },
    {   
        index: 113,
        answer: "K1 - Kerb",
    },

];