class TopicMain extends React.Component {

  constructor() {
    super();
    this.state = {
      topics: []
    }
  }

  componentDidMount(){
      fetch('/topics', {
    }).then((response) => {
      return response.json();
    }).then((topics) => {
      this.setState({topics: topics})
    }).catch(function(err) {
    	console.log(err);
    });
  }


  //
  // alltopics() {
  //   $.ajax({
  //     method: "GET",
  //     url: "/topics"
  //   }).done((response) => {
  //
  //       this.setState({topics: topics});
  //   })
  // }


  render() {
    return (
      <div>
        <h1>Topics</h1>
        <TopicList topicList={this.state.topics}/>
      </div>
    );
  }
}
