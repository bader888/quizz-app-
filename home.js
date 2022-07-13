// get father of all ele ; 
let father = document.querySelector('main')

// get the play game btn ; 
let play = document.querySelector('.play');

// get the question number ; 
let qnumber = document.querySelector('.qnumber');

// get the score number ; 
let score = document.querySelector('.score');

// get parent of all answer
let answerFather = document.querySelector('.answer');

// get all answer  ; 
// let answer = Array.from(document.querySelectorAll('.answer span'));

// get the question ;
let question = document.querySelector('.question p ');

// get container of all question ;
let questionContainer = document.getElementById('question');

// get the nextbtn ; 
let nextbtn = document.querySelector('.nextbtn');

// get the end section; 
let end = document.getElementById('end');

// get play Again btn 
let playAgain = document.querySelector('#playAgain')

// get the input 
let names = document.querySelector('#text')

// get the save btn  
let save = document.querySelector('#save')

// get yourScore text 
let yourScore = document.querySelector('#yourScore');



// global value
let global = 0;




// set all questions
let questionObjct =
    [['عدد سكان العالم', 'one'],
    ['عدد الايام في الاسبوع', 'two'],
    ['ما اسم اطول رجل في العالم', 'two'],
    ['اجمل فاكهه في العالم حسب تصنيف البي بي سي', 'two'],
    ['اجمل شاب بالعالم بسنه الفين الفين حسب صحيفه ناشونالبيتنه', 'one']]

// set all answers 
let allAnswerObject =
    [['مليار 7.753  ', 'عشر اشخاص'],
    [13, 7],
    ['يونس محمود', 'يو مي ماو'],
    ['العنب', 'الموز'],
    ['انا', 'انت']]
answerFather.innerHTML = `

<span data-asnwer="one">${allAnswerObject[0][0]}</span>
<span data-asnwer="two">${allAnswerObject[0][1]}</span>
`
// get all answer  ; 
let answer = Array.from(document.querySelectorAll('.answer span'));
// let answer = Array.from(document.querySelectorAll('.answer span'));


// set first question in paragrph
question.innerHTML = questionObjct[0][0]



// add the click event on all answer 
answer.forEach((e) => {
    e.addEventListener('click', () => {
        choseAnswer(e)
    })
})


// ==================================================// function to scroll down to next section of the game===================================
function down() {
    father.style.height = '1700px'

    window.scrollTo(0, 844);

    if (window.scrollY >= 843) {

        questionContainer.classList.remove('hideallquestion')
    }
}
// ==================================================/// function to change the question=====================================================

function nextQues() {
    global += 1
    if (global <= 4) {
        // change the question
        question.textContent = questionObjct[global][0]

        // change the question number
        qnumber.innerHTML = `${global + 1}/5`
    }

    if (global > 4) {
        father.style.height = '2500px'
        window.scrollTo(0, 1600);

        if (window.scrollY == 1600) {

            end.classList.remove('end')
        }
    }
    // ================================================= insert all answer inside the asnwer div =====================================================
    answerFather.innerHTML = `
<span onclick="choseAnswer(answer)" data-asnwer="one">${allAnswerObject[global][0]}</span>
<span onclick="choseAnswer(answer)" data-asnwer="two">${allAnswerObject[global][1]}</span>
`
    let answer = Array.from(document.querySelectorAll('.answer span'));
    answer.forEach((e) => {
        e.addEventListener('click', () => {
            choseAnswer(e)
        })
    })

    // remove the false and true classes from the asnwer ; 
    answer.forEach((e) => {
        e.classList.remove('true')
        e.classList.remove('false')
    })
}
// ================================================= function to chose the answer=====================================================

function choseAnswer(answer) {
    // get the answer mark
    console.log(answer.dataset.asnwer)
    let Amark = answer.dataset.asnwer;

    // get the question mark
    let Qmark = questionObjct[global][1];


    // comarsion
    if (Amark === Qmark) {
        answer.classList.add('true')
        score.innerHTML = `${(global + 1) * 10}`

        yourScore.innerHTML = `${(global + 1) * 10}`

    } else {
        answer.classList.add('false')
    }
    setTimeout((e) => {
        nextbtn.click()

    }, 300)
}

function Again() {
    answerFather.innerHTML = `
<span data-asnwer="one">${allAnswerObject[0][0]}</span>
<span data-asnwer="two">${allAnswerObject[0][1]}</span>


`
    question.innerHTML = questionObjct[0][0]

    global = 0

    window.scrollTo(0, 750)

    score.innerHTML = 0

    yourScore.innerHTML = 0

    qnumber.innerHTML = '1/5'

    answer = Array.from(document.querySelectorAll('.answer span'));
    answer.forEach((e) => {
        e.addEventListener('click', () => {
            choseAnswer(e)
        })
    })
}


