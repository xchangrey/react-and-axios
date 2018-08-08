import React, { Component } from 'react';
import axios from 'axios';
import { Container} from 'mdbreact';
import PostItem from './postitem';

class BlogPage extends Component {
  constructor(){
    super();

    this.state = {
      posts: [],
    }
  }


  getPosts() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        const posts = res.data;
        this.setState({
          posts: posts
        }, function(){
          console.log(posts);
        });
      })
  }

  componentDidMount() {
    this.getPosts();
  }

  render(){
    let postItems = this.state.posts.map(post => <PostItem key={post.id} post={post} />);
    return(
      <Container>
        <h2 className="h1-responsive font-weight-bold text-center my-5">Recent posts</h2>
        <p className="text-center w-responsive mx-auto mb-5">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit </p>
      {postItems}
      </Container>
      
    )
  }
}

export default BlogPage;