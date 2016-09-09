class Response extends React.Component {

  render() {
    return (
      <tr>
        <td>
          <p>Response: {this.props.responseData.content}</p>
            <div className="post-author">Author: {this.props.userData.first_name} <br/> {this.props.responseData.updated_at}</div>
      </td>
      </tr>
    );
  }
}
