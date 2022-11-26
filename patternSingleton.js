// Pattern Singleton


let instance = null
function CreateUser(name, age) {
    if (instance) {
        return instance
    }

    instance = this
    this.name = name
    this.age = age

    return instance
}

let user = new CreateUser('Slava', '24') // CreateUser { name: 'Slava', age: '24' }
console.log(user);
let user2 = new CreateUser('Dema', '25') // CreateUser { name: 'Slava', age: '24' }
console.log(user2);

