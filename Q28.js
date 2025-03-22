class Car {
    constructor(name ,age){
        this.name = name,
        this.age = age
    }
    add(){
        console.log("This is man " +  this.age) 
       }
}

let car1 = new Car("ali" ,12)
car1.add()