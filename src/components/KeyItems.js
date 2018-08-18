import React, {Component} from 'react';
import '../App.css';

class KeyItems extends Component{
    render(){
            return (
                 <button onClick={this.props.clickFn} value={this.props.n} className='KeyItems btn'>{this.props.n}</button>
            ) ;
    }
}

export default  KeyItems;