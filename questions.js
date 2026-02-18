// Splendid's Academy Central Question Bank
// format: courseCode -> difficulty -> questions

const QUESTION_VAULT = {
    "ANA 211": {
        beginner: [
            { q: "The bone of the arm is called the:", options: ["Radius", "Ulna", "Humerus", "Scapula"], a: 2 },
            { q: "Which bone is located on the thumb side of the forearm?", options: ["Ulna", "Radius", "Humerus", "Clavicle"], a: 1 },
            { q: "The collarbone is anatomically known as the:", options: ["Sternum", "Scapula", "Clavicle", "Vertebra"], a: 2 },
            { q: "The shoulder joint is an example of a:", options: ["Hinge joint", "Ball and socket joint", "Pivot joint", "Saddle joint"], a: 1 },
            { q: "How many carpal bones are in the wrist?", options: ["5", "7", "8", "10"], a: 2 },
            { q: "The elbow joint is primarily a:", options: ["Ball and socket joint", "Hinge joint", "Gliding joint", "Pivot joint"], a: 1 },
            { q: "Which bone forms the point of the elbow?", options: ["Radius", "Humerus", "Ulna", "Scapula"], a: 2 },
            { q: "The glenoid cavity is a feature of the:", options: ["Humerus", "Clavicle", "Scapula", "Sternum"], a: 2 },
            { q: "Which phalanges are found in the thumb?", options: ["Proximal, Middle, Distal", "Proximal and Distal only", "Middle and Distal only", "Proximal only"], a: 1 },
            { q: "The metacarpals are found in the:", options: ["Wrist", "Palm", "Fingers", "Forearm"], a: 1 },
            // ... (Paste the rest of your ANA 211 Beginner questions here)
        ],
        intermediate: [
             // ... (Paste your ANA 211 Intermediate questions here)
             { q: "Which muscle initiates the first 15 degrees of arm abduction?", options: ["Deltoid", "Supraspinatus", "Infraspinatus", "Subscapularis"], a: 1 },
             // ...
        ],
        advanced: [
             // ... (Paste your ANA 211 Advanced questions here)
             { q: "Erb-Duchenne palsy ('Waiter's Tip' hand) results from injury to:", options: ["Lower trunk (C8-T1)", "Upper trunk (C5-C6)", "Posterior cord", "Long thoracic nerve"], a: 1 },
             // ...
        ]
    },
    
    // FUTURE COURSES (Just add them like this later)
    "PHS 213": {
        beginner: [
            { q: "The powerhouse of the cell is:", options: ["Nucleus", "Mitochondria", "Ribosome", "Golgi"], a: 1 }
        ]
    }
};
