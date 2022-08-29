let name1={
    firstName:"Akshay",
    lastName:"kumar",
    getFullName:function(prefix,sufix){
        return prefix+" "+ this.firstName+" "+this.lastName+" "+sufix
    }

};
let name2={
    firstName:"Anjali",
    lastName:"Malviya"
}
console.log(name1.getFullName())

//  bind method
// let newfunction=name1.getFullName.bind(name2)
// console.log(newfunction())

// call method
//  console.log(name1.getFullName.call(name2,"miss.","jr."))

// apply method
// console.log(name1.getFullName.apply(name2,["miss.","jr."]))



