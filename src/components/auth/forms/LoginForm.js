import React from 'react'
import { connect } from 'react-redux'

const loginURL = 'http://localhost:3000/login'

class Login extends React.Component {
    state = {
        username: "",
        password: "",
        error: ""
    }

    handleChange = event => {
        const { name, value } = event.target
        this.setState({ [name] : value })
    }

    addUser = (user) => {
        this.props.logIn(user)
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
        .then(response => {
            return response.status === 200 ? response.json() : response.status
        })
        .then(result => {
            if (result.token){
                this.addUser(result.user)
                localStorage.setItem("token", result.token) 
                localStorage.setItem("user_id", result.user_id) 
            } else {
                alert("Username or password incorrect")
            }
                
        }) 

        .catch(error => this.setState({error: error.message}))

    }
    handleError = () => {
        return (
            this.state.error ? <p className="error-message">{this.state.error}</p> : null
        )
    }
    render() {

        const { username, password } = this.state

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

                    <input type="submit" value="login" className="auth-button"/>
                    {this.state.error ? <p className="error-message">{this.state.error}</p> : null}
                </form>
            </div>
            
        )
    }
}

function mapStateToProps(state){
    return {
        isLoggedIn: state.isLoggedIn
    }
}

function mapDispatchToProps(dispatch){
    return {
        logIn: (user) => dispatch({type: "LOG_IN", payload: user})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
