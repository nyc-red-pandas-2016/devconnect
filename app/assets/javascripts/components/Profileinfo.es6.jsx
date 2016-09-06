class Profileinfo extends React.Component{

  handleRequestMentor(event) {
    event.preventDefault();
    var profile_regex = RegExp(/users.*([^/]+)?$/)
    var mentor = profile_regex.exec(this.refs.profileData.baseURI)[0]

    fetch('/users/requestmentor', {
      method: "POST",
      headers: {
        'dataType' : 'application/json',
        'Accept' : 'application/json',
        'Content-Type' : 'application/json',
        'Access-Control-Allow-Origin' : 'http://localhost:3000'
      },
      body: JSON.stringify({
        mentor_id: mentor,
        user_id: this.props.data.id
      })
    }).then((response) => response.json())
    .then((response) => {
    }).catch((error) => {
      console.log(error);
    });
  }



  render(){
    let {id,first_name,last_name,location,status,is_mentor} = this.props.data
    return(
                <div className="col-md-3 col-sm-3 col-xs-12 profile_left">

                  <div className="profile_img">

                    {/* <!-- end of image cropping --> */}
                    <div id="crop-avatar">
                      {/* <!-- Current avatar --> */}
                      <img className="img-responsive avatar-view" src="https://s-media-cache-ak0.pinimg.com/236x/40/00/d7/4000d7ed061f540a0180b6181184686d.jpg" alt="Avatar" title="Change the avatar"/>

                      {/* <!-- Loading state --> */}
                      <div className="loading" aria-label="Loading" role="img" tabIndex="-1"></div>
                    </div>
                    {/* <!-- end of image cropping --> */}

                  </div>
                  <h3>{first_name} {last_name}</h3>

                  <ul className="list-unstyled user_data">
                    <li><i className="fa fa-map-marker user-profile-icon"></i> {location}
                    </li>

                    <li>
                      <i className="fa fa-briefcase user-profile-icon"></i> {status}
                    </li>

                    <li className="m-top-xs">
                      <i className="fa fa-coffee"></i>
                      Mentoring: { is_mentor ? "Yes" : "Not at the moment" }
                    </li>
                  </ul>

                  { this.props.dataOther==this.props.dataCurrent ?
                  <a href={`/users/edit`} className="btn btn-success"><i className="fa fa-edit m-right-xs"></i>Edit Profile</a>
                  {/*Upload avatar*/}
                  <a href='/users/avatar' className="btn btn-success"><i className="fa fa-edit m-right-xs"></i>Upload Profile Photo</a>
                  <br />
                    :
                    <p></p>
                  }

                  <a onClick={this.handleRequestMentor.bind(this)} ref='profileData' className="btn btn-success"><i className="fa fa-edit m-right-xs"></i>Request Mentor</a>



                  {/* <!-- start skills --> */}

                  {/* <h4>Skills</h4>
                  <ul className="list-unstyled user_data">
                    <li>
                      <p>Web Applications</p>
                      <div className="progress progress_sm">
                        <div className="progress-bar bg-green" role="progressbar" data-transitiongoal="50"></div>
                      </div>
                    </li>
                    <li>
                      <p>Website Design</p>
                      <div className="progress progress_sm">
                        <div className="progress-bar bg-green" role="progressbar" data-transitiongoal="70"></div>
                      </div>
                    </li>
                    <li>
                      <p>Automation & Testing</p>
                      <div className="progress progress_sm">
                        <div className="progress-bar bg-green" role="progressbar" data-transitiongoal="30"></div>
                      </div>
                    </li>
                    <li>
                      <p>UI / UX</p>
                      <div className="progress progress_sm">
                        <div className="progress-bar bg-green" role="progressbar" data-transitiongoal="50"></div>
                      </div>
                    </li>
                  </ul> */}
                  {/* <!-- end of skills --> */}

                </div>
    )
  }
}
