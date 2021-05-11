import React, { Component } from 'react';
import './index.css';
class Item extends Component {
    state = { mouse:false }
    render() { 
        const {id,name,done} = this.props
        const mouse = this.state.mouse
        return (
            <label>
            <li style={{background:mouse?'#ddd' : 'white'}} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
                    {/* 注意标签中的done，如果是value应该使用花括号括起来 */}
                <input type="checkbox" checked={done} onChange={this.handleCheck(id)}></input>
                <span style={{textDecoration:done?"line-through":"none"}} >{name}</span>
                <button onClick={()=>{this.handleDelete(id)}} style={{display:mouse?'inline':'none'}} >删除</button>
            </li>
            </label>
        );
    }



    handleMouse=(flag)=>{
        return ()=>{
            this.setState({
                mouse:flag
            })
        }
    }

    handleDelete=(id)=>{
        this.props.deleteItem(id)
    }

    //改变todo完成状态
    handleCheck =(id)=>{
        return (event)=>{
            this.props.update(id,event.target.checked)
        }
    }
}
 
export default Item;