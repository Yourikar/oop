//Solid Design Principle (OOP နဲ႔ တဲြသံဳးတဲ့ Design Principle)

//OOP (entensible နဲ႔ maintainable ျဖစ္ေအာင္လုပ္ေပး)
//1. Object (Properties/Data & Function) eg., bird (wing & fly)
//                                            Object Type & SubType မ်ိဳးကြဲရွိႏူိင္ျပီး Obj Hierarchy မွာေတြ႔ႏူိင္။
//                                            အျခားlanguage က Class သံုးျပီးေဆာက္

class Square
{
    var width = 5;  //these datas are called properties
    var height = 5;

    function setSize(size) {        //these function are called methods
        width = size;
        height = size;
    }

    function getArea () {
        return width * height;
    }
}

var block = new Square();   // ေဆာက္လိုက္တဲ့ block obj မွာ properties နဲ႔ methods ေတြရရွိသြား
//                           block.setSize() method မွာ တန္ဖိုးထည့္လည္း box obj မွာ effect မရွိ။ သီးျခားစီ အလုပ္လုပ္။
var box = new Square();














//Constructor  (initial function works in buidling obj)
========================================================
class Square
{
    var width;
    var height;

    function Square(size){  //class နဲ႔ နာမည္တူရ
        width = size;
        height = size;
    }

    function setSize(size){
        width = size;
        height = size
    }

    function getArea() {
        return width * height;
    }
}   
var block = new Square(5);  //obj ေဆာက္ထဲက params မထည့္မေနရျဖစ္ျပီး တစ္ခါထဲထည့္ေဆာက္သြား
var box = new Square(10);
















//Information Hiding/Encapsulation  (language အမ်ားစုက Public, Private, Protected, Static စသည့္ access modifier သံုး)
===================================
class Engine 
{
    public var kilo;
    private var pistons = 4;
    private var valves = 12;

    public function drive () {
        kilo++;
    }

    public function check() {  
        if (dirtyOil()) { //dirtyOil() ကိုု သူ႔ class အတြင္းမွာပဲ ျပန္ယူသံုးႏူိင္။အျပင္က ေခၚသံုးလို႔မရ
            print "please change engine oil"
        }
    }    

    private function dirtyOil() {
        if (kilo > 3000) return true;
        return false;
    }
} 

var v6 = new Engine();
v6.drive()
v6.check()
v6.dirtyOil()   //Error bcoz private လုပ္ထားလုိ႔႔။ သူ႔ class အတြင္းပဲ ယူသံုးလို႔ရ။ အျပင္က လွမ္းသံုးလို႔မရ
v6.kilo
v6.pistons  //Error bcoz private လုပ္ထားလုိ႔႔။ သူ႔ class အတြင္းပဲ ယူသံုးလို႔ရ။ အျပင္က လွမ္းသံုးလို႔မရ
v6.valves   //Error bcoz private လုပ္ထားလုိ႔႔။ သူ႔ class အတြင္းပဲ ယူသံုးလို႔ရ။ အျပင္က လွမ္းသံုးလို႔မရ

//Notes: PHP မွာ Default access modifier က public ျဖစ္ေနသည္

class Math 
{
    static var PI = 3.1416;
    static function round(value) {
        return parseInt(value);
    }
}

print Math.PI;  //static ဆုိရင္ obj ေဆာက္ဖုိ႔မလိုပဲ တုိက္ရုိက္ ေခၚသံုးႏူိင္
print Math.round(4.2); //4










//Inheritance  
=============
class Animal 
{
    var legs = 4;
    function eat() {
        console.log("just eat");
    }
}

class Bird extends Animal 
{
    var legs = 2;   //မူလ class ရဲ ႔ data ေတြ function ေတြကို ေျပာင္းလဲႏူိင္
    var wing = true; //မူလ class မွာ မပါတဲ့ data ေတြ funtion ေတြပါႏူိင္
    function eat() {
        console.log("beak eat");
    }
} 

