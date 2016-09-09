class PostMain extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      topic: []
    }
    this.updatePosts = this.updatePosts.bind(this);
  }

  componentDidMount(){
    var topicID = JSON.parse(this.props.topic).id

    fetch(`/topics/${topicID}/posts/json`)
      .then((response) => {
      return response.json();
    }).then((response) => {
      this.setState({topic: response.topic, posts: response.posts})
    }).catch(function(err) {
      console.log(err);
    });
  }

  updatePosts(post) {
    this.setState({posts: post.posts})
  }

  render() {
    var currentUser = this.props.currentUser
    return(
      <div className="row">
        <div className="col-md-12 col-sm-12 col-xs-12">
        <div className="x_panel">
        <div className="x_title">
        <h3>Topic: {this.state.topic.name}</h3>
        <p>Topic Description: {this.state.topic.description}</p>
        </div>
        <PostList currentUser={currentUser} updatePosts={this.updatePosts} postList={this.state.posts} topic={this.state.topic}/>
      </div>
      </div>
      </div>
    );
  }
}
