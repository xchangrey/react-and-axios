import React, { Component } from 'react';
import { Row, Mask, Col, Fa, View, Button } from 'mdbreact';

class PostItem extends Component {
  render(){
    return (
      <div>
        <Row>
          <Col lg="5">
            <View className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
              <img className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/img%20(27).jpg" alt="Sample img" />
              <a><Mask overlay="white-slight" /></a>
            </View>
          </Col>
          <Col lg="7">
            <a className="green-text"><h6 className="font-weight-bold mb-3"><Fa icon="cutlery" className="pr-2"></Fa>Food</h6></a>
            <h3 className="font-weight-bold mb-3 p-0"><strong>{this.props.post.title.toUpperCase()}</strong></h3>
            <p>{this.props.post.body} </p>
            <p>by <a><strong>{this.props.post.userId}</strong></a>, 19/08/2018</p>
            <Button color="success" size="md" className="waves-light ">Read more</Button>
          </Col>
        </Row>
        <hr className="my-5" />
      </div>
    )
  }
}

export default PostItem;

