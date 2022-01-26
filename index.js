const arityError = 'Tuple arity does not match its prototype'
const nullError = 'Tuples may not have any null values'

const newError = error => {throw new Error(error)}

module.exports = function () {
  const typeInfo = Array.prototype.slice.call(arguments, 0);
  const T = function () {
    const values = Array.prototype.slice.call(arguments, 0);

    if (values.some((val) => val === null || val === undefined)) newError(nullError) 
    if (values.length !== typeInfo.length) newError(arityError)
  
    values.map((val, index) => {
      this[(index)] = typeInfo[index](val);
    }, this);
  
    Object.freeze(this); 
  };
  
  T.prototype.values = () => {
    return Object.keys(this).map(function (k) {
      return this[k];
    })
  }
  return T;
}