var obj1 = { name: "Person 1", age:5 };
var obj2 = { age:5, name: "Person 1" };

var equalOrNot = (obj1,obj2)=>{
    key1 = Object.keys(obj1);
    key2 = Object.keys(obj2);
    return key1.length==key2.length;
}

console.log("Both Obj1 and Obj2 are "+ equalOrNot(obj1,obj2));