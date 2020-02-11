import React , {Component} from "react";
import TodoItems from "./TodoItems"; 
import "./TodoList.css";

class TodoList extends Component {
     constructor(props){
        super(props);
        this.state = {
            items:[]
        };
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    addItem(e){
        if (this._inputElement.value !== ""){
            var newItem = {
                text: this._inputElement.value,
                key: Date.now()
            };
            this.setState((prevState)=>{
                return {
                    items: prevState.items.concat(newItem)
                };
            });
            this._inputElement.value = "";
        }

        console.log(this.state.item);
        e.preventDefault();

    }

    deleteItem(key){
        var filteredItems = this.state.items.filter(function(item){
            return (item.key !== key);

        });

        this.setState ({
            items:filteredItems
        });

    }

    render(){
        {/* let toDay = new Date(); */}
        return (
            <div className="todoListContainer">
                <div className="todoListHeader">
                    <h1>Team To-Do List</h1>
                    {/* < span class="date">{toDay.toString()}</span> */}
                    <span className="date">Tue 12 Feb</span>
                </div>

                <div className = "todoListMain">
                    <TodoItems entries={this.state.items}
                    delete = {this.deleteItem}/>

                    <div className = "header">
                    <form onSubmit = {this.addItem}>
                    <input ref={(a)=>this._inputElement = a} placeholder = "Your task please"></input>
                    <button type="submit" >Add</button>
                    </form>
                    </div>
                
                </div>
            </div>
        );
    }
}

export default TodoList;
