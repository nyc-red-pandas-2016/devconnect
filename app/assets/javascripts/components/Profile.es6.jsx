class Profile extends React.Component{
  constructor(){
    super();
      this.state={
        users: [],
        bio:'',
        posts:[],
        skills:[]
      }
  }
  componentDidMount(){
    axios('/users/data/json').then((response)=>{
      let user = response.data
      this.setState({
        users:user,
        bio:user.bio,
        posts:user.posts,
        skills:user.skills
      })
    }).catch((errors)=>{
      console.log(errors)
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
                <h2>Welcome to Devconnect </h2>
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
                  <Profileinfo data={this.state.users} />
                  <Profiletabs dataBio={this.state.bio} dataPosts={this.state.posts}/>
                  </div>
              </div>
          </div>
         </div>
         {/* user stats skills bages */}
         <div className="row">
              <Profilestats />
         </div>
      </div>
    )
  }
}
