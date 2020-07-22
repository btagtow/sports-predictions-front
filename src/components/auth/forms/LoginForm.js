import React from 'react'

const loginURL = 'http://localhost:3000/login'

class Login extends React.Component {
    state = {
        username: "",
        password: "",
    }

    handleChange = event => {
        const { name, value } = event.target
        this.setState({ [name] : value })
    }

    handleSubmit = event => {
        event.preventDefault()

        fetch(loginURL, {
            method: "POST", 
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(this.state)
        })
        .then(response => response.json())
        .then(result => {
            if (result.status === 401) {
                throw new Error("Something wrong with username or password")
            } else {
                this.setState({error: ""})
                localStorage.setItem("token", result.token)
            }
        })
        // //ANOTHER POSSIBILITY!
        // .then(result => {
        //     localStorage.setItem("token", result.token)
        // })
        .catch(error => this.setState({error: error.message}))

    }
    render() {
        let username = this.state.username
        let password = this.state.password

        return (
            <div className="form">
                <form className = "login" onSubmit={this.handleSubmit}>
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
    
                        <input type="submit" value="login" />
                        {this.state.error ? <p>{this.state.error}</p> : null}
                </form>
            </div>
        )
    }
}

export default Login