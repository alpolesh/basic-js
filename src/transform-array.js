function transform(arr) {
    let finalArr = [];
    if (Array.isArray(arr)){
        if(arr.length == 0){
            return arr;
        }
        else if(arr.includes("--discard-next") || arr.includes("--discard-prev") || arr.includes("--double-next") || arr.includes("--double-prev")){
            for (let i=0; i<arr.length; i++){
                if(arr[i] === "--discard-next"){
                    i++;
                }
                else if(arr[i] === "--discard-prev"){
                    finalArr.pop();
                }
                else if(arr[i] === "--double-next"){
                    if (i < arr.length - 1){
                        finalArr.push(arr[i+1]);
                    }
                }
                else if(arr[i] === "--double-prev"){
                    if (i > 0){
                        finalArr.push(arr[i-1]);
                    }
                }
                else {
                    finalArr.push(arr[i]);
                }
            }
            return finalArr;
        }
        else return arr;
    }
throw Error();
};

module.exports = transform;