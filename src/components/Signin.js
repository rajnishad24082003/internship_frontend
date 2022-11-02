import "./signin.css";

function Signin(){
    return(
        <>
        <div className="maincon">
<div className="container" id="container">
	<div className="form-container sign-in-container">
		<form action="https://form-api-internship-task.herokuapp.com/signin" method="post">
            <div className="teranto-heading">
                <i className="fas fa-home"></i>
                <h2>Teranto</h2>
        </div>
			<h1>Sign in</h1>
			<span>or use your account</span>
			<input type="email" placeholder="Email" name="email"/>
			<input type="password" placeholder="Password" name="password"/>
			<a href="#">Forgot your password?</a>
			<button className="sign_in_btn" >Sign In</button>
		</form>
	</div>
	<div className="overlay-container">
		<div className="overlay">
			<div className="overlay-panel overlay-right">
				<h1>Hi,homeseekers</h1>
				<p style={{"fontSize": "large"}}>Welcome Back! Please Login to your Account for latest property listings.</p>
				<button className="ghost" id="signUp" ><a href="/signuprj" style={{"color":"white"}}> Sign Up</a></button>
			</div>
		</div>
	</div>
</div>
</div>
        </>
    )
}

export default Signin;