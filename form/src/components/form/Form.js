import React from 'react';
import './style.css';

function Form() {
    const handleSubmit = (event) => {
        alert(event.target.value);
    }
    return (
        <div className="main-container">
            <p className="title">-----User Form------</p>
            <form className="form-container">
                <input
                    className="input-style"
                    type="text"
                    placeholder="Enter name"
                />
                <input
                    className="input-style"
                    type="email"
                    placeholder="Enter Email"
                />
                <input
                    className="input-style"
                    type="text"
                    placeholder="Enter Phone number"
                />
                <select id="gender" name="gender" className="input-style" placeholder="Choose Gender">
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
                <input
                    className="input-style"
                    type="password"
                    placeholder="Password"
                />
                <button
                    className="submit-btn"
                    onClick={handleSubmit} type="submit"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}

export default Form;