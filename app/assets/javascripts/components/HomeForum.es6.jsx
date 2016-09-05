class HomeForum extends React.Component {

  render () {
    return(
      <div>
        <div className="" role="tabpanel" data-example-id="togglable-tabs">
          <ul id="myTab" className="nav nav-tabs bar_tabs" role="tablist">
            <li role="presentation" className="active"><a href="#tab_content1" id="home-tab" role="tab" data-toggle="tab" aria-expanded="true">Trending Posts</a>
            </li>
            <li role="presentation" className=""><a href="#tab_content2" role="tab" id="profile-tab" data-toggle="tab" aria-expanded="false">Most Recent Posts</a>
            </li>
          </ul>
          <div id="myTabContent" className="tab-content">
            <div role="tabpanel" className="tab-pane fade active in" id="tab_content1" aria-labelledby="home-tab">
              <HomeForumTrendingList trending={this.props.trending} />
            </div>
            <div role="tabpanel" className="tab-pane fade" id="tab_content2" aria-labelledby="profile-tab">
              <HomeForumRecentList recent={this.props.recent}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


// Find top 10 posts
// Create custom method in Post model
// Call that method in Home controller in custom action
// Call that custom action with route in HomeForum
// Populate with simple list


// Find most recent 10 posts
