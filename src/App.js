import './App.css';
import React, { Component } from 'react';
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import MyClock from './components/MyClock'
class App extends Component {
  state = { todoList:[
    {id:"001",name:"学习",done:true},
    {id:"002",name:"运动",done:false},
    {id:"003",name:"睡觉",done:false},
    {id:"004",name:"洗澡",done:true},
  ] }
  
  //addItem 向todoList尾部添加一个todoitem
  addItem = (todoitem)=>{
    const {todoList} = this.state
    this.setState(
      {todoList:[...todoList,todoitem]}
    )
  }

  updateList = (id,done)=>{
    const {todoList} = this.state
    //检查每一个Item并更新
    const newItems = todoList.map((item)=>{
      //此处...不是展开对象而是合并对象
      if(item.id === id)return{...item,done}
      else return item
    })
    this.setState({
      todoList:newItems
    })
  }

  //删除Item
  deleteItem = (id)=>{
    const {todoList} = this.state
    const newItems = todoList.filter((item)=>{
      return item.id !== id
    })
    this.setState({
      todoList:newItems
    })
  }

  checkAllItem = (done)=>{
    const {todoList} = this.state
    const newItems = todoList.map((item)=>{
      return{...item,done}
    })
    this.setState({
      todoList:newItems
    })
  }

  clearAllDone = ()=>{
    const {todoList} = this.state
    const newItems = todoList.filter((item)=>{
      return !item.done
    })
    this.setState({
      todoList:newItems
    })
  }

  render() {
    return (  
      <div className="todo-container">
        <div className="todo-wrap">
              <MyClock />
              <Header addItem = {this.addItem} />
              <List todoList={this.state.todoList} update={this.updateList} deleteItem={this.deleteItem}/>
              <Footer todoList={this.state.todoList}checkAllItem={this.checkAllItem} clearAllDone={this.clearAllDone}/>
        </div>
      </div>
    );
  }
}
 
export default App;

