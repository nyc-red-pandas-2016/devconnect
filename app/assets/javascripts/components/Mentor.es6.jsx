class Mentor extends React.Component {
  viewProfile(){}

  render(){
    debugger;
    let {id,bio,first_name,last_name,email,location,status,experience} = this.props.data
    var skills = this.props.data.skills

    return(
      <div className="col-md-4 col-sm-4 col-xs-12 profile_details">
        <div className="well profile_view">
          <div className="col-sm-12">
            <h4 className="brief"><i>{location}</i></h4>
            <div className="left col-xs-7">
              <h2>{first_name} {last_name}</h2>
              <p><strong>email: </strong>{email}</p>
              <p><strong>status: </strong>{status}</p>
              <p><strong>experience: </strong>{experience}</p>
              <ul>
                {skills ? skills.map((skill,index)=>{
                  return(
                    <li key={index}>
                      {skill.name}
                    </li>
                  )
                })
                : null
                }
              </ul>
              </div>

              <div className="right col-xs-5 text-center">
              <img src="/assets/profilePic.png" className="img-circle img-responsive"/>
              </div>
          </div>
            <div className="col-xs-12 bottom text-center">
                <a className="btn btn-success btn-xs" onClick={this.viewProfile.bind(this)} href={`users/${id}/show`}>Visit Profile</a>
            </div>
            {/* end of profile_view */}
          </div>
          {/* end of col-md */}
      </div>

    )
  }
}
