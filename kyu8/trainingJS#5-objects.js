// In javascript, Object is one of basic data types. Define an Object can use var obj=new Object() or var obj={}

// You can define the object attributes during initialization, like this:

// var animal={name:"dog"}
// you can also set/get some properties after the object definition, like this:

// var animal={}
// animal.name="dog"  (or animal["name"]="dog")
// Task
// Give you a function animal, accept 1 parameter:obj like this:

// {name:"dog",legs:4,color:"white"}
// and return a string like this:

// "This white dog has 4 legs."

function animal(obj){
    var dog = {};
    dog.name = "test";
    dog.legs = 4;
    return `This dog's name is ${dog.name} and has ${dog.legs} legs.`;
}  

function testing(n){
    var test = {}
    test.one = 'test';
    test.two = '2'
    console.log(`${test.one} and ${test.two}`)
}
testing();

function get(n){
    
}