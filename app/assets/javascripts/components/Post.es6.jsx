class Post extends React.Component {

  render() {
    return (
      <div>
        <ul>
          <li><a href={`/topics/${this.props.topicData.id}/posts/${this.props.postData.id}/responses`}>Post: {this.props.postData.title}</a></li>
          <li>Author: {this.props.userData.first_name}</li>
        </ul>
      </div>
    );
  }
}
