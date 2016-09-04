class Topic extends React.Component {


  render() {
    return (
      <div>
        <h1 onClick={this.props.handleTopicClick}><a href={`/topics/${this.props.data.id}/posts`}>{this.props.data.name}</a></h1>
        <p>{this.props.data.description}</p>
        <p>{this.props.data.posts.length} posts</p>
      </div>
    );
  }
}
