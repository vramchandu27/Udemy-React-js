import React, { Component } from 'react'

class Signin extends Component 
{
	constructor(props) 
    {
		super(props)

		this.state = {
			username: '',
			comments: '',
			topic: 'react'
		}
	}

handleUsernameChange = event => 
{
  this.setState({username: event.target.value})
}
handleCommentsChange = event =>
{
    this.setState({comments: event.target.value})
}
handleTopicChange = event =>
{
    this.setState({topic: event.target.value})
}
handleSubmit = event =>
{
    alert(`${this.state.username} `)
}
	

	render() {
		const { username, comments, topic } = this.state
		return (
			<form >
                <div className='box'>
				<div>
					<label>Username </label>
					<input
						type="text"
						value={username}
						onChange={this.handleUsernameChange}
					/>
				</div>
				<div>
					<label>Comments</label>
					<textarea
						value={comments}
						onChange={this.handleCommentsChange}
					/>
				</div>
				<div>
					<label>Topic</label>
					<select value={topic} onChange={this.handleTopicChange}>
						<option value="react">React</option>
						<option value="angular">Angular</option>
						<option value="vue">Python</option>
					</select>
				</div>
				<button type="submit" onClick={this.handleSubmit}>Submit</button>
                </div>
			</form>
		)
	}
}

export default Signin