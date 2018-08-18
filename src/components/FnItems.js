import React,{Component} from 'react';
import '../App.css';
class FnItems extends Component{  
    render(){ 
        return (
            <button onClick={this.props.clickFn} className='FnItems btn'  value={this.props.n} >{this.props.n}</button>
       ) ;
    }
}
export default FnItems;