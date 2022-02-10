import React, {Component} from 'react';

class Counter extends Component{
    constructor(props){
        super(props);
        this.state = {
            count:3,
        }
    }
    render(){
        const { count } = this.state;
        return (
        <div className= "counter">
        <p className="text-red-500 font-bold">{count}</p>
        <button >Increment</button>
        <button>Decrement</button>
        </div>
        );
    } 
}