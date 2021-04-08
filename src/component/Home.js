import React,{ Component } from 'react'
import Axios from 'axios'
import {Link} from 'react-router-dom'
import ninja from '../ninja.jpg'
import { connect } from 'react-redux'

class Home extends Component {
  state = {
    posts : [ ]
  }
  componentDidMount(){
    Axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res => {
      console.log(res)
      this.setState({
        posts: res.data.slice(0,10)
      })
        }) 
  }
  render(){
    console.log(this.props)
const {posts} = this.props; //probs
const postList =posts.length ? (
  posts.map(post => {
    return (
      <div className="post card" key={post.id}>
        <img src={ninja} alt="ninja"/>
<div className="card-content"> 
  
  <Link to={'/' + post.id}> 
  <span className="card-title red-text"> {post.title} </span>
  </Link>
   
  <p>{post.body}</p>
</div>
      </div>
    )

  })
) : (
  <div className="center">NO Posts yet</div>
)

    return(
      <div className="container home">
  
   {postList}
</div>
)
  }
  
  
}

const mapStateToProps =(state) => {
  return {
    // return diff properties 
    posts: state.posts

  }

}

export default connect(mapStateToProps)(Home)