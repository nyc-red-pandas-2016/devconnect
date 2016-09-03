class TopicMain extends React.Component {

  constructor() {
    super();
    this.state = {
      topics: []
    }
  }

  

  render() {
    return (
      <div>
        <h1>Topics</h1>
        <TopicList />
      </div>
    );
  }
}
