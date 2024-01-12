function createPerson(name, age) {
    return {
      name,
      age,
      friends: [],
    };
  }
  
  function addPersonAsFriend(personA, goodFriend) {
    personA.friends.push(goodFriend);
    return personA;
  }
  
