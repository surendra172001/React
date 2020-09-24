import React, { Component } from 'react';
import './style.css';
// import InputField from './InputField';

class Form extends Component {
    constructor() {
        super();

        this.state = {
            name: "",
            email: "",
            phoneNo: "",
            gender: "",
            password: ""
        }
    }

    handleNameChange = (event) => {
        this.setState({
            name: event.target.value,
        });
        event.preventDefault();
    }

    handleEmailChange = (event) => {
        this.setState({
            email: event.target.value,
        });
        event.preventDefault();
    }

    handlePhoneNoChange = (event) => {
        this.setState({
            phoneNo: event.target.value,
        });
        event.preventDefault();
    }

    handleGenderChange = (event) => {
        this.setState({
            gender: event.target.value,
        });
        event.preventDefault();
    }

    handlePasswordChange = (event) => {
        this.setState({
            password: event.target.value,
        });
        event.preventDefault();
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const alertString = `${this.state.name} ${this.state.email} ${this.state.phoneNo} ${this.state.gender} ${this.state.password}`
        alert(alertString);
    }

    render = () => {
        return (
            <div className="main-container">
                <p className="title">-----User Form------</p>
                <form className="form-container" onSubmit={this.handleSubmit}>
                    <input
                        className="input-style"
                        type="text"
                        placeholder="Enter name"
                        value={this.state.name}
                        onChange={this.handleNameChange}
                    />
                    <input
                        className="input-style"
                        type="email"
                        placeholder="Enter Email"
                        value={this.state.email}
                        onChange={this.handleEmailChange}
                    />
                    <input
                        className="input-style"
                        type="text"
                        placeholder="Enter Phone number"
                        value={this.state.phoneNo}
                        onChange={this.handlePhoneNoChange}
                    />
                    <select
                        style={{
                            background: "grey",
                        }}
                        className="input-style"
                        placeholder="Choose Gender"
                        value={this.state.gender}
                        onChange={this.handleGenderChange}
                    >
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                    <input
                        className="input-style"
                        type="password"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.handlePasswordChange}
                    />
                    {/* <InputField value={this.state.name} handler={this.handleNameChange} fieldName="name"/>
                    <InputField value={this.state.email} handler={this.handleEmailChange} type="email" fieldName="email" />
                    <InputField value={this.state.phoneNo} handler={this.handlePhoneNoChange} fieldName="phone number"/>
                    <select
                        style={{
                            background: "grey",
                        }}
                        className="input-style"
                        placeholder="Choose Gender"
                        value={this.state.gender}
                        onChange={this.handleGenderChange}
                    >
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                    <InputField value={this.state.password} handler={this.handlePasswordChange} type="password" fieldName="password"/> */}
                    <button
                        className="submit-btn"
                        type="submit"
                    >
                        Submit
                    </button>
                </form>
            </div>
        );
    }
}

export default Form;