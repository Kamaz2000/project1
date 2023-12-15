const winner = document.getElementById("winner");/*Получаем элимент с id winner c HTML файла*/
const cells = document.querySelectorAll(".cell");/*Получаем элимент с классом cell(клетка) c HTML файла*/

const turnInfo = document.getElementById("turn-info");/*Получаем элимент с id turn-info c HTML файла*/


const players = {
    x: "x",
    O: "o",
}/*обьявляем обьект с элементами игракао X и 0*/    /**/
let currentPlayer = "";/*Текуший игрок*/
let isGameRunning = false;
let boardState = Array(9).fill("");/*Создаем массв из 9 элементов и заполняем его пустыми строками*/
const winLines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [0, 4, 8],
];/*Перечисляем все возможные варианты победы*/

function initializeGame() {
    cells.forEach(cell => {
        cell.addEventListener("click", clickCell);
    });/*Для каждой клетки подключакм слушатель на нажаите на клетку*/
   
}


function startGame() { 
    isGameRunning = true;/*Запускаем игру*/
    currentPlayer = players.x;/*Игру начинает Х*/
    turnInfo.textContent = `Ходят ${currentPlayer} `;/*Выводим чей сейчас ход*/
}


function clickCell() {/*После каждого нажатия на клетку*/
    if(!isGameRunning) {/*проверяем запушенна ли игра*/
        return;
    }
    if(this.textContent) { /*Если в нажатой клетке уже что то есть,то выходим из функции*/
        return;
    }
    this.textContent = currentPlayer;/*Рисуем в нажатой клетке Х или 0*/ 
    const cellIndex = this.dataset.cellIndex;/*получем индекс той ячейки на которую нажали */
    boardState[cellIndex] = currentPlayer;/*В массив по индексу той ячейки записываем Х или 0*/
    if (checkGameOver()){ /* проверяем не законьчилась ли игра*/
        return finishGame();
    }
    
    currentPlayer = (currentPlayer === players.x) ? players.O : players.x;/*Меняем X и 0*/
    turnInfo.textContent = `Ходят ${currentPlayer}`;
}

function checkLine(line) {
    const [a, b, c] = line;/*обьявляем линию*/

    const cellA = boardState[a];/*получаем значения в каждой клетке*/
    const cellB = boardState[b];
    const cellC = boardState[c];

    if([cellA, cellB, cellC].includes("")) {/*Проверяем что в линии не содержатся пустые строки*/
        return false;
    }
    return cellA === cellB && cellB === cellC;/*если значения во всех 3 клетках одинаковое*/
}


function checkGameOver() {
    for(const line of winLines) {
        if(checkLine(line)) {/*определяем победителя*/
            winner.textContent = `${currentPlayer} Победил !!!`;/*выводим победителя*/
            return true;
        }
    }
    if(!boardState.includes("")) {/*если не осталось пустых строк и победтель не выявился-ничья*/
        winner.textContent = "Ничья!";
        return true;
    }
}

function finishGame() {
    isGameRunning = false;
    turnInfo.textContent = "";/*Завершаем игру*/
}


/*function restartGame() {*
    finishGame();
    startGame();*/
    


window.addEventListener("load", () => {
    initializeGame();
    startGame();
   
});/*подключаем слушатель на окно кагда страница полностью прогрудена*/

