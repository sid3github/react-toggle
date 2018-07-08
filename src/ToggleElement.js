import React, {Component} from 'react';


class ToggleElement extends Component {
    constructor(props){
        super(props);
        this.state = {
            visibility: false
        }
    }

    toggleChange = () => {
      this.setState({
         visibility: this.state.visibility = true
      });
    };


    render(){
        if(this.state.visibility) {
            return (
                <div>
                    <button className='btn' type='submit' onClick={this.toggleChange}>click me</button>
                    <p><strong>Hey now you can see me!</strong></p>
                </div>
            )
        }else{
            return (
                <div>
                    <button className='btn' type='submit' onClick={this.toggleChange}>click me</button>
                </div>
            )
        }
    }
    }

export default ToggleElement;