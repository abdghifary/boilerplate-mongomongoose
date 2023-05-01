require('dotenv').config();
const mySecret = process.env['MONGO_URI'];
const mongoose = require('mongoose');
const { Schema, Model } = require('mongoose');

const personSchema = new Schema({
  name: String,
  age: Number,
  favoriteFoods: [String],
});

const Person = mongoose.model('Person', personSchema);

mongoose.connect(
  mySecret,
  { useNewUrlParser: true, useUnifiedTopology: true },
  console.log('mongoDB is connected')
);

const createAndSavePerson = (done) => {
  const person = new Person({
    name: 'John',
    age: 25,
    favoriteFood: ['Pizza', 'Burger'],
  });

  person.save((err, data) => {
    if (err) return console.error(err);
    console.log(data);
    done(null, data);
  });
};

const createManyPeople = (arrayOfPeople, done) => {
  Person.create(arrayOfPeople, (err, data) => {
    if (err) return console.error(err);
    console.log(data);
    done(null, data);
  });
};

const findPeopleByName = (personName, done) => {
  Person.find({ name: personName }, (err, data) => {
    if (err) return console.error(err);
    console.log(data);
    done(null, data);
  });
};

const findOneByFood = (food, done) => {
  done(null /*, data*/);
};

const findPersonById = (personId, done) => {
  done(null /*, data*/);
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = 'hamburger';

  done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = 'Mary';

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = 'burrito';

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
