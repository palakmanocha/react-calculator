import React, {Component} from 'react';
import '../App.css';

class OpItems extends Component{
    render(){
            return (
                <button onClick={this.props.clickFn} value={this.props.n} className='OpItems btn'>{this.props.n}</button> 
            ) ;
    }
}

export default  OpItems;