import React from 'react';

//Components 
import AddChoice from './add-choice';
import Options from './options';
import Action from './action';
import Header from './header';
import OptionModal from './option-modal';

export default class ChoicesApp extends React.Component {
    state = {
        choices: [],
        selectedOption: undefined
    };
    clearOptions = () => {
        this.setState(()=> ( {choices: []} ) );
    };
    deleteChoice = (choiceToRemove) => {
        this.setState((prevState)=>({ 
            choices: prevState.choices.filter((choice)=> choiceToRemove !== choice)
        }));
    }
    makeChoice = () => {
        const randomNum = Math.floor(Math.random() * this.state.choices.length);
        const ourChoice = this.state.choices[randomNum];
        this.setState(()=> ({selectedOption: ourChoice}));
    };
    addChoice = (addedChoice) => {
        if (!addedChoice) {
            return 'Enter valid text';
        } else if (this.state.choices.indexOf(addedChoice) > -1) {
            return 'This choice already exists'
        } else {
            this.setState((prevState)=> ( { choices:  prevState.choices.concat([addedChoice]) } ) ); 
        }  
    };
    closeModal = () => {
        this.setState(()=> ({selectedOption: undefined}));
    };
    componentDidMount = () => { //logs when app mounts to page
        try {
            const json = localStorage.getItem('choices');
            const choices = JSON.parse(json);
            if (choices) {
                this.setState(()=>({choices}))
                console.log('Found Data');
            }
        } catch (e) {
            //Does nothing
        }
        
    };
    componentDidUpdate = (prevProps, prevState) => { //logs when state updates
        if (prevState.choices.length !== this.state.choices.length) {
            const json = JSON.stringify(this.state.choices);
            localStorage.setItem('choices', json);
            console.log('saving data');
        }
         
    };
    render() {
        
        const subTitle = 'Let me help make a choice';
       
        return (
            <div>
                <Header subTitle={subTitle}/>
                <div className="container">
                    
                    <Action 
                        hasOptions = {this.state.choices.length > 0}
                        makeChoice = {this.makeChoice}
                    /> 
                    <div className="app-body">
                        <Options 
                            choices = {this.state.choices}
                            clearOptions = {this.clearOptions}
                            deleteChoice = {this.deleteChoice}
                        />
                        <AddChoice 
                            addChoice = {this.addChoice}
                        />
                    </div>
                </div>
                <OptionModal
                    selectedOption={this.state.selectedOption}
                    closeModal={this.closeModal}
                />
            </div>
        )
    };
}
