class HomeForumTrendingPost extends React.Component {
  render() {
    return(
        <tr>
          <td>{this.props.post_count}</td>
          <td>{this.props.data.post.title}</td>
          <td>{this.props.data.user.first_name}</td>
          <td className="hidden-phone">{this.props.data.responses}</td>
          <td className="vertical-align-mid">{this.props.data.topic.name}</td>
        </tr>
    );
  }
}
