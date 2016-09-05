class Response extends React.Component {

  render() {
    return (
      <div>
        <ul>
          <li>Response: {this.props.responseData.content}</li>
          <li>Author: {this.props.userData.first_name}</li>
          <li>{this.props.responseData.updated_at}</li>
        </ul>
      </div>
    );
  }
}
