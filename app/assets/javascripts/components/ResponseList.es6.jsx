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
      <div>
        <form id="response-form" onSubmit={this.handleSubmit.bind(this)} action={`/topics/${this.props.topic.id}/posts/${this.props.post.id}/responses`} method='post' >
          <input ref='responseContent' type='text' name='content' placeholder='content'/><br/>
          <input ref='userID' type='hidden' value={this.props.currentUser.id}/>
          <input type="submit" value="Create Response"/>
        </form><br/>
        {
          this.props.responseList.map((responselist, i) => {
            return ( <Response responseData={responselist.response} userData={responselist.user} key={i} topicData={this.props.topic} postData={this.props.post}/>);
          })
        }
      </div>
    );
  }
}
