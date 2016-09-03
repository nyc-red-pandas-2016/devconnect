class App extends React.Component {
  constructor() {
    super();
    this.state = {
      topics: []
    }
    this.updateTopics = this.updateTopics.bind(this)
  }

  updateTopics(topics) {
    this.setState({topics: topics})
  }

  render() {
    return(
      <div>
        <TopicMain topicState={this.state.topics} updateTopics={this.updateTopics}/>
      </div>
    );
  }
}
