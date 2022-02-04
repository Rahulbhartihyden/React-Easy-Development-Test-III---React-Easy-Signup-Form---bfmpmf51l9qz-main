import React from 'react';

const Signup = () =>{
    return (
        <>
            
            
                
            <div className="form-container">
            <form >
                <label className="labelName">Name</label>
                <input type="text" name="name" placeholder="Enter Your Name" className="labelInput"/>

                <br />
                <br />
                <label className="labelName">Email</label>
                <input type="email" name = "email" placeholder="Enter Your Email" className="labelInput"/>

                <br />
                <br />
                <label className="labelName">Password</label>
                <input type="password" name="password" placeholder="Enter Your Password" className="labelInput"/>

                <br/>
                <br/>
                <input type = "checkbox" name = "checkbox"/><span>Consent</span>

                <br/>
                <br/>

                <button type = "submit">Submit</button>
                <br/>
            </form>
            </div>

            
        </>
    )
}

export default Signup;