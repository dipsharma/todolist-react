import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import UserProfile from "./UserProfile";
import TodoList from "./TodoList";


var destination = document.querySelector("#container");

ReactDOM.render (
    <div className="UsersTodoList">
        <div className="container">
            <div className="row">
                <div className="col-sm-12 col-md-4"><UserProfile/></div>
                <div className="col-sm-12 col-md-8"><TodoList/></div>
            </div>
        </div>
    </div>, destination
);


