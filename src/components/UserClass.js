import React from "react";
class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state ={
           userInfo:{
            login:"dummy",
            location:"default"
           }
        }
        console.log("child constructor");
    }
    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/poornimajadon");
        const json = await data.json();
        this.setState({
            userInfo: json,
        })
    }
    componentWillUnmount(){
        console.log("component unmount");
    }
    render(){
        const {login,location} = this.state.userInfo;
     
        console.log("child render");
        return  (<div className="user-card">
         <h2>Name: {login}</h2>
        <h3>Location: {location}</h3>
    </div>);
    }
}
export default UserClass;