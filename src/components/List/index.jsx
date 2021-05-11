import React, { Component } from 'react';
import Item from '../Item'
import './index.css'
class List extends Component {
    state = {  }
    render() { 
        
        const {todoList,update,deleteItem} = this.props
        return ( 
            <ul className="List">
                {
                    todoList.map((item)=>{
                        return <Item key={item.id} id={item.id} {...item} update={update} deleteItem={deleteItem}></Item>
                    })
                }
            </ul>
         );
    }
}
 
export default List;