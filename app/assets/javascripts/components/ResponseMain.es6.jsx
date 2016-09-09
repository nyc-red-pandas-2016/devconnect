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
      <div className="row">
        <div className="col-md-12 col-sm-12 col-xs-12">
        <div className="x_panel">
        <div className="x_title">
        <h3>Post: {this.state.post.title}</h3>
        <p> Content: {this.state.post.content}</p>
        </div>
        <ResponseList currentUser={currentUser} updateResponses={this.updateResponses} responseList={this.state.responses} post={ this.state.post} postUser={this.state.postUser} topic={this.state.topic}/>
      </div>
      </div>
      </div>
    );
  }
}
