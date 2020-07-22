import React from 'react'

const usersURL = 'http://localhost:3000/users'

class Signup extends React.Component {
    state = {
        username: "",
        password: ""
    }

    handleChange = event => {
        const { name, value } = event.target
        this.setState({ [name] : value })
    }

    handleSubmit = event => {
        event.preventDefault()

        fetch(usersURL, {
            method: "POST", 
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({user: this.state})
        })
        .then(response => response.json())
        .then(result => localStorage.setItem("token", result.token))
        event.target.reset()


    }
    render() {

        const { username, password } = this.state

        return (
            <div className="form">

                <form className = "signup" onSubmit={this.handleSubmit}>
                    <input
                        type="username"
                        name="username"
                        value={username}
                        placeholder="username"
                        onChange = {this.handleChange}
                    />
                    <input
                        type="password"
                        name="password"
                        value={password}
                        placeholder="password"
                        onChange = {this.handleChange}

                    />

                    <input type="submit" value="sign up!" />
                </form>
            </div>
            
        )
    }
}

export default Signup