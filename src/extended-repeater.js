function repeater(str, options) {
    str = String(str);
    let arr = str.split();
    if (options.addition || options.addition == false || options.addition === null)  {
        arr[0] += options.addition;
        if (options.additionRepeatTimes){
            for (let i = 1; i < options.additionRepeatTimes; i++){
                if (options.additionSeparator){
                    arr[0] += options.additionSeparator + options.addition;
                }
                else {
                    arr[0] += '|' + options.addition;
                }
            }
        }
    }
    if (options.repeatTimes){
        for (let i = 1; i < options.repeatTimes; i++){
            if (options.separator){
                arr.push(options.separator);
                arr.push(arr[0]);    
            }
            else {
                arr.push("+");
                arr.push(arr[0]); 
            }
        }
    }    
    
    return arr.join('');
};
  
console.log(repeater('la', { repeatTimes: 3 }));
module.exports = repeater;