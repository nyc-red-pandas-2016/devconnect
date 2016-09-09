class Post extends React.Component {

  render() {
    return (
      <tr>
        <td>
        <p>
        Post: <a className="post-link" href={`/topics/${this.props.topicData.id}/posts/${this.props.postData.id}/responses`}> {this.props.postData.title}</a>
        </p>
        <div className="post-author">Author: {this.props.userData.first_name}</div>
        </td>
      </tr>
    );
  }
}
