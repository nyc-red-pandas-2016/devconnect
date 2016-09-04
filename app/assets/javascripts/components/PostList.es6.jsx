class PostList extends React.Component {

  
  render() {
    console.log('topic id render', this.props.topic.id);
    return(
      <div>
        {
          this.props.postList.map((postlist, i) => {
            return ( <Post postData={postlist.post} userData={postlist.user} key={i} topicData={this.props.topic} />);
          })
        }
      </div>
    );
  }
}
