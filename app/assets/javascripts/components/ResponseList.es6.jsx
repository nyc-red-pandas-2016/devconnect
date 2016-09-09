class ResponseList extends React.Component {

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
        content: this.refs.responseContent.value,
        user_id: this.refs.userID.value
      })
    }).then((response) => response.json())
    .then((new_response) => {
      this.props.updateResponses(new_response)
      this.refs.responseContent.value = ""
    }).catch((error) => {
      console.log(error);
    });
  }

  render() {
    return(
      <div className="row">
        <div className="col-md-12 col-sm-12 col-xs-12">
        <div className="x_panel">
        <form id="response-form"  className="form-horizontal form-label-left" onSubmit={this.handleSubmit.bind(this)} action={`/topics/${this.props.topic.id}/posts/${this.props.post.id}/responses`} method='post' >
        <div className="form-group">
          <div className="col-md-4 col-sm-4 col-xs-12">
          <textarea ref='responseContent' className="form-control" type='text' name='content' placeholder='content'></textarea>
          </div>
        </div>
          <input ref='userID' type='hidden' value={this.props.currentUser.id}/>
          <div className="form-group">
            <div className="col-md-4 col-sm-4 col-xs-12">
          <input type="submit" className="btn btn-primary" value="Create Response"/>
            </div>
            </div>
        </form>
        <table className="table table-striped">
          <tbody className="table table-striped">
        {
          this.props.responseList.map((responselist, i) => {
            return ( <Response responseData={responselist.response} userData={responselist.user} key={i} topicData={this.props.topic} postData={this.props.post}/>);
          })
        }
          </tbody>
        </table>
      </div>
      </div>
      </div>
    );
  }
}
