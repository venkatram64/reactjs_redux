import React, {Component, PropTypes} from 'react';

export default class Form extends Component {

    constructor(props){
        super(props);
        this.state = {titleValue:''};
        this.handleButtonClick = this.handleButtonClick.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
    }

    static get propTypes(){
        addBookAction: PropTypes.func.isRequired
    };

    handleTitleChange(event){
        this.setState({titleValue:event.target.value})
    }
    handleButtonClick(event){
        event.preventDefault();
        this.props.addBookAction(this.state.titleValue);
        this.setState({titleValue:''});
    }
    render(){
        return (
            <div className="Form">
                <input type="text" placeholder="Book title"
                     value={this.state.titleValue}
                     onChange={this.handleTitleChange} />
                <button onClick={this.handleButtonClick}>Add Book</button>
            </div>
        )
    }
}