class Dog extends Animal
{
    function bark() {
        ...
    }
    function eat() {
        console.log("tongue eat");
    }
}


var linnYone = new Bird();
linnYone.legs 
linnYone.wing 
linnYone.eat()

var brownie = new Dog()
brownie.legs 
brownie.eat() 
brownie.bark()



//single inheritance vs multiple inheritance
//          (obj သို႔ class တစ္ခုထက္ပုိျပီး inherit လုပ္) (Deadly diamond of death)
//(java, ruby)          (C++, python, Perl)

class Animal
{
    function giveBirth(){
        ... 
    }
}

class Bird extends Animal
{
    var legs = 2;
    var wings = true;
    function giveBirth() {
        layEggs();
    }
}

class Horse extends Animal 
{
    var legs = 4;
    function giveBirth() {
        birthLive()
    }
}

class FlyingHorse extends Bird, Horse 
{
    ...   //ဒီ class မွာ object ေဆာက္ရင္ ဘယ္ giveBirth() ကို အတည္ယူရမလဲဆုိတဲ့ deadly diamond of death ျဖစ္
}

var pegasus = new FlyingHorse();
pegasus.giveBirth(); //ဘယ္ giveBirth() ကို အတည္ယူရမလဲဆုိတဲ့ deadly diamond of death ျဖစ္
//                      python, perl တုိ႔မွာ priority class ရဲံ႔ function ကို ဦးစားေပးျပီ ေျဖရွင္း

//                      java မွာ final ဆုိရင္ အျခား class က inherit လုပ္လုိ႔မရ
//              အခ်ဳိ႔ language မွာ inherit ရေပမယ့္ parent ရဲ ႔ properties နဲ႔ function ကို ျပင္လို႔မရေအာင္လုပ္လို႔ရ




//interface/Protocol/Contract
==============
interface Inputbox
{
    function setValue(val);
    function showValue();
    function resize(width, height);
}

class TextBox implement Inputbox    //Inputbox က သတ္မွတ္တဲ့ function နဲ႔ function signature/params ပါရ
{                                   //PasswordBox နဲ႔လည္း ဖလွယ္သံုးႏူိင္
    var value;                      //Test Driven Dev ရဲ ႔ Stub, Mock ေတြမွာ တကယ့္obj အစား mock နဲ႔ အစားထိုးသံုးႏူိင္
    function setValue(val) {
        value = val;
    }

    function showValue() {
        print value;
    }

    function resize(width, height) {
        ...
    }
}

class PasswordBox implement Inputbox
{
    var value;
    function setValue(val) {
        value = val;
    }

    function showValue() {
        for (let i = 0; i < value.length; i++) {
            print "*";            
        }
    }

    function resize(width, height) {
        ...
    }
}









//Polymorphism
============
//Static Polymorphism (Function Overload) function signature/params/arguments ေပၚမူတည္ျပီး အလုပ္လုပ္ပံုေျပာင္းလဲ

Class Shape
{
    function area(r) {
        return 3.14 * r * r 
    }

    function area(r, y) {
        return r * y    
    }

    function area(r, y, z) {
        return r * y * z
    }
}

var item = new Shape();
item.area(2);   //12.56
item.area(2,2); //4
item.area(2,2,2);  //8

//Dynamic Polymorphism (Inheritance, Interface)
interface Animal
{
    function move();
}

class Dog implement Animal 
{
    function move(){
        print "Dog walk and run"
    }
    
}

class Bird implement Animal 
{
    function move(){
        print "Bird fly";
    }
}

var brownie = new Dog();
var shweWar = new Bird();
brownie.move()  //Dog walk and run
shweWar.move()  //Bird fly



















//JS OOP 
========

