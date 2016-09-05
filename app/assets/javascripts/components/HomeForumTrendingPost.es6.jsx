class HomeForumTrendingPost extends React.Component {
  render() {
    return(
        <tr>
          <td>
            {this.props.post_count}
          </td>
          <td>
            <a href={`/topics/${this.props.data.topic.id}/posts/${this.props.data.post.id}/responses`}>
              {this.props.data.post.title}</a>
          </td>
          <td>
            <a href={`/users/${this.props.data.user.id}/show`}>{this.props.data.user.first_name}</a>
          </td>
          <td className="hidden-phone">
            {this.props.data.responses}
          </td>
          <td className="vertical-align-mid">
            <a href={`/topics/${this.props.data.topic.id}/posts`}>{this.props.data.topic.name}</a>
          </td>
        </tr>
    );
  }
}
