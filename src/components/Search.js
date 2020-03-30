import React, { Component } from 'react'
import './css/Search.css'

class Search extends Component {
    constructor(props){
        super(props);
        this.state ={
            search:''
        }
    }
    
    sendText = () =>{
    //    const text = document.getElementById("search-input").value;
        const text= this.state.search;
        console.log(text);
        this.props.searching(text);
        // this.setState({
        //     search:''
        // })
    }

    handleChange = (target) =>{
        const {name, value} = target;
        this.setState({[name]: value});
    }
    
    render(){
        const {search} = this.state;
        return (
            <section id='search'>
                <input type="text" placeholder="Search" value={search} name="search" onChange={(e)=> this.handleChange(e.target)} />
                <button onClick={this.sendText}>Go</button>
            </section>
        )

    }
}
export default Search;