//JS OOP (prototype-based OOP လို႔ေခၚ bcoz အျခား obj ကို copy လုုပ္ျပီး obj ေဆာက္လို့၊ Obj အလြတ္ေဆာက္ျပီး properties, function လိုသလိုထပ္ထည့္)
//အျခား OOP (classical OOP လုိ႔ေခၚ bcoz class ကို သံုးျပီး obj ေဆာက္လို႔)

//Remark: ES6 မွာ class ရေနျပီ။ NodeJS မွာသံုးလို႔ေတာ့ရ။ browser size JS ေတြမွာ မၾကာခင္ရ။

function Person(name) { //constructor function
    this.fullName = name;
    this.eat = function () {
        console.log(`${this.fullName} eats a lot`);
    }
}

let aungaung = new Person("Aung Aung");
aungaung.eat()  //Aung Aung eats a lot
aungaung.fullName; //Aung Aung
aungaung.fullName = "Hla Hla";
aungaung.eat()  //Hla Hla eats a lot

----------------------------------------------------------------------------------------

function Person() {}

Person.prototype.fullName = "AungAung";
Person.prototype.eat = function () {
    console.log(`${this.fullName} eats a lot`);
}

let aungaung = new Person();
aungaung.eat();
aungaung.fullName = "Kyaw Kyaw"
aungaung.eat();

-------------------------------------------------------------------------------------------




//Informaton Hiding/Encapsulation  (this keyword မပါရင္ encapsulation ျဖစ္)
================================

function People(name) {
    this.n = name;

    this.eat = function () {
        chew(this.n)
    }

    function chew(a) {
        console.log(`${a} eats and chews a lot`);
    }
}

let person = new People("Aung Aung");
person.n; //Aung Aung
person.eat(); //Aung Aung eats and chews a lot
person.chew(); //error


-----------------------------------------------------------------------------------------------


Inheritance
===========
function Person () { }
Person.prototype.fullName = "Jame Doe";
Person.prototype.run = function () {
    console.log("okay running");
}

function Student () { }
Student.prototype = Object.create(Person.prototype);
Student.prototype.sleep = function () {
    console.log("i'm sleeping");
}

let stu = new Student();
stu.fullName;  //Jame Doe
stu.run();  //okay running
stu.sleep(); //i'm sleeping

------------------------------------------------------------------------------------------------
//js မွာ function က obj ေတြျဖစ္ေန
function Person(name) {
    this.fullName = name;

    this.sayName = function () {
        console.log("hello, i'm " + this.fullName);
    }
}

