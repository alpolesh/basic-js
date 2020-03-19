function getSeason(date) {
  if(date == undefined){
    return 'Unable to determine the time of year!';
  }
  if(Object.prototype.toString.call(date) !== '[object Date]'){
    throw new Error;
  }

  let time = {
    0: "winter",
    1: "winter",
    2: "spring",
    3: "spring",
    4: "spring",
    5: "summer",
    6: "summer",
    7: "summer",
    8: "autumn",
    9: "autumn",
    10: "autumn",
    11: "winter"
  }
  let month = date.getMonth();
  return time[month];
};
console.log(getSeason(new Date(1908, 2, 30, 14, 23, 26, 831)));
module.exports = getSeason;