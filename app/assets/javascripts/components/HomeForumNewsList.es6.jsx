class HomeForumNewsList extends React.Component {
  render() {
    return(
      <div>
        <ul className="messages">
          {
            this.props.news.map((post, i) => {
              return (<HomeForumNewsPost data={post} key={i}/>)
            })
          }
        </ul>
      </div>
    );
  }
}
