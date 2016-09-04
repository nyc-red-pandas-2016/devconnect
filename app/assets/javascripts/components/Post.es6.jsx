class Post extends React.Component {

  render() {
    return (
      <div>
        <ul>
          <li>Post: {this.props.postData.title}</li>
          <li>Author: {this.props.userData.first_name}</li>
        </ul>
      </div>
    );
  }
}
