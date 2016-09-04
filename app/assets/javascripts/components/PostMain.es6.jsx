class PostMain extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: []
    }
  }

  updatePosts(posts) {
    this.setState({posts: posts})
  }

  render() {
    debugger;
    return(
      <div>
        <h1>Posts!</h1>
        <PostList />
      </div>
    );
  }
}
