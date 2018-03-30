//JSX - Javascript XML

const app = {
    title: 'Choices', 
    subtitle: 'Let us choose for you!',
    options: [] 
    
};

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;
    
    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        //console.log(app.options);
        renderOptions();
    }
    
    
};


const removeAll = () => {
    app.options = [];
    renderOptions();
};

const randomChoice = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const choice = app.options[randomNum];

    console.log(choice);
};

const appRoot = document.getElementById('root');

const renderOptions = () => {
const template = (
    <div>
        <h1>{app.title}</h1> 
        {app.subtitle && <p>{app.subtitle}</p>}
        {app.options.length > 0 ? <p>Here are your choices:</p> : <p>No options</p>}
        <button disabled={app.options.length === 0} onClick={randomChoice}>Pick one for me!</button>
        <button onClick={removeAll}>Remove all</button>
        <ol id="choiceList">
            
            {app.options.map((li)=> <li key={li}>{li}</li>)}
            
        </ol>
        <form onSubmit={onFormSubmit}>
            <input type="text" name="option"/>
            <button>Add Choice</button>
        </form>
    </div>);
    ReactDOM.render(template, appRoot);
};

renderOptions();

