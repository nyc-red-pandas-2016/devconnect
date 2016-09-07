class Profilestats extends React.Component{

  handleSkillClick(event) {
    event.preventDefault();
    debugger;
  }

  render(){
    return(
      <div className="col-md-4 col-sm-4 col-xs-12">
          <div className="x_panel">
            <div className="x_title">
              <h2>User Stats</h2>
              <div className="clearfix"></div>
            </div>
            <div className="x_content">
              <div className="dashboard-widget-content">

                <ul className="list-unstyled timeline widget">
                  <li>
                    <div className="block">
                      <div className="block_content">
                        <h3 className="excerpt">Skills</h3>
                        {/*<small>skill test</small>*/}
                      </div>

                      {
                        this.props.userSkills.map((skill, i) => {
                          return (<a ref='skill' onClick={this.handleSkillClick.bind(this)} key={i} href="/users/endorsement" className="btn btn-success"><i className="fa m-right-xs"></i>{skill.name}</a>)
                        })
                      }

                    </div>
                  </li>
                </ul>
                <ul className="list-unstyled timeline widget">
                  <li>
                    <div className="block">
                      <div className="block_content">
                        <h3 className="excerpt">Goals</h3>
                        <p className="excerpt">Short paragraph about goals here</p>
                        {/*<small>skill test</small>*/}
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
    )
  }
}
