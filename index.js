console.log("This is my first Javascript")
 

//Dictionaries
let person = {
    "name": "Jerome",
    "age": 20,
    "home": "Nairobi"
}

console.log(person.name)
console.log(person.age)

console.log("Name: ",person["name"])
console.log("Age: ",person["age"])
console.log("Home area: ",person["home"])

//Array
let shoppinglist = ['apple','bread','milk',74]
//using indexing
console.log("Item 1: ", shoppinglist[0])
//looping through array
for(let i=0;i<shoppinglist.length;i++){
    console.log("Item",shoppinglist[i])
}