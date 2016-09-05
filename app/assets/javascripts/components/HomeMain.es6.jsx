class HomeMain extends React.Component {

  constructor() {
    super();
    this.state = {
      topTrending: [],
      mostRecent: []
    }
  }

  componentDidMount() {
    fetch('/home/index/forumupdate')
    .then((response) => {
      return response.json()
    }).then((response) => {
      this.setState({topTrending: response.trendingPost, mostRecent: response.recentPost})
    }).catch(function(err) {
      console.log(err);
    });
  }


  render () {
    return(
      <div>
        <h1>Components to be made</h1>
          <HomeForum trending={this.state.topTrending} recent={this.state.mostRecent}/>
          <p>HomeMentor</p>
          <p>HomeNews</p>
      </div>
    );
  }
}
