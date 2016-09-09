class Profile extends React.Component{
  constructor(){
    super();
      this.state={
        users: [],
        bio:'',
        posts:[],
        skills:[],
        endorsed_skill_count: []
      }
      this.updateUserSkills = this.updateUserSkills.bind(this);
      this.parseEndorsedSkills = this.parseEndorsedSkills.bind(this);
  }

  parseEndorsedSkills(skills, endorsements) {
    endorsed_skills = {};
    for(i = 0; i < skills.length; i++) {
      var skill = skills[i]
      var count = 0

      for(j = 0; j < endorsements.length; j++) {
        var endorsement = endorsements[j]

        if (endorsement.skill_id === skill.id) {
          count++;
        }
      }
      endorsed_skills[skill.name] = count;
    }
    this.setState({endorsed_skill_count: endorsed_skills});
  }


  componentWillMount() {
    this.parseEndorsedSkills(this.props.skills, this.props.endorsements);
  }


  componentDidMount(){

    this.setState({
      users:this.props.user,
      bio:this.props.user.bio,
      posts:this.props.posts,
      skills:this.props.skills
    })

  }

  updateUserSkills(response) {
    this.setState({skills: response.skills, endorsed_skill_count: this.parseEndorsedSkills(response.skills, response.endorsements)});
  }



  render(){
    return(
      <div>
          {/* this will display the page title */}
         <Pagetitle userName={this.props.user.first_name} />
         {/* bootstrap row section  */}
         <div className="row">
           <div className="col-md-12 col-sm-12 col-xs-12">
              <div className="x_panel">
              <div className="x_title">
                <h2>Welcome to Devconnect </h2>
                <ul className="nav navbar-right panel_toolbox">
                  <li><a className="collapse-link"><i className="fa fa-chevron-up"></i></a>
                  </li>
                  {/*<li className="dropdown">
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><i className="fa fa-wrench"></i></a>
                    <ul className="dropdown-menu" role="menu">
                      <li><a href="#">Settings 1</a>
                      </li>
                      <li><a href="#">Settings 2</a>
                      </li>
                    </ul>
                  </li>*/}
                  {/*<li><a className="close-link"><i className="fa fa-close"></i></a>
                  </li>*/}
                </ul>
                <div className="clearfix"></div>
              </div>
                <div className="x_content">
                 {/* display the profile stats */}
                  <Profileinfo contactInfo={this.props.contact_info} dataCurrent={this.props.current_user} dataOther={this.props.user} data={this.state.users} avatar={this.props.avatar}/>
                  <Profiletabs  dataBio={this.state.bio} dataPosts={this.state.posts}/>
                  </div>
              </div>
          </div>
         </div>
         {/* user stats skills bages */}
         <div className="row">
              <Profilestats userSkills={this.state.skills} current_user={this.props.current_user} userProfile={this.props.user.id} updateUserSkills={this.updateUserSkills} endorsed_skill={this.state.endorsed_skill_count} userGoals={this.props.user.goals}/>
              <Profilebadges />
         </div>
      </div>
    )
  }
}
