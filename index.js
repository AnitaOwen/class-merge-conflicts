function createPerson(name, age) {
    return {
      name,
      age,
      friends: [],
    };
  }
  
  function addPersonAsFriend(personOne, friend) {
    person.friends.push(friend);
    return personOne;
  }
  
