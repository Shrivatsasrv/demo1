console.log("hello");
//declaring and initialing Array
const team = ['virat', 'dhoni', 'Rohit', 'rahul', 'pant'];
console.log(team);// ['virat', 'dhoni', 'Rohit', 'rahul', 'pant']
// Accessing of Array 
const captain = team[2];
console.log(captain);//Rohit

//destructuring of Array
const [a, b, d, e, ...c] = team;
console.log(a, b, d, e, c);//virat dhoni Rohit rahul ['pant']

//length of array
console.log(team.length); //5

// datatype of array 
console.log(typeof (team));//object

//Accessing First and Last element of array
const viceCaptain = team[0];
const wicketKeeper = team[team.length - 1];
console.log(viceCaptain, wicketKeeper);//virat pant

//looping of array

text = '<ul>';
for (let i = 0; i < team.length; i++) {
    text += '<li>' + team[i] + '</li>'
}
text += '</ul>'

document.getElementById('demo').innerHTML = text;

console.log(text);

