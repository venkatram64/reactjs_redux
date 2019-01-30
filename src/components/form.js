import React, {Component, PropTypes} from 'react';

export default class Form extends Component {

    constructor(props){
        super(props);
        this.state = {titleValue:'',priceValue:''};
        this.handleButtonClick = this.handleButtonClick.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handlePriceChange = this.handlePriceChange.bind(this);
    }

    static get propTypes(){
        addBookAction: PropTypes.func.isRequired
    };

    handleTitleChange(event){
        this.setState({titleValue:event.target.value})
    }

    handlePriceChange(event){
        this.setState({priceValue:event.target.value})
    }

    handleButtonClick(event){
        event.preventDefault();
        this.props.addBookAction(this.state.titleValue,this.state.priceValue);
        this.setState({titleValue:''});
        this.setState({priceValue:''});
    }
    render(){
        return (
            <div className="Form">
                <input type="text" placeholder="Book title"
                     value={this.state.titleValue}
                     onChange={this.handleTitleChange} /><br/>
                <input type="text" placeholder="Book price"
                     value={this.state.priceValue}
                     onChange={this.handlePriceChange} /><br/>
                <button onClick={this.handleButtonClick}>Add Book</button>
            </div>
        )
    }
}