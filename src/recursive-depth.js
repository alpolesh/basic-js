module.exports = class DepthCalculator{
    calculateDepth(arr) {
        let depth = 0;
        arr.forEach(item => {
            if (Array.isArray(item)){
            depth = Math.max(this.calculateDepth(item), depth);
           }
        })
        return depth + 1;
    }
};