import React from 'react';



export default class AddChoice extends React.Component {
    state = {
        error: undefined
    }
    onFormSubmit = (e) => {
        e.preventDefault();
        const choiceInput = e.target.elements.option.value.trim();
        const error = this.props.addChoice(choiceInput);
        this.setState(() => ({ error }));
        e.target.elements.option.value = '';

       
    }
    render() {
        return (
            <div >
            {this.state.error && <p className="error-message">{this.state.error}</p>}
                <form className="add-choice-form" onSubmit={this.onFormSubmit}>
                    <input class="add-choice-input" type="text" name="option" placeholder="Enter choice here"/>
                    <button className="button button--add">Add Choice</button>
                </form>
                
            </div>
        );
    }
}