const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (parseFloat(sampleActivity) > 0 && parseFloat(sampleActivity) < 15 && typeof(sampleActivity) == 'string'){
    sampleActivity = parseFloat(sampleActivity);
    let ratio = MODERN_ACTIVITY / sampleActivity;
    let k = 0.693 / HALF_LIFE_PERIOD;
    let t = Math.ceil(Math.log(ratio) / k);
    return t;
  }
  return false;
}