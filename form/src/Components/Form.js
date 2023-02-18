import React, { Component } from 'react'
class Form extends Component {
    constructor(props){
        super(props)
        this.state={
            userName:' ',
            commentsAdd:' '
        }
    }

    handleUsernameChange =event=>{this.setState({
        userName:event.target.value
    })
    }
    handlecommentsChange =event=>{this.setState({
        comments:event.target.value
    })
}
handletopicChange =event=>{this.setState({
    comments:event.target.value
})
}
handleSubmit =event=>{
    alert(`${this.state.userName} ${this.state.commentsAdd} ${this.state.topic}`)
    event.preventDefault();
}
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
            <div>
             <label>Computer Language</label>
             <input type="text" value={this.state.userName} onChange={this.handleUsernameChange}/>
            </div>
            <div>
                <label>Comments</label>
                <textarea value={this.state.commentsAdd} onChange={this.handleCommentsChange}/>
            </div>

            <div>
                <label>Topic</label>
                <select value={this.state.topic} onChange={this.handleUsernameChange} >
                    <option value="react">React</option>
                    <option value="angular">Angular</option>
                    <option value="vue">Vue</option>
                </select>
            </div>
            <button type="text">Submit</button>
            </form>
        )
    }
}

export default Form;
