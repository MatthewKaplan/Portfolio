import React, { Component } from 'react';

export default class Contact extends Component {
	state = {
		senderName: '',
		senderEmail: '',
		senderMessage: '',
		usernameActive: false,
		userEmailActive: false
	};

	inputHandler = e => {
		let value = e.target.value;
		let key = e.target.classList;
		this.setState({
			[key]: value
		});
	};

	render () {
		const { senderName, senderEmail, senderMessage } = this.state;
		return (
			<div className="contact-component">
				<img className="bg-image" src={require('../../assets/tree-tops.jpg')} alt="Space" />
				<div className="overlay" />
				<article>
					<div className="contact-intro">
						<h3>Let's get in touch!</h3>
					</div>
				</article>
				<form action={`https://formspree.io/kaplan.matthew.p@gmail.com`} method="POST" className="contact-form">
					<div className="input-container">
						<label htmlFor="sender-name">FULL NAME:</label>
						<input
							value={senderName}
							onChange={this.inputHandler}
							name="senderName"
							className="senderName"
							id="sender-name"
							type="text"
							required
						/>
						<label htmlFor="sender-email">EMAIL:</label>
						<input
							value={senderEmail}
							name="senderEmail"
							className="senderEmail"
							onChange={this.inputHandler}
							id="sender-email"
							type="email"
							required
						/>
						<label htmlFor="message">MESSAGE:</label>
						<textarea
							value={senderMessage}
							className="senderMessage"
							name="senderMessage"
							onChange={this.inputHandler}
							id="message"
							type="text"
						/>
						<input className="submit-btn" type="submit" value="Send" />
					</div>
				</form>
			</div>
		);
	}
}
