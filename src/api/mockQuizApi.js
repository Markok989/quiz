import delay from './delay';

// sadrzaj kviza (niz)
const quizzes = [
    {
        "id": "_8j5exvrot",
        "title": "Vezba",
        "questions": [
            {
                "id": "_uosfpm4cn",
                "question": "What are the three types of JavaScript errors?",
                "answers": [
                    {
                        "questionId": "_uosfpm4cn",
                        "id": "_go2o9zllu",
                        "label": "Parse Errors, Syntax Errors and Runtime Errors.",
                        "isTrue": true
                    },
                    {
                        "questionId": "_uosfpm4cn",
                        "id": "_5fok3c5qu",
                        "label": "Loading Errors, Runtime Errors and Logic Errors.",
                        "isTrue": false
                    },
                    {
                        "questionId": "_uosfpm4cn",
                        "id": "_xgipqeuom",
                        "label": "Syntax Errors, Logic Errors and Loading Errors.",
                        "isTrue": false
                    },
                    {
                        "questionId": "_uosfpm4cn",
                        "id": "_xgtpqeuom",
                        "label": "Bad Errors, Very Bad Errors, and Fatal Errors.",
                        "isTrue": false
                    }
                ]
            },
            {
                "id": "_w42zns8r3",
                "question": "What does the bind method do?",
                "answers": [
                    {
                        "questionId": "_w42zns8r3",
                        "id": "_cvkcit0xl",
                        "label": "Returns a function that, when executed, will call the original function with a THIS context that you pass in.",
                        "isTrue": false
                    },
                    {
                        "questionId": "_w42zns8r3",
                        "id": "_jri4o0dyh",
                        "label": "Prevents the value of this from being overridden by call() or apply().",
                        "isTrue": false
                    },
                    {
                        "questionId": "_w42zns8r3",
                        "id": "_jri4o0dyh",
                        "label": "Allows you to implement partial application of a function.",
                        "isTrue": true
                    },
                    {
                        "questionId": "_w42zns8r3",
                        "id": "_jyi4o0dyh",
                        "label": "All of the above.",
                        "isTrue": false
                    }
                ]
            },
            {
                "id": "_5zcjdxk15",
                "question": "In React, what method is used to change state?",
                "answers": [
                    {
                        "questionId": "_5zcjdxk15",
                        "id": "_x0jxcrk7k",
                        "label": "changeState()",
                        "isTrue": false
                    },
                    {
                        "questionId": "_5zcjdxk15",
                        "id": "_apqsifxh2",
                        "label": "onChange()",
                        "isTrue": true
                    },
                    {
                        "questionId": "_5zcjdxk15",
                        "id": "_apqsifxh2",
                        "label": "setState()",
                        "isTrue": false
                    },
                    {
                        "questionId": "_5zcjdxk15",
                        "id": "_apqsifxh2",
                        "label": "stateSet()",
                        "isTrue": false
                    }
                ]
            }
        ]
    }
];

// f-ja replaceAll koja se primenjuje u metodi generateId
function replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace);
}

// meoda generateId, pristupa quiz vrsi zamenu naslova
const generateId = (quiz) => {
    return (
        replaceAll(quiz.title, ' ', '-')
    );
};

// Klasa QuizAPI, vraca novi Promise, tako sto vraca novo (klonirani) kreirani objekat, sa zakasnjenjem (delay)
class QuizAPI {
    static getAllQuizzes() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Object.assign([], quizzes));
            }, delay);
        });
    }


    // metoda saveQuiz, za snimanje kviza, uslov ako Title kviza ima manje od jednog slova, izbacuje poruku sa greskom
    static saveQuiz(quiz) {
        quiz = Object.assign({}, quiz); // to avoid manipulating object passed in.
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const minQuizTitleLength = 1;
                if (quiz.title.length < minQuizTitleLength) {
                    reject(`Title must be at least ${minQuizTitleLength} characters.`);
                }

                quizzes.push(quiz);
                resolve(quiz);
            }, delay);
        });
    }

}


export default QuizAPI;