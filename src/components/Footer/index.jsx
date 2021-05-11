import React, { Component } from 'react'
import './index.css'
class Footer extends Component {
    state = {  }
    render() { 
        const {todoList,clearAllDone} = this.props
        const doneCount = todoList.reduce(((pre,next)=>(pre+(next.done?1:0))),0)
        const total = todoList.length
        return (
            <div className="todo-footer">
                <label>
                    <input type="checkbox" onChange={this.handCheckAll} checked={doneCount === total && total!==0 ?true:false}></input>
                </label>
                <span>
                    <span>已完成{doneCount}</span>/全部{total}
                </span>
                <button onClick={()=>{clearAllDone()}}>清除已完成任务</button>
            </div>
        );
    }

    handCheckAll = (event)=>{
        this.props.checkAllItem(event.target.checked)
    }
}
 
export default Footer;