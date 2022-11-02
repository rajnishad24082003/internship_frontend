import React,{useState} from "react";
import "./signup.css";

function Signup(){
	const [usersignup, setusersignup] = useState({
		name:"",
		email:"",
		phone:"",
		password:""
	})
	const handle = (e)=>{
		console.log(e);
		const name = e.target.name;
		const value = e.target.value;
		console.log(name);
		setusersignup({...usersignup, [name] : value})
	}
	const handlesubmit =async (e)=>{
		 e.preventDefault();
		 const {name,email,phone,password} = {usersignup};
		const res = await fetch("/signup",{
			method:"POST",
			headers:{
				"Content-Type":"application/json"
			},
			body:JSON.stringify(
				{
					name:name,email:email,phone:phone,password:password
				}
			)
		})
		const data = await res.json();
	}
    return(
        <>
                <div className="maincon">
<div className="container" id="container">
	<div className="form-container sign-up-container">
	</div>
	<div className="form-container sign-in-container">
		{/* action="https://form-api-internship-task.herokuapp.com/signup" */}
		<form  method="post" onSubmit={handlesubmit}>
			<h1>Create Account</h1>
			<span>Sign Up for all new opportunities</span>
			<input type="text" placeholder="Name" name="name"  value={usersignup.name} onChange={handle}/>
			<input type="email" placeholder="Email" name="email"  value={usersignup.email} onChange={handle}/>
			<input type="number" placeholder="Phone Number" name="phone" value={usersignup.phone} onChange={handle}/>
			<input type="password" placeholder="Password" name="password" value={usersignup.password} onChange={handle}/>
			<button className="sign_in_btn" onClick={handlesubmit}>Sign Up</button>
		</form>
	</div>
	<div className="overlay-container">
		<div className="overlay">
			<div className="overlay-panel overlay-right">
				<h1>Hi,homeseekers</h1>
				<p style={{"fontSize": "large"}}> Please Create your Account for latest property listings.</p>
				<button className="ghost" id="signUp"><a href="/"  style={{"color":"white"}}><i className="fas fa-arrow-left"></i> Sign In</a></button>
			</div>
		</div>
	</div>
</div>
</div>
        </>
    )
}

export default Signup;