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
          <table className="table table-striped">
            <tbody className="table table-striped">
                {
                  this.props.postList.map((postlist, i) => {
                    return ( <Post postData={postlist.post} userData={postlist.user} key={i} topicData={this.props.topic} />);
                  })
                }
            </tbody>
          </table>
          <form id="post-form" className="form-horizontal form-label-left" onSubmit={this.handleSubmit.bind(this)} action={`/topics/${this.props.topic.id}/posts`} method='post' >
            <div className="form-group">
            <div className="col-md-4 col-sm-4 col-xs-12">
              <input className="form-control" ref='postTitle' type='text' name='title' placeholder='title'/>
            </div>
            </div>
            <div className="form-group">
            <div className="col-md-4 col-sm-4 col-xs-12">
                <textarea className="form-control" ref='postContent' type='text' name='content' placeholder='content'></textarea>
            </div>
            </div>
            <div className="form-group">
              <input ref='userID' type='hidden' value={this.props.currentUser.id}/></div>
              <div className="form-group">
              <input className="btn btn-primary" type="submit" value="Create Post"/>
              </div>
          </form>
      </div>
    );
  }
}
