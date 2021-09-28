//const and let *//

//*const person = {
 //   name:'Youg'
//}

//person.name = 'Oliver'

//console.log(person)
//-----------------

//for(var i = 0;i <10; i++){
  //  console.log(i)
//}

//*Array*//

//const numbers = [1,2,3,4,5]

//const newNumbers = numbers.map(function(number){
    // return number + 1
//}
//)

//console.log(newNumbers)
//console.log(numbers)
//-----------------------------
//const numbers = [1, 2, 3, 4, 5]

//const total = numbers.reduce(function(total, next){
 // return total + next

//})

//console.log(total)
//------------------------------------

//const todos = [
  //{text: 'lavar a louça', done:false},
  //{text: 'apanhar o lixo', done:true},
  //{text: 'dobrar as roupas', done:true},
//]

//const doneTodos = todos.filter(function(todo){
  //  return todo.done 
//})

//console.log(doneTodos)

//------------------------

//const todos = [
  //{text: 'lavar a louça', done:false},
  //{text: 'apanhar o lixo', done:true},
  //{text: 'dobrar as roupas', done:true},
//]

//const final = todos.find(function(todo){
  //  return todo.text == 'dobrar as roupas'
//})

//console.log(final)
//------------------------
//const todos = [
 // {text: 'lavar a louça', done:false},
  //{text: 'apanhar o lixo', done:true},
  //{text: 'dobrar as roupas', done:true},
//]

//const index = todos.findIndex(function(todo){
  //  return todo.text == 'lavar a louça'
//})

//console.log(index)

//-------------------------

const cars =['fusca', 'civic', 'hb20']

const hasFusca = cars.some(function(car) => {
    return car == 'fusca'
})

console.log(hasFusca)

//------------
//*Arrow Functions
 