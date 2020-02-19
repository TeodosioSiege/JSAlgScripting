var Person = function(firstAndLast) {
  // Complete the method below and implement the others similarly
  this.getFirstName = function() {
    let arr = this.getFullName().split(" ");
    return arr[0];
  };
  this.getLastName = function() {
    let arr = this.getFullName().split(" ");
    return arr[1];
  };
  this.getFullName = function() {
    return firstAndLast;
  };
  this.setFirstName = function(first) {
    let arr = this.getFullName().split(" ");
    arr[0] = first;
    firstAndLast = arr.join(" ");
  };
  this.setLastName = function(last) {
    let arr = this.getFullName().split(" ");
    arr[1] = last;
    firstAndLast = arr.join(" ");
  };
  this.setFullName = function(newfirstAndLast) {
    firstAndLast = newfirstAndLast;
  };
  return firstAndLast;
};

var bob = new Person("Bob Ross");
bob.getFullName();
console.log(bob.getFirstName());
