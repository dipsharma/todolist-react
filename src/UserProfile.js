import React , {Component} from "react";

class UserProfile extends Component {
    render(){
        return (
            <div className="userProfileContainer">
                <div className="profile"> 
                    <span className="userAvatar">
                        <img src="https://i.pravatar.cc/150?img=13" className="avatar"/>
                    </span>
                    <h5>Guflielmo Marconi</h5>
                </div>
                <div className="listName"> 
                    <h5><i className="fa fa-list-ul"></i> Team To-Do List</h5>
                </div>
            </div>
        );
    }
}

export default UserProfile;
