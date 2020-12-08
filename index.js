// // destructuring 

// //object

// const person = {
//   name: `ironhacker`,
//   age: 25,
//   favoriteMusic: `metal`
// };

// // es5
// // const name = person.name;
// // const age = person.age;
// // const favoriteMusic = person.favoriteMusic;

// // person.country = `spain`;
// // es6

// // const {name, age, favoriteMusic, country = `spain`} = person;

// // const {name: fullName, age, favoriteMusic, country = `spain`} = person;

// // console.log(fullName);

// // nested objects
// const person2 = {
//   name: `ironhacker`,
//   age: 25,
//   favoriteMusic: `metal`,
//   address: {
//     street: `super cool st`,
//     number: 123,
//     city: `miami`
//   }
// };

// // es5 

// console.log(person2.address.street);
// const {name, age, favoriteMusic, address: {street, number, city}} = person2;

// console.log(`${name} lives in ${number} ${street}, city of ${city}`);
 
// ------------------------------------------
// Given the object 'data', use the object destructuring to be able 
// to print student first and last name, favorite football club, 
// as well as the city and the country this student is coming from.

const data = {
    name: {
      firstName: 'ana',
      lastName: 'marino',
    },
    isStudent: true,
    favoriteFootballTeam: 'fc barcelona',
    hometown: {
      city: 'buenos aires',
      country: 'argentina',
    },
  };
  
  const {name: {firstName, lastName}, isStudent, favoriteFootballTeam, hometown: {city, country}} = data;
  
  console.log(`${firstName} ${lastName}'s favorite football team is ${favoriteFootballTeam} and she is from ${city},${country}.`)

  // arrays

//es5
const campuses = [`madrid`, `barcelona`, `miami`];

// const firstCampus = campuses[0];
// console.log(firstCampus);

const [firstCampus, secondCampus, thirdCampus] = campuses;

console.log(firstCampus, secondCampus, thirdCampus);

//nested arrays

const europeanCampuses = [
  [`madrid`, `es`],
  [`barcelona`, `es`],
  [`berlin`, `de`],
  [`paris`, `fr`],
]

const [
  [campusSpain1],
  [campusSpain2, country],
  [campus3, theCountry]
] = europeanCampuses;

console.log(campusSpain1, campusSpain2, campus3);

// mixed objects and arrays

const customer = {
  name: {
    firstName: `ivan`,
    lastName: `zoro`
  },
  age: 32,
  preferences : [
    {
      tech: [`cameras`, `smartwatches`],
      books: [`science fiction`, `coding`]
    }
  ]
}

const {
  name: {firstName, lastName},
  age,
  preferences : [{tech: technology, books: literature}],
}= customer;

console.log(firstName, lastName, age);
console.log(technology, literature);