import React from 'react'

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
                localStorage.setItem("token", result.token) 
                localStorage.setItem("user_id", result.user_id) 
                this.props.toggleIsLoggedIn()
                this.props.setUserProfile(result.user)
            } else {
                alert("Username or password incorrect")
            }
                
        }) 
        // localStorage.setItem("token", result.token))
        //     }  else  {
        //         alert(response.message)
        //         localStorage.clear()
        //     }
        //         // alert(response.message) 
        //         // this.setState({username: "", password: ""})
        // })

            // if (response.status === 200) {
            //     this.setState({error: ""})
            //     localStorage.setItem("token", response.token)
            //     // return response.json()
            // } else if (response.status === 401) {
            //     throw new Error("Something wrong with username or password")
            // } else {
            //     console.log(response.token) 
            // }
        //ANOTHER POSSIBILITY!
        // localStorage.setItem("token", result.token)
        // .then(result => {
        //     console.log(result)
        //     localStorage.setItem("token", result.token)
        // })
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

export default Login
