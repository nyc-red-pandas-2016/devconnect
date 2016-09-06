class Mentor extends React.Component {
  render(){

    let {bio,first_name,last_name,email,location,status,experience} = this.props.data

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
            </div>

            <div className="right col-xs-5 text-center">
            <img src="/assets/profilePic.png" className="img-circle img-responsive"/>
            </div>
          </div>

          </div>
      </div>

    )
  }
}
