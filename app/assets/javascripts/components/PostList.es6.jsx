class PostList extends React.Component {

  componentDidMount(){
      fetch('/topics/:topic_id/posts/json')
      .then((response) => {
      return response.json();
    }).then((topics) => {
      this.props.updateTopics(topics);
    }).catch(function(err) {
      console.log(err);
    });
  }


  render() {
    return(
      <div>Hello</div>
    );
  }
}
