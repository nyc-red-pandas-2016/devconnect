class Profile extends React.Component{
  constructor(){
    super();
      this.state={
        users: []
      }
  }
  componentDidMount(){
    this.setState({
      users: JSON.parse(this.props.user)
    })
  }
  render(){
    return(
      <div>
        {/* this will display the page title */}
       <Pagetitle />

       {/* bootstrap row section  */}
       <div className="row">
         <div className="col-md-12 col-sm-12 col-xs-12">
            <div className="x_panel">
            <div className="x_title">
              <h2>User Report <small>Activity report</small></h2>
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
               {/* display the profile stats */}
                <ProfileStats data={this.state.users} />
                <Profiletabs />
                </div>
            </div>
        </div>
       </div>

      </div>
    )
  }
}
