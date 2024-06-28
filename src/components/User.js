import { useState } from "react";
const User = ({name,location}) =>{
   const [count,setCount] = useState(0);
    const [count2] = useState(2);
    return <div className="user-card">
        <h1>Count: {count}</h1>
        <button onClick={()=>{
             const count1= count +1;
           setCount(count1);
        }}>Count Increase</button>
        <h2>{name}</h2>
        <h3>Location: {location}</h3>
    </div>;
}
export default User;