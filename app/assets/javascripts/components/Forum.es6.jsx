class Forum extends React.Component {
  constructor() {
    super();
    this.state = {
      topics: [],
      show_topics: true,
      show_topic_posts: false,
      show_post_responses: false
    }
    this.updateTopics = this.updateTopics.bind(this)
    this.handleTopicClick = this.handleTopicClick.bind(this)
  }

  updateTopics(topics) {
    this.setState({topics: topics})
  }

  handleTopicClick() {
    this.setState({show_topics: !this.state.show_topics, show_topic_posts: !this.state.show_topic_posts})
  }

  render() {
    return(
      <div>
        <TopicMain topicState={this.state.topics} updateTopics={this.updateTopics} topicClick={this.handleTopicClick}/>
      </div>
    );
  }
}
