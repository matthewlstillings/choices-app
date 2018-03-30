
class ChoicesApp extends React.Component {
    constructor(props) {
        super(props);
        this.clearOptions = this.clearOptions.bind(this);
        this.deleteChoice = this.deleteChoice.bind(this);
        this.makeChoice = this.makeChoice.bind(this);
        this.addChoice = this.addChoice.bind(this);
        this.state = {
            choices: []
        };
    }
    componentDidMount() { //logs when app mounts to page
        try {
            const storedJson = localStorage.getItem('choices');
            const choices = JSON.parse(storedJson);
            if (options) {
                this.setState(()=>({choices}))
            }
        } catch (e) {
            //Does nothing
        }
        
    }
    componentDidUpdate(prevProps, prevState) { //logs when state updates
        if (prevState.choices.length !== this.state.choices.length) {
            const json = JSON.stringify(this.state.choices);
            localStorage.setItem('choices', json);
            console.log('saving data');
        }
         
    }
    clearOptions() {
        this.setState(()=> ( {choices: []} ) );
    }
    deleteChoice(choiceToRemove) {
        this.setState((prevState)=>({ 
            choices: prevState.choices.filter((choice)=> choiceToRemove !== choice)
        }));
    }
    makeChoice() {
        const randomNum = Math.floor(Math.random() * this.state.choices.length);
        const ourChoice = this.state.choices[randomNum];
        alert(ourChoice); 
    }
    addChoice(finalChoice) {
        if (!finalChoice) {
            return 'Enter valid text';
        } else if (this.state.choices.indexOf(finalChoice) > -1) {
            return 'This choice already exists'
        } else {
            this.setState((prevState)=> ( { choices:  prevState.choices.concat([finalChoice]) } ) ); 
        }  
    }
    render() {
        
        const subTitle = 'Let me help make a choice';
       
        return (
            <div>
                <Header subTitle={subTitle}/>
                <Action 
                    hasOptions = {this.state.choices.length > 0}
                    makeChoice = {this.makeChoice}
                /> 
                
                <Options 
                    choices = {this.state.choices}
                    clearOptions = {this.clearOptions}
                    deleteChoice = {this.deleteChoice}
                />
                <AddChoice 
                    addChoice = {this.addChoice}
                />
            </div>
        )
    }
}



const Header = (props) => {
        return (
            <div>
                <h1>{props.title}</h1>
                {props.subTitle && <h2>{props.subTitle}</h2>}
            </div>
        );
    
}

Header.defaultProps = {
    title: 'Choices, choices'
};


const Action = (props) => {
        return (
            <div>
                <button 
                    onClick={props.makeChoice}
                    disabled = {!props.hasOptions}
                >
                        Let me choose for you!
                </button>
            </div>
        );
    
}

const Options = (props) => {
        return ( 
            <div>
            <button onClick={props.clearOptions}>Remove all Choices</button>
            {props.choices.length === 0 && <p>Add choices to get started</p>}
            <ul>
            {
                props.choices.map((option) => 
                    <Option 
                        key={option} 
                        optionText={option}
                        deleteChoice={props.deleteChoice}
                    />
                )
            }
            </ul>
            </div>
        );
    
}

const Option = (props) => {
        return ( 
           <div> 
                <li>{props.optionText}</li>
                <button onClick={(e)=> {
                    props.deleteChoice(props.optionText);
                }}
                >
                X
                </button>
           </div> 
        );
    
};


class AddChoice extends React.Component {
    constructor(props) {
        super(props);
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.state = {
            error: undefined
        };
    }
    onFormSubmit(e) {
        e.preventDefault();
        
        const choiceInput = e.target.elements.option.value.trim();
        const error = this.props.addChoice(choiceInput);
        this.setState(() => ({ error }));
        e.target.elements.option.value = '';

       
    }
    render() {
        return (
            <div>
                
                <form onSubmit={this.onFormSubmit}>
                    <input type="text" name="option"/>
                    <button>Add Choice</button>
                </form>
                {this.state.error && <p>{this.state.error}</p>}
            </div>
        );
    }
}


//const User = (props) => {
//    return (
//        <div>
//            <p>Name:{}</p>
//            <p>Age:</p>
//        </div>
//    );
//};

ReactDOM.render(<ChoicesApp />, document.getElementById('root')); 










