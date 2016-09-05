class ResponseMain extends React.Component {
  constructor() {
    super();
    this.state = {
      responses: [],
      post: [],
      postUser: [],
      topic: []
    }
    this.updateResponses = this.updateResponses.bind(this);
  }

  componentDidMount(){
    var topicID = JSON.parse(this.props.topic).id
    var postID = JSON.parse(this.props.post).id

    fetch(`/topics/${topicID}/posts/${postID}/responses/json`)
      .then((response) => {
      return response.json();

    }).then((response) => {
      this.setState({topic: response.topic, post: response.post, postUser: response.user, responses: response.responses })

    }).catch(function(err) {
      console.log(err);
    });
  }

  updateResponses(post) {
    this.setState({responses: post.responses, post: post.post})
  }

  render() {
    var currentUser = this.props.currentUser
    return(
      <div>
        <h1>Post: {this.state.post.title}</h1>
        <p> Content: {this.state.post.content}</p>
        <ResponseList currentUser={currentUser} updateResponses={this.updateResponses} responseList={this.state.responses} post={ this.state.post} postUser={this.state.postUser} topic={this.state.topic}/>
      </div>
    );
  }
}
