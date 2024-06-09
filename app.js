let balls = 0;
let score = document.getElementById('scorePara');
let totScr1 = 0;
let totScr2 = 0;
let totWk = 0;
let totOver = 1;
let dt = document.getElementById("0");
let oneBtn = document.getElementById("1");
let twoBtn = document.getElementById("2");
let threeBtn = document.getElementById("3");
let fourBtn = document.getElementById("4");
let fiveBtn = document.getElementById("5");
let sixBtn = document.getElementById("6");
let WkBtn = document.getElementById("w");
let wdBtn = document.getElementById("wd");
let nbBtn = document.getElementById("nb");
let ni = document.getElementById("ni");
let trgtPara = document.getElementById('trgt');
let nextOver = document.getElementById('nxto');
let totalScore = document.getElementById('totscr');
let inning = 1;
let secondInning = false;

totalScore.innerHTML = `Total score: ${totScr1} in ${totWk} wickets`;

ni.disabled = true;
nextOver.disabled = true;

let disableBtn = () => {
    oneBtn.disabled = true;
    twoBtn.disabled = true;
    threeBtn.disabled = true;
    fourBtn.disabled = true;
    fiveBtn.disabled = true;
    sixBtn.disabled = true;
    WkBtn.disabled = true;
    wdBtn.disabled = true;
    nbBtn.disabled = true;
    dt.disabled = true;
};

let enableBtn = () => {
    oneBtn.disabled = false;
    twoBtn.disabled = false;
    threeBtn.disabled = false;
    fourBtn.disabled = false;
    fiveBtn.disabled = false;
    sixBtn.disabled = false;
    WkBtn.disabled = false;
    wdBtn.disabled = false;
    nbBtn.disabled = false;
    dt.disabled = false;
};

let updateScore = () => {
    if (!secondInning) {
        totalScore.innerHTML = `Total score: ${totScr1} in ${totWk} wickets`;
    } else {
        totalScore.innerHTML = `Total score: ${totScr2} in ${totWk} wickets`;
    }
};

let checkEndOfOver = () => {
    if (balls === 6) {
        nextOver.disabled = false;
        disableBtn();
    }
};

let checkEndOfInning = () => {
    if (totWk === 10 || (totOver === 6 && balls === 0)) {
        nextOver.disabled = true;
        disableBtn();
        ni.disabled = false;
        if (secondInning) {
            if (totScr2 > totScr1) {
                trgtPara.innerHTML = 'Team 2 Won The Match';
            } else if (totScr2 < totScr1) {
                trgtPara.innerHTML = 'Team 1 Won The Match';
            } else {
                trgtPara.innerHTML = 'The Match is a Tie';
            }
        }
    }
};

let oneRun = () => {
    if (totWk < 10 && totOver <= 6) {
        balls += 1;
        score.innerHTML += '(1)-';
        if (!secondInning) {
            totScr1 += 1;
        } else {
            totScr2 += 1;
        }
        updateScore();
        checkEndOfOver();
    }
};

let twoRun = () => {
    if (totWk < 10 && totOver <= 6) {
        balls += 1;
        score.innerHTML += '(2)-';
        if (!secondInning) {
            totScr1 += 2;
        } else {
            totScr2 += 2;
        }
        updateScore();
        checkEndOfOver();
    }
};

let threeRun = () => {
    if (totWk < 10 && totOver <= 6) {
        balls += 1;
        score.innerHTML += '(3)-';
        if (!secondInning) {
            totScr1 += 3;
        } else {
            totScr2 += 3;
        }
        updateScore();
        checkEndOfOver();
    }
};

let fourRun = () => {
    if (totWk < 10 && totOver <= 6) {
        balls += 1;
        score.innerHTML += '(4)-';
        if (!secondInning) {
            totScr1 += 4;
        } else {
            totScr2 += 4;
        }
        updateScore();
        checkEndOfOver();
    }
};

let fiveRun = () => {
    if (totWk < 10 && totOver <= 6) {
        balls += 1;
        score.innerHTML += '(5)-';
        if (!secondInning) {
            totScr1 += 5;
        } else {
            totScr2 += 5;
        }
        updateScore();
        checkEndOfOver();
    }
};

let sixRun = () => {
    if (totWk < 10 && totOver <= 6) {
        balls += 1;
        score.innerHTML += '(6)-';
        if (!secondInning) {
            totScr1 += 6;
        } else {
            totScr2 += 6;
        }
        updateScore();
        checkEndOfOver();
    }
};

let Wicket = () => {
    if (totWk < 10 && totOver <= 6) {
        balls += 1;
        score.innerHTML += '(Wk)-';
        totWk += 1;
        updateScore();
        checkEndOfOver();
        checkEndOfInning();
    }
};

let Width = () => {
    if (totWk < 10 && totOver <= 6) {
        score.innerHTML += '(Wd)-';
        if (!secondInning) {
            totScr1 += 1;
        } else {
            totScr2 += 1;
        }
        updateScore();
    }
};

let noBall = () => {
    if (totWk < 10 && totOver <= 6) {
        score.innerHTML += '(NB)-';
        if (!secondInning) {
            totScr1 += 1;
        } else {
            totScr2 += 1;
        }
        updateScore();
    }
};

let dotBall = () => {
    if (totWk < 10 && totOver <= 6) {
        balls += 1;
        score.innerHTML += '(0)-';
        checkEndOfOver();
    }
};

let NextOver = () => {
    if (balls === 6 && totOver <= 5) {
        balls = 0;
        totOver += 1;
        score.innerHTML += '<br />';
        enableBtn();
        nextOver.disabled = true;
        checkEndOfInning();
    } else {
        alert('Over is not complete');
    }
};

let nextInning = () => {
    if (totWk === 10 || (totOver === 6 && balls === 0)) {
        secondInning = true;
        totWk = 0;
        totOver = 1;
        balls = 0;
        inning++;
        score.innerHTML = '';
        totalScore.innerHTML = 'Total Score:';
        disableBtn();
        if (inning <= 2) {
            trgtPara.innerHTML = `Target: You Need ${totScr1 + 1} to win`;
            enableBtn();
            ni.disabled = true;
            nextOver.disabled = false;
        } else {
            console.log('finish');
            if (totScr1 > totScr2) {
                trgtPara.innerHTML = 'Team 1 Won The Match';
            } else {
                trgtPara.innerHTML = 'Team 2 Won The Match';
            }
        }
    } else {
        alert('Inning is not complete');
    }
};
