isEmpty = (str) => {
  return (typeof str === "undefined" || str === null || str ===  "") ? false : true;
}

minLength = (str,count) => {
  return (count <= str.length) ? false: true;
}

maxLength = (str,count) => {
  return (count => str.length) ? false: true;
}


module.exports = {
  isEmpty: isEmpty,
  minLength: minLength,
  maxLength: maxLength,
};
