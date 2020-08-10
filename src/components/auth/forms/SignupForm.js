import React from 'react'

const usersURL = 'http://localhost:3000/users'

class Signup extends React.Component {
    state = {
        username: "",
        password: "",
        betting_points: 100
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
        .then(result => {
            // localStorage.setItem("token", result.token)
            console.log(result)
            if (result.message.username){
                alert(`username ${result.message.username}`)
            } else if (result.message.password){
                alert(`password ${result.message.password}`)
            } else {
                alert(result.message)
                localStorage.setItem("token", result.token) 
                localStorage.setItem("user_id", result.user_id) 
                this.props.setisLoginShown(true)
            }
        })
        event.target.reset()


    }
    render() {

        const { username, password } = this.state

        return (
            <div className="form">

                <form className = "auth-form signup" onSubmit={this.handleSubmit}>
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

                    <input type="submit" value="sign up!" className="auth-button" />
                </form>
            </div>
            
        )
    }
}

export default Signup