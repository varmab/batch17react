import React, {Component} from 'react'

class Users extends Component{
    constructor(){
        super();

        this.state={
            users:[],
            loading:true,
            error:false
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response)=>response.json())
        .then((users)=>{
            this.setState({
                users:users,
                loading:false
            })
        })
        .catch((err)=>{
            this.setState({
                error:true,
                loading:false
            })
        })
    }

    render(){
        if(this.state.loading==true){
            return(
                <React.Fragment>
                    <h1>Users</h1>
                    <p>Loading.. Please wait</p>
                </React.Fragment>
            )
        }
        if(this.state.error==true){
            return(
                <React.Fragment>
                    <h1>Users</h1>
                    <p>Sorry.. our backend is down. Try again later</p>
                </React.Fragment>
            )
        }
        return(
            <React.Fragment>
                <h1>Users</h1>
                <ul>
                {
                    this.state.users.map((user)=>{
                        return <li key={user.id}>{user.name}</li>
                    })
                }
                </ul>
            </React.Fragment>
        )
    }
}

export default Users;