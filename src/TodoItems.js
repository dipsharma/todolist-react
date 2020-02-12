import React, {Component} from "react";

class TodoItems extends Component {
constructor (props){
    super(props);
    this.createTask = this.createTask.bind(this);
}

    delete(key){
        this.props.delete(key);
    }

    createTask(item){
        return <li key={item.key} >
        
        {item.text} 

        <span onClick = {()=>this.delete(item.key)}
        key = {item.key}><i className="fa fa-trash"></i></span>
        </li>   
    }

    render (){
        var todoEntries = this.props.entries;
        var listItems = todoEntries.map(this.createTask);

        return (
            <ul className = "theList">
                {listItems}
            </ul>
        );
    }
};

export default TodoItems;

