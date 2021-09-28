/*const and let *

const person = {
    name:'Youg'
}

person.name = 'Oliver'

console.log(person)
-----------------

for(var i = 0;i <10; i++){
    console.log(i)
}

//*Array*

const numbers = [1,2,3,4,5]

const newNumbers = numbers.map(function(number){
     return number + 1
}
)

console.log(newNumbers)
console.log(numbers)
-----------------------------
const numbers = [1, 2, 3, 4, 5]

const total = numbers.reduce(function(total, next){
  return total + next

})

console.log(total)
------------------------------------

const todos = [
  {text: 'lavar a louça', done:false},
  {text: 'apanhar o lixo', done:true},
  {text: 'dobrar as roupas', done:true},
]

const doneTodos = todos.filter(function(todo){
    return todo.done 
})

console.log(doneTodos)

------------------------

const todos = [
  {text: 'lavar a louça', done:false},
  {text: 'apanhar o lixo', done:true},
  {text: 'dobrar as roupas', done:true},
]

const final = todos.find(function(todo){
    return todo.text == 'dobrar as roupas'
})

console.log(final)
------------------------
const todos = [
  {text: 'lavar a louça', done:false},
  {text: 'apanhar o lixo', done:true},
  {text: 'dobrar as roupas', done:true},
]

const index = todos.findIndex(function(todo){
    return todo.text == 'lavar a louça'
})

console.log(index)

-------------------------

const cars =['fusca', 'civic', 'hb20']

const hasFusca = cars.some(function(car) {
    //return car == 'fusca'
})

console.log(hasFusca)

---------------
//*Arrow Functions

const todos = [
  {text: 'lavar a louça', done:false},
  {text: 'apanhar o lixo', done:true},
  {text: 'dobrar as roupas', done:true},
]

const doneTodos = todos.filter((todo) => todo.done 
)

console.log(doneTodos)

---------------------

function anything ()  {
    console.log('Hello world')
}

---------------------------------
const anything  = ()  => ({mensagem:'Hello world'})

console.log(anything())

//*Parametro padrao

function  sayHello(name = 'Fulano')  {
    console.log('Olá' + name)
}

-------------------

const sayHello  = (name = 'Fulano')  => console.log('Olá' + name)

sayHello()

-----------------------------------

//*Template strings

const showProduct = (product, price) => {
console.log(`O valor de ${product} é R$ ${price} pode comprar`)
}

showProduct('camisa', 20.7)

------------------------

//*Object Short Syntax

const name = 'camisa'
const price = 20

const product = {
    name,
    price,
    inStock: true
}

console.log(product)

-----------------------------------

//*Desestruturação

const fruits = ['laranja', 'morango', 'maçã']

const [a, c]  = fruits

console.log(a, c)

--------------------

const person = {
  firstName: 'Yung',
  secondName: 'Silva',
  age: 23,
  address: {
    city: 'Recife',
    region: 'PE'
  }
}

const {firstName,  secondName,  address:  {city}}  = person

console.log(firstName,  secondName, city)

------------------------

const person = {
  firstName: 'Yung',
  secondName: 'Silva',
  age: 23,
  address: {
    city: 'Recife',
    region: 'PE'
  }
}

const showFullName = ({firstName, secondName}) =>  {
  console.log(`${firstName} ${secondName}`)

}

showFullName(person)

--------------------------
///*rest and spread

/rest/

const numbers = [1, 2, 3, 4, 5]

const [first, second, ...rest] = numbers 

console.log(rest)

-------------------------------

const person = {
  name: 'Yung',
  age: 23,
  height: 1.73,
  company: 'Catalina',
}

const {name, ...rest}  = person

console.log(rest)

---------------------------------

*/

const sum = (...params)  =>{
  return  params.reduce((total, next) => total  + next)
}

console.log(sum(5, 5, 10, 10))



