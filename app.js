var user = {
    username:"Baya",
    login:"12345", 
    pasword: "123123"
}

/*1*/

var constructUser = new constructUser("Baya","Kadyrov","123123")

function constructUser(name,login,password) {
    this.username = name
    this.login = login
    this.password = password
}

console.log(constructUser);
/*2*/
var ggg = ["evgenii","vadim","EKATERINA","SoFya","mARIA","svetlana","alexey"]


console.log(ggg.map(function (name){
    var char1 = name.charAt(0).toUpperCase()
    var hustle = name.slice(1).toLowerCase()
    var we = char1 + hustle

    return we
}))

/*3*/
var mass = ["00101202215478","qwerty","125042000000258","79451789841256","21010199578143","01234567891234","249489","21702200214789"]
let newmass = []
function checkInn(mass){
    mass.filter(function (inn){
        if(inn.length===14 && (inn[0]==='0' || inn[0]==='1'||inn[0]==='2')){
            newmass.push(inn);
        }
    })
    return console.log(newmass)
}
checkInn(mass)


/*4*/

var mass3 = ["Evgenii","Vadim","Ekaterina","Sofya","Maria","Svetlana","Alexey"]

var mass3 = mass3.reduce(function (a,b){
    var biggie = a.length>b.length?a:b
    return biggie
})
console.log(mass3);