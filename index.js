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
    throw "All arguments must be numbers.";
  return c.reduce((a, b) => a + b);
}

// hey there, my name is Jennifer and i am 6'2 🤓

fn(1, 2, 3); //> 6
fn(10, "B", 20); //> error All arguments must be numbers.
