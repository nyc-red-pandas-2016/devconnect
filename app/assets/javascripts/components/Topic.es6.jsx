class Topic extends React.Component {



  render() {
    return (

        <div className="col-md-4 col-sm-4 col-xs-12">
            <div className="x_panel">
              <div className="x_title">
                <h2><a href={`/topics/${this.props.data.id}/posts`}>{this.props.data.name}</a></h2>
                <ul className="nav navbar-right panel_toolbox">
                  <li><a className="collapse-link"><i className="fa fa-chevron-up"></i></a>
                  </li>
                  <li className="dropdown">
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><i className="fa fa-wrench"></i></a>
                    <ul className="dropdown-menu" role="menu">
                      <li><a href="#">Settings 1</a>
                      </li>
                      <li><a href="#">Settings 2</a>
                      </li>
                    </ul>
                  </li>
                  <li><a className="close-link"><i className="fa fa-close"></i></a>
                  </li>
                </ul>
                <div className="clearfix"></div>
              </div>
              <div className="x_content">
                <div className="dashboard-widget-content">

                  <ul className="list-unstyled timeline widget">
                    <li>
                      <div className="block">
                        <div className="block_content">
                          <img src=""/>
                          <p className="excerpt">{this.props.data.description}
                          </p>
                          <small>{this.props.data.posts.length} posts</small>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
    );
  }
}
