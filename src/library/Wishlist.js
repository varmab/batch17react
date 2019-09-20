import React, {Component} from 'react'

class Wishlist extends Component{
    constructor(props){
        super(props);

        this.state={
            books:props.books
        }
    }

    componentWillReceiveProps(newProps){
        this.setState({
            books:newProps.books
        })
    }

    render(){
        return(
            <React.Fragment>
                <h1>Wishlist</h1>
                <p>{this.state.books.length}</p>
                <ul>
                    {
                        this.state.books.map((book)=>{
                            return <li key={book.id}>{book.title}-{book.author}</li>
                        })
                    }
                </ul>
            </React.Fragment>
        )
    }
}

export default Wishlist;