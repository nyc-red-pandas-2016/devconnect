class TopicMain extends React.Component {

  render() {
    return (
      <div>
        <h1>Topics</h1>
        <TopicList topicList={this.props.topicState} updateTopics={this.props.updateTopics}/>
      </div>
    );
  }
}
