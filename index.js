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
  
