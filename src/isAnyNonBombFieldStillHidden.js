
function isAnyNonBombFieldStillHidden(aknamezo) {

    var x1 = 0;
    aknamezo.forEach(function (row){
        x1 += row.filter(function (item) {

            return item < 0 && item > -12;

        }).length;

    });


    return x1 == 0;

};



exports.isAnyNonBombFieldStillHidden = isAnyNonBombFieldStillHidden;
