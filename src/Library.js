import React, { Component } from 'react'

class Library extends Component {
    constructor() {
        super();

        this.state = {
            books: [],
            title:'',
            author:''
        }

        this.onTitleChange=this.onTitleChange.bind(this);
    }

    onTitleChange(e){
        this.setState({
            title:e.target.value
        })
    }

    onAuthorChange=(e)=>{
        this.setState({
            author:e.target.value
        })
    }

    addBook=()=>{
        this.setState({
            books:[
                ...this.state.books,
                {
                    title:this.state.title,
                    author:this.state.author
                }
            ],
            title:'',
            author:''
        })
    }

    removeBook=(title)=>{
        this.setState({
            books:this.state.books.filter((currentBook)=>{
                return currentBook.title!=title;
            })
        })
    }

    render() {
        return (
            <React.Fragment>
                <h1>Library</h1>
                <input type="text" value={this.state.title} placeholder="Enter title" onChange={this.onTitleChange} name="title" />
                <input type="text" value={this.state.author} placeholder="Enter author" onChange={this.onAuthorChange} name="author" />
                <button onClick={this.addBook}>Add Book</button>
                <center>
                    <table>
                        <tr>
                            <td>Title</td>
                            <td>Author</td>
                            <td></td>
                        </tr>
                        {
                            this.state.books.map((book) => {
                                return <tr key={book.id}>
                                    <td>{book.title}</td>
                                    <td>{book.author}</td>
                                    <td><button onClick={
                                        ()=>{
                                            this.removeBook(book.title);
                                        }
                                    }>Delete</button></td>
                                </tr>
                            })
                        }

                    </table>
                </center>
            </React.Fragment>
        )
    }
}

export default Library;