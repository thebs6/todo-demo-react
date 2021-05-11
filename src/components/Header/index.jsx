import React, { Component } from 'react';
import {nanoid} from 'nanoid';
import './index.css'
class Header extends Component {
    state = { 
        inputValue:""
    }
    render() { 
        return (
            <div className="todo-header">
                <input value={this.state.inputValue} onChange={this.inputChange} onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你要添加的项目"></input>
                <button onClick={this.btnAddItem}>增加项目</button>
            </div>
        );
    }

    inputChange = (event)=>{
        this.setState({
            inputValue:event.target.value
        })
    }

    handleKeyUp = (event)=>{
        const {keyCode,target} = event
        //回车键判断
        if(keyCode !== 13)return
        //输入判断
        if(target.value.trim() ==='')
        {
            alert("输入不能为空")
            return
        }
        //添加todoItem
        const todoItem = {id:nanoid(),name:target.value,done:false}
        this.props.addItem(todoItem)
        target.value = ""
    }
    btnAddItem =()=>{
        const {inputValue} = this.state
        const todoItem = {id:nanoid(),name:inputValue,done:false}
        if( inputValue === '')
        {
            alert("输入不能为空")
            return
        }
        this.props.addItem(todoItem) 
        this.setState({
            inputValue:""
        })
    }
    
}
 
export default Header;