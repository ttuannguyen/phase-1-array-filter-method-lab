const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(driversArray, str) {
    return driversArray.filter(name => name.toLowerCase() === str.toLowerCase());
}
// let result = findMatching(drivers, 'Bobby');
// console.log(result); // => ['Bobby', 'Bobby']

function fuzzyMatch(driversArray, str) {
    return driversArray.filter(element => element[0].toLowerCase() === str[0].toLowerCase() );
}  
// let result2 = fuzzyMatch(drivers, 's')
// console.log(result2); // => [ 'Sammy', 'Sally', 'Sarah' ]

const driverObjects = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
];

// let test = driverObjects[0].name;
// console.log(test);

function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name);
}
result3 = matchName(driverObjects, 'Bobby');
console.log(result3);









