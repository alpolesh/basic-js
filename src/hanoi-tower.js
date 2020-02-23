 function calculateHanoi(disksNumber, turnsSpeed) {
    let obj = {};
    let turn = Math.pow(2, disksNumber) - 1;
    let second = turn / (turnsSpeed / 3600);
    obj['turns'] = turn;
    obj['seconds']= second;
    return obj;
}

module.exports = calculateHanoi;