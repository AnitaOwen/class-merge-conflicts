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
  
  function fn(...c) {
    if (!c.every((a) => Number.isNumber(a)))
      throw "All arguments must be numbers, word em up yo!";
    return c.reduce((a, b) => a + b);
  }
  
  fn(1, 2, 3); //> 6
  fn(10, "B", 20); //> error All arguments must be numbers.