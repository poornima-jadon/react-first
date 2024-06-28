import User from "./User";
import UserClass from "./UserClass";
import React from "react";
import UserContext from "../utils/UserContext";
class About extends React.Component{
    constructor(props){
        super(props);
        console.log("parent constructor");

    }
    componentDidMount(){
        console.log("parent componet mount");
    }
    render(){
        console.log("parent render");
        return (
            <div>
               <h1>About Us</h1>
              <UserContext.Consumer>
                {({loggedInUser})=><h2 className="font-bold">{loggedInUser}</h2>}
                </UserContext.Consumer>
               <h2>Hello from About page</h2>
              <UserClass name={"poornima class"} location={"hathras class"}/>
            </div>
       );
    }
}
export default About;