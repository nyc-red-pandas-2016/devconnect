class TopicList extends React.Component {

  componentDidMount(){
      fetch('/topics/json')
      .then((response) => {
      return response.json();
    }).then((topics) => {
      this.props.updateTopics(topics);
    }).catch(function(err) {
      console.log(err);
    });
  }

  render() {
    return (
      <div className="row">
        {
          this.props.topicList.map((topic, i) => {
            return ( <Topic data={topic} key={i} handleTopicClick={this.props.handleTopicClick} />);
          })
        }
      </div>
    );
  }
}
