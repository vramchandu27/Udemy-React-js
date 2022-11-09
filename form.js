import React from "react"

const Form = () =>
{
    return(
        <div className="text">
        <form>
            <label>Name</label><br/>
            <input type="text" /><br/>
            
            <label>City</label><br/>
                <input type="text" /><br/>
            
            <label>State</label><br/>
                <input type="text" /><br/>
            
            <label>Nation</label><br/>
                <input type="text" /><br/>
            
            <label>Phone number</label><br/>
                <input type="text" /><br/>
            
            <label>Password</label><br/>
                <input type="password" /><br/>
            
            <label>Retype-Password</label><br/>
                <input type="password" /><br/><br/>
            
            <div className="formbutton">
                <button>submit</button><br/>
            </div>
        </form>
        </div>
    )
}
export default Form
