import React, {Component} from 'react';
import KeyItems from './KeyItems';
import OpItems from './OpItems';
import '../App.css';
import FnItems from './FnItems';

class Keys extends Component{
render(){
    let Values ;
    if(this.props.elements){
    Values = this.props.elements.map((element) => {
            return(
                <KeyItems clickFn={this.props.clk} n={element}/>
            )
        })
    }
    let btns ;
    if(this.props.ops){
    btns = this.props.ops.map((op) => {
            return(
                <OpItems clickFn={this.props.clk} n={op}/>
            )
        })
    }

    let funs;
    if(this.props.fns){
        funs=this.props.fns.map((fn)=>{
            return(
                 <FnItems clickFn={this.props.do} n={fn}/>
            )
        })
    }
    
    return( 
    <div className='Keys'>
        {funs}
        <div id='ops' className='con'> 
            {btns}
        </div>
        <div id='nums'sclassName='con'>
            {Values}
        </div>
    </div>
    );

}
} 

export default  Keys;