
function updateCell (mineField) {

    let aknaMezo = document.querySelectorAll('#Aknamezo tr');

    var y = 0;

    aknaMezo.forEach(function (sorok) {

        let cellak = sorok.querySelectorAll('td');

        var x = 0;

        cellak.forEach(function (cell) {

            if (mineField[y][x] != 12 && mineField[y][x] > 0 && cell.innerText != mineField[y][x] - 1 &&
                cell.getAttribute('class') != 'visible') {

                cell.innerText = mineField[y][x] - 1;
                cell.classList.remove('sor-oszlop');
                cell.classList.add('visible');

            }
            else if (mineField[y][x] == 12) {

                cell.innerText = '¤';
                if (cell.getAttribute('class') == 'sor-oszlop') cell.classList.remove('sor-oszlop');
                else if (cell.getAttribute('class') == 'visible') cell.classList.remove('visible');

                cell.classList.add('predicted');

            }

            x++;

        });

        y++;

    });

    
    return mineField;

}



//exports.updateCell = updateCell;
