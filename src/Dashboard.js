import { useState } from "react";
 import FetchRecords from "./FetchRecords";

const Dashboard = (props) => { // props encapsulate the token and logout method

	const [token, setToken] = useState(props ? props.token : ''); // check if props exists. if ys, store the token 
	
	const onLogout = (evt) => {
		const { logout } = props; // deconstruct the object props and extract only the logout method
		setToken('');
		if(logout) {  // check if prop logout exist
			logout(); // if yes, trigger handleLogout method in Login component
		}
	};

	return(
		<div className="hp-container">
            <div className="dash-menu">
            <h1>Menu</h1>
            <button className="logout" onClick={onLogout}>Logout</button>
            </div>
            <div className="user-token">
            <ul>
				<li>user {token}</li>
           </ul>
            </div>
		
			
			<h2 className="fetch-h2">Users</h2>
		    <div className= "fetch-table"> 
			<FetchRecords/>	
    </div>
			{/* <h4>Table here...</h4> */}
		</div>
	)
};


export default Dashboard;