function Stuent(major) {
    Person.call(this, name);

    this.major = major;ent(name,
    this.sayMajor = function () {
        console.log("i learn " + this.major);
    }
}

let kyawkyaw = new Student("kyaw kyaw", "english");
kyawkyaw.sayMajor()
kyawkyaw.sayName()
kyawkyaw.fullName = "hla hla"
kyawkyaw.sayName()

--------------------------------------------------------------------------------------------------


//Interface
===========
function Student() {
    this.sayHello = function () {
        console.log("hello i'm a student");
    }
}

function Worker() {
    this.sayHello = function() {
        console.log("hello i'm a worker");
    }
}

function greet(name) {
    name.sayHello();
}

let mary = new Student();
let bob = new Worker();

greet(bob)   //hello i'm a worker
greet(mary)  //hello i'm a student

--------------------------------------------------------------------------------------------------

//SOLID/OOD (code design)
//OOP (code instruction)

//S = Single Responsibility Principle (obj တစ္ခုဟာ သူနဲ႔ဆုိင္တဲ့ လုပ္ငန္းတစ္ခုကိုသာ လုပ္ေဆာင္သင့္)
=====================================
function Student(name, major) {
    this.name = name;
    this.major = major;
    this.signRollCall = function () {
        this.rollCall++
    }

    // this.displayInfo = function () {
    //     return "<b>" + this.name + "</b>" +
    //             ": <i>" + this.major + "</i>";
    // }
}

function ViewFormat() { //ဒီလိုခဲြေရးလို႔ xml အျဖစ္ေျပာငး္ခ်င္ရင္လည္း ဒီမွာပဲ ျပင္ရံုပဲ
    this.displayStudentInfo = function (student) {
        return "<b>" + student.name + "</b>" + 
                ": <i>" + student.major + "</i>";
    }
}
let mary = new Student("Mary", "English");
let view = new ViewFormat();
view.displayStudentInfo(mary);

--------------------------------------------------------------------------------------------------


//O = Open/Closed Principle (Open to Extension/ Close to Modification)
======================================================================
//မူလ code
==========
// function Order(items) {
//     this.items = items;
//     this.amount = function () {
//         var total = 0;
//         for (const item in items) {
//             total += item.value;
//         }
//         return total;
//     }
// }


//လိုခ်င္တဲ့ feature ရေအာင္ ျပင္တဲ့ code
================================
// function Order(items) {
//     this.items = items;
//     this.amount = function (currency) {
//         var total = 0;
//         for (const item in items) {
//             total += item.value;
//         }

//         if (currency == "MMK") 
//             return total * getExchangeRate();
//         else 
//             return total;
//     }
// }


//rule ကို ေဖာက္မိလို႔ ျပန္ျပင္တဲ့ code
=============================
function Order(items) {
    this.items = items;
    this.amount = function () {
        var total = 0;
        for (const item in items) {
            total += item.value;
        }
        return total;
    }

    this.kyatAmount = function () {
        var total = this.amount();
        return total * getExchangeRate();
    }
}

---------------------------------------------------------------------------------------------------


// Liskov


--------------------------------------------------------------------------------------------------


//i = Interface Segreation Principle  လုပ္ေဆာင္ခ်က္မ်ားစြာပါေနတဲ့ interface ၾကီးအစား  သက္ဆိုင္ရာ ကဏအလိုက္ခဲြထားတဲဲ့ interface အငယ္မ်ားကိုသာ အသံုးျပဳသင့္။ တစ္ခုခု crush ျဖစ္လည္း တျခား function ေတြကို မထိခိုက္ေစ။

// function Car() {
//     this.engine = function () {...}
//     this.break = function () {...}
//     this.playRadio = function () {...}
//     this.ejectCD = function () {...}
// }

function SpeedControl() {
    this.engine = function () {
        console.log("engine msg");
    }
    this.break = function () {
        console.log("break msg");
    }
}

function AudioControl() {
    this.playRadio = function () {
        console.log("playRadio msg");
    }
    this.ejectCD = function () {
        console.log("ejectCD msg");
    }
}

function Car() {
    this.speed = new SpeedControl();
    this.audio = new AudioControl();
}

let voxWagon = new Car();
voxWagon.speed.break()
voxWagon.Audio.playRadio();

---------------------------------------------------------------------------------------------------


//D = Dependency Inversion Principle

// function PDF() {
//     this.read = function () {
//         console.log("parse and read PDF file");
//     }
// }

// function Reader() {
//     this.book = new PDF();
//     this.read = this.book.read();
// }

// let kobo = new Reader();
// kobo.read;    //parse and read PDF file (higher obj က lower obj ကို မီွခိုေတာ့ PDF တစ္ခုထဲပဲဖတ္ႏူိင္မည္)


function PDF() {
    this.read = function () {
        console.log("this is pdf format");
    }
}

function EPUB() {
    this.read = function () {
        console.log("this is epub format");
    }
}

function Reader(book) {
    this.book = book;
    this.read = this.book.read();
}

let jsNinja_pdf = new PDF();           
let theJoyOfPHPProgramming_pdf = new EPUB();

let kobo = new Reader(jsNinja_pdf); /or/
let kobo = new Reader(theJoyOfPHPProgramming_pdf)
kobo.
//higher obj က lower obj ကိုမမွီခိုပဲ ၾကားခံ abstraction ျဖစ္တဲ့ interface ကိုမွီခိုျခင္းအားျဖင့္ dependency inversion ကို ရရိွ။s
