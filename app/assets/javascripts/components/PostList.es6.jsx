class PostList extends React.Component {



  handleSubmit(event) {
    event.preventDefault();

    fetch(event.target.action, {
      method: event.target.method,
      headers: {
        'dataType' : 'application/json',
        'Accept' : 'application/json',
        'Content-Type' : 'application/json',
        'Access-Control-Allow-Origin' : 'http://localhost:3000'
      },
      body: JSON.stringify({
        title: this.refs.postTitle.value,
        content: this.refs.postContent.value,
        user_id: this.refs.userID.value
      })
    }).then((response) => response.json())
    .then((new_post) => {
      this.props.updatePosts(new_post)
      this.refs.postTitle.value = ""
      this.refs.postContent.value = ""
    }).catch((error) => {
      console.log(error);
    });
  }

  render() {
    return(
      <div>
        <form id="post-form" onSubmit={this.handleSubmit.bind(this)} action={`/topics/${this.props.topic.id}/posts`} method='post' >
          <input ref='postTitle' type='text' name='title' placeholder='title'/><br/>
          <input ref='postContent' type='text' name='content' placeholder='content'/><br/>
          <input ref='userID' type='hidden' value={this.props.currentUser.id}/>
          <input type="submit" value="Create Post"/>
        </form><br/>
        {
          this.props.postList.map((postlist, i) => {
            return ( <Post postData={postlist.post} userData={postlist.user} key={i} topicData={this.props.topic} />);
          })
        }
      </div>
    );
  }
}
