//this
const person = {
    name: "Sathya",
    walk() {
        console.log(this);
    }
}

person.walk(); //this points to person object

const walk = person.walk
walk()   //this points to window which is undefined here


//bind function to object
const walk1 = person.walk.bind(person);
walk1()   // here this points to person object

//arrow functions
const square = number => number * number

const man = {
    talk() {
        setTimeout(function(){
            console.log("this", this) //this don't point to man object
        }, 1000)
    }
}
const man1 = {
    talk() {
        setTimeout(() => {
            console.log("this", this) //this points to man1 object
        }, 1000)
    }
}

//array map method
const colors = ['red', 'green', 'blue']
const items = colors.map(color => `<li>${color}</li>`)
console.log(items)

//Object destructuring
const address = {
    street: '',
    city: '',
    country: ''
}

const { street, city, country } = address;
const { street: st } = address;

//Spread operator
const first = [1, 2, 3];
const second = [4, 5, 6]
const combined = [...first, 'a', ...second, 8]
const clone = [...first]

const first1 = { name: 'Sathya' }
const second = { job: 'Instructor'};
const combined = {...first, ...second, location: 'India'};

//Class
const person = {
    name: 'Sathya',
    walk() {
        console.log('walk');
    }
}

class Person {
    constructor(name) {
        this.name = name;
    }
    walk() {
        console.log('walk');
    }
}

const person2 = new Person('Sathya');

//inheritance
class Teacher extends Person{
    constructor(name, degree) {
        super(name);
        this.degree = degree;
    }
    teach() {
        console.log('teach')
    }
}

const teacher = new Teacher('sathya', 'BTech');

