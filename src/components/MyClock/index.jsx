import React, { Component } from 'react';
import './index.css'
class MyClock extends Component {
    constructor(props){
        super(props)
        const myDate = new Date()
        const newDate = myDate.toLocaleString()
        this.state = { nowDate:newDate }
    }
    
    componentDidMount(){
        this.Inter = setInterval(this.ChangeTime,1000)
    }
    ChangeTime = ()=>{
        const myDate = new Date()
        const newDate = myDate.toLocaleString()
        this.setState({
            nowDate:newDate
        })
    }
    componentWillUnmount(){
        clearInterval(this.Inter);
    }
    render() { 
        return (
            <div>
                <h3>
                    {this.state.nowDate}
                </h3>
            </div>
        );
    }
}
 
export default MyClock;