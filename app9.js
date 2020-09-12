String.prototype.yell = function() {
    return `OMG!!! ${this.toUpperCase()}!!!!!Awesome`}

    //Array.prototype is one object with keyword pop
Array.prototype.pop = function() {
    return 'SORRY I WANT THAT ELEMENT,I WILL NEVER POP IT OFF';
};



function hex(r,g,b) {
	return '#' + ((1 << 24) + (r << 16) +(g << 8) + b).toString(16).slice(1);

}

function rgb(r,g,b)
{
    return `rgb(${r},${g},${b})`;
}
// hex(255,100.25);

// Factory function Method.

function makeColor(r,g,b) {
    const color = {};
    color.r = r;
    color.g = g;
    color.b = b;
    color.rgb = function() {
        const {r,g,b} = this;
        return `rgb(${r},${g},${b})`;
    };
    color.hex = function()
    {   const {r,g,b} = this;
        return '#' + ((1 << 24) + (r << 16) +(g << 8) + b).toString(16).slice(1);
    }
    return color;
}

 
Colorss = makeColor(20,180,40);



const FirstColor = makeColor(35,255,150);
FirstColor.hex();

//Another way

function Colors(r,g,b)
{
    this.r = r;
    this.g = g;
    this.b = b;
    console.log(this);
}

Colors.prototype.rgb = function()
{
    const {r,g,b} = this;
    return `rgb(${r},${g},${b})`;
};

Colors.prototype.hex = function()
{
    const {r,g,b} = this;
    return '#' + ((1 << 24) + (r << 16) +(g << 8) + b).toString(16).slice(1);
}

Colors.prototype.rgba = function() 
{
    const {r,g,b} = this;
    return `rgb(${r},${g},${b})`;
}

const color1 = new Colors(40,50,60);
const color2 = new Colors(255,100,55);


//class method
class Color1 {
    constructor(r,g,b,name)
    {
        this.r = r;
        this.g = g;
        this.b = b;
        this.name = name;
    }

       // console.log('INSIDE CONSTRUCTOR!');
       // console.log(r,g,b,name);
    
    innerRGB() {
        const {r,g,b} = this;
        return `${r},${g},${b},${a}`;
    }
    rgb() 
    {
        //const {r,g,b} = this;
        //return `rgb(${r},${g},${b})`;
        return `rgb(${this.innerRGB()})`;
    }
    hex() {
        const {r,g,b} = this;
        return '#' + ((1 << 24) + (r << 16) +(g << 8) + b).toString(16).slice(1);
    
    }

    greet() {
        return "Hello from"
    }
}

const c1 = new Color1(255,67,89,'tomato');


/*class Cat {
    constructor(name,age) 
    {
        this.name = name;
        this.age = age;
    }
    eat() {
        return `${this.name} is eating`;
    }
}

class Dog {
    construction(name,age) 
    {
        this.name = name;
        this.age = age;
    }
    eat() {
        return`${this.name} is Eating`;
    }
    bark() {
        return 'WOOOF'
    }
}
*/
//Another way,inheritance

class pet {
    constructor(name,age) 
    {
        this.name = name;
        this.age = age;
    }
    eat() {
        return `${this.name} is eating`;
    }
}

class Cat extends pet {
    constructor(name,age,livesLeft = 0){
        console.log('IN CAT CONSTRUCTION');
        super(name,age);
        this.livesLeft = livesLeft;
    }
    meow() {
        return 'MEOWW';
    }
}

class Dog extends pet{
    bark() {
        return 'WOOF';
    }
}
