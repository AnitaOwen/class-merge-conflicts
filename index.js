function createPerson(name, age, hobby) {
    return {
      name,
      age,
      friends: [],
      hobby: "",
    };
  }
  
  function addPersonAsFriend(personOne, friend) {
    personOne.friends.push(friend);
    return personOne;
  }
  
  function fn(...c) {
    if (!c.every((a) => Number.isNumber(a)))
      throw "Please use numbers only.";
    return c.reduce((a, b) => a + b);
  }
  
  fn(1, 2, 3); //> 6
  fn(10, "B", 20); //> error All arguments must be numbers.