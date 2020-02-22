function createDreamTeam(members) {
  let arr = [];
  if (Array.isArray(members)){
      members.forEach((item) => {
        if (typeof(item) === 'string'){
          arr.push(item.trim()[0]);
        }
      })
      let str = arr.join('').toUpperCase();
      arr = str.split('');
      return arr.sort().join('');
  }
return false;
}

module.exports = createDreamTeam;