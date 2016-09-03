class Topic extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.data.name}</h1>
        <p>{this.props.data.description}</p>
        <p>{this.props.data.posts.length} posts</p>
      </div>
    );
  }
}
