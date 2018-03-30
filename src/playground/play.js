/* var nameVar = 'Andrew';
console.log('nameVar', nameVar)

let nameLet = 'Jen';
console.log(nameLet);

const name = "Yolo";
console.log(name);

// Normal Function Example
const square = function (x) {
    return x*x;
};

// Arrow Function

const squareArrow = (x)=>  x+x;
console.log(squareArrow(8));

//

const fullName = "Matthew Lee";
let firstName;
let lastName;

const theName = () => firstName = fullName.split(' ')[0];


console.log(theName(fullName)); */

//Arguments Object -- no longer bound with arrow functions

/* const add = (a, bound)=> {
    console.log(arguments); // Can no longer get these, use ES5 functions
    return a + b;

} */

// this keyword - no longer bound in arrow function
/* 
const user = {
    name: 'Andrew',
    cities: ['Philly', 'China', 'Taipei'],
    printLived() {
        return this.cities.map((city)=> this.name + ' has lived in ' + city);
    }
};

console.log(user.printLived());
console.log(user.cities); */

const multiplier = {
    numbers: [1,6,3,2,3,8],
    multiplyBy: 5,
    multiply() {
        return this.numbers.map((digits)=> digits * this.multiplyBy + 6);
    }
};

console.log(multiplier.multiply());
console.log(multiplier.numbers);


// Counter Example 

let count = 0;
const addOne = () => {
    count ++;
    console.log(count);
    renderCountUpdate();
};
const minusOne = () => {
    count --;
    renderCountUpdate();
};
const reset = () => {
    count = 0;
    renderCountUpdate();
};



const renderCountUpdate = () => {
    const templateTwo = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
    ReactDOM.render(templateTwo, appRoot); 
};

renderCountUpdate();


//Hiding and showing things example
const app = {
    title: 'Visible',
    buttontext: 'Click here to hide',
    text: 'You can see it now',
    buttonText2: 'Click to show'
};

const appRoot = document.getElementById('root');

let visibility = false;
const textToggle = () => {
    visibility = !visibility;
    renderVisible();
}



const renderVisible = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            <button onClick={textToggle}>{ visibility ? app.buttontext:app.buttonText2 }</button>
            <p>{visibility && app.text }</p>
        </div>
    );
    ReactDOM.render(template, appRoot);
};

renderVisible();


///Using Classes to update count 



class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.add = this.add.bind(this);
        this.sub = this.sub.bind(this);
        this.kill = this.kill.bind(this);
        this.state = {
            count: 0
        };
    }
    componentDidMount() { //logs when app mounts to page
       
            const storedJson = localStorage.getItem('count');
            const count = parseInt(storedJson, 10);
            if(!isNaN(count)) {
                this.setState(()=>({count}));
            }
       
    }
    componentDidUpdate(prevProps, prevState) { //logs when state updates
        if (prevState.count !== this.state.count) {
            
            localStorage.setItem('count', this.state.count);
            
        }
         
    }
    
    add() {
     this.setState((prev)=> {
         return {
             count: prev.count + 1
         };
     });
        
    }
    sub() {
        this.setState((prev)=> {
            return {
                count: prev.count - 1
            };
        });
    }
    kill() {
        this.setState((prev)=> {
            return {
                count: prev.count = 0
            };
        });;
    }   
    
    render() {
        console.log('whoops');
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.add}>+1</button>
                <button onClick={this.sub}>-1</button>
                <button onClick={this.kill}>Reset</button>
            </div>
        )
    }
}





ReactDOM.render(<Counter />, document.getElementById('root'));

//State Change with visibility and classes
class Visible extends React.Component {
    constructor(props) {
        super(props)
        this.textToggle = this.textToggle.bind(this);
        this.state = {
            visibility: false
        }
    }


textToggle() {
    this.setState((prev) => {
        return {
            visibility: !prev.visibility
        };
    });
}



render() {
    return (
        <div>
            <h1>Doop</h1>
            <button onClick={this.textToggle}>{ this.state.visibility ? 'Hide':'show' }</button>
            {this.state.visibility && (<div><h1>Hey mofo</h1></div>) }
        </div>
    );
    
};

}
ReactDOM.render(<Visible />, document.getElementById('root'));