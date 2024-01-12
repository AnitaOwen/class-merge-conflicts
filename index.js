function createPerson(name, age) {
    return {
      name,
      age,
      friends: [],
    };
  }
  
  function addPersonAsFriend(personOne, friend) {
    personOne.friends.push(friend);
    return personOne;
  }
  
  function fn(...x) {
    if (!x.every((y) => Number.isNumber(y)))
      throw "All arguments must be numbers.";
    return x.reduce((y, e) => y + e);
  }
  
  fn(1, 2, 3); //> 6
  fn(10, "B", 20); //> error All arguments must be numbers.