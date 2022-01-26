const Tuple = function () {
  const typeInfo = Array.prototype.slice.call(arguments, 0);
  const _T = function () {
      const values = Array.prototype.slice.call(arguments, 0);
      
      if (values.some((val) => val === null || val === undefined)) {
           throw new ReferenceError('Tuples may not have any null values');
      }   

      if (values.length !== typeInfo.length) {
          throw new TypeErro('Tuple arity does not match its prototype');
      }

      values.map(function (val, index) {
          this['_' + (index + 1)] = checkType(typeInfo[index])(val);
      }, this);

      Object.freeze(this); 
  };

  _T.prototype.values = function () {
      return Object.keys(this).map(function (k) {
          return this[k];
      })
  }
  
  return _T;
}

module.exports = Tuple