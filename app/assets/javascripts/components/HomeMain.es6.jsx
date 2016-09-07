class HomeMain extends React.Component {

  constructor() {
    super();
    this.state = {
      topTrending: [],
      mostRecent: [],
      news: []
    }
  }

  componentDidMount() {
    fetch('http://devconnect-admin.herokuapp.com/news')
    .then((response) => {
      return response.json()
    }).then((response) => {
      this.setState({news: response})
    }).catch(function(err) {
      console.log(err);
    });

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
        <h4>Welcome to DevConnect!</h4>
          <HomeForum trending={this.state.topTrending} recent={this.state.mostRecent} news={this.state.news}/>
          <p>HomeMentor</p>
      </div>
    );
  }
}
