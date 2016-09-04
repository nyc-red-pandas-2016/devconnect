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
      <div>
        <h1>Topic: {this.state.topic.name}</h1>
        <p>Topic Description: {this.state.topic.description}</p>
        <PostList currentUser={currentUser} updatePosts={this.updatePosts} postList={this.state.posts} topic={this.state.topic}/>
      </div>
    );
  }
}
