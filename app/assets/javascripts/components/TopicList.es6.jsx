class TopicList extends React.Component {
  render() {
    return (
      <div>
        {
          this.props.topicList.map((topic, i) => {
            return ( <Topic data={topic} key={i} />);
          })
        }
      </div>
    );
  }
}
