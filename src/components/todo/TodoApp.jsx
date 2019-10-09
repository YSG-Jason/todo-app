import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'


class TodoApp extends Component{
    render() {
        return (
            <div className='TodoApp'>
                <Router>
                    <>
                    <HeaderComponent></HeaderComponent>
                        <Switch>
                            <Route path="/" exact component={LoginComponent} />
                            <Route path="/login" component={LoginComponent} />
                            <Route path="/welcome/:name" component={WelcomeComponent} />
                            <Route path="/todos" component={ListtodosComponent} />
                            <Route path="/logout" component={LogoutComponent} />
                            <Route component={ErrorComponent} />
                        </Switch>
                        <FooterComponent></FooterComponent>
                    </>
                </Router>


                {/* <LoginComponent></LoginComponent> */}
            </div>
        )
    }
}

class HeaderComponent extends Component {
    render() {
        return(
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href="http://www.helixdc.com" className="navbar-brand">in28Minutes</a></div>
                    <ul className="navbar-nav">
                        <li ><Link to="/welcome" className="nav-link">Home</Link></li>
                        <li ><Link to="/todos" className="nav-link">Todos</Link></li>
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        <li ><Link to="/login" className="nav-link">Login</Link></li>
                        <li ><Link to="/logout" className="nav-link">Logout</Link></li>
                    </ul>
                </nav>
            </header>
            // <div>
            //     Header <hr/>
            // </div>
        )
        
    }
}
class FooterComponent extends Component {
    render() {
        return(
            <div>
               <footer className="footer">
                   <span className="text-muted">All Rights Reserved 2019 @Helix Design & Creation Inc.</span>
               </footer>
            </div>
        )
        
    }
}

class ListtodosComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            todos :
            [ 
                {id: 1, descriptions : 'Learn React', done:false, targetDate: new Date()},
                {id: 2, descriptions : 'Learn Spring', done:false, targetDate: new Date()},
                {id: 3, descriptions : 'Go to Scotland', done:false, targetDate: new Date()}
            ]
        }
    }
    
    
    render() {
        return (
        <div>
            <h1>List Todos</h1>
            <div className="container">
                <table className="table table-dark table-striped table-hover">
                    <thead>
                        <tr>
                            <th>
                                ID
                            </th>
                            <th scope="col">Description</th>
                            <th scope="col">Is Completed?</th>
                            <th scope="col">Target Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.todos.map(
                                todo =>
                                    <tr>
                                        <td>{todo.id}</td>
                                        <td>{todo.descriptions}</td>
                                        <td>{todo.done.toString()}</td>
                                        <td>{todo.targetDate.toString()}</td>
                                    </tr>
                            )
                            
                        }
                    </tbody>
                </table>
            </div>
        </div>
        )
    }
}

class LogoutComponent extends Component{
    render() {
        return (
            <div>
                <h1>You are Logged Out</h1>
                <div className="container">
                    Thank you for using Todo
                </div>
            </div>
        )
    }
}

class WelcomeComponent extends Component {
    render() {
        return (
            <>
                <h1>Welcome!</h1><br/>
                <div>Welcome back {this.props.match.params.name}</div><br/>
                <div>You can manage your list <Link to='/todos'> Here</Link></div>
            </>
        )
        
        // <div>Welcome {this.props.match.params.name}
        // <br></br>
        // Manage your List <Link to='/todos'>Here</Link>
        // </div>

    }
}

function ErrorComponent() {
    return <div>You have reached an abyss, please contact support!</div>
}

class LoginComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: 'in28minutes',
            password: '',
            hasLoginFailed: false,
            showSuccessMessage: false
        }
        // this.handleUsernameChange = this.handleUsernameChange.bind(this)
        // this.handlePasswordChange = this.handlePasswordChange.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)
    }

    handleChange(event) {
        //console.log(this.state);
        this.setState(
            {
                [event.target.name]: event.target.value
            }
        )
    }

    // handleUsernameChange(event) {
    //     console.log(event.target.value);
    //     this.setState(
    //         {
    //             [event.target.name]: event.target.value
    //         }
    //     )
    // }

    // handlePasswordChange(event) {
    //     //console.log(event.target.value);
    //     this.setState({password: event.target.value})
    // }

    loginClicked() {
        //in28minutes,booger
        if(this.state.username==="in28minutes" && this.state.password==='booger')
        {
            this.props.history.push(`/welcome/${this.state.username}`)
            
            // console.log('Successful')
            // this.setState({showSuccessMessage:true})
            // this.setState({hasLoginFailed:false})

        }
            
        else{
            console.log('Failed!')
            this.setState({hasLoginFailed: true})
            this.setState({showSuccessMessage: false})
        }
        
    }

    render() {
        return(
            <div>
                <h1>HelixDC Todo Login</h1>
                <div className="container">
                    User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/><br/>
                    Password: <input type="password" name="password" value= {this.state.password} onChange={this.handleChange}/><br></br>
                    <button type="button" className="btn btn-primary" onClick={this.loginClicked}>Login</button>
                    {/* <ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed}></ShowInvalidCredentials>
                    <ShowSuccessMessage showSuccessMessage={this.state.showSuccessMessage} /> */}
                    {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
                    {this.state.showSuccessMessage && <div>Login Successful</div>}
                </div>
            </div>  
        )
    }
}

// function ShowInvalidCredentials(props){
//     if(props.hasLoginFailed) {
//         return <div>Invalid Credentials</div>
//     }

//     return null
// }

// function ShowSuccessMessage(props){
//     if(props.showSuccessMessage){
//         return <div>
//             Login Successful!
//         </div>
//     }

//     return null
// }


export default TodoApp