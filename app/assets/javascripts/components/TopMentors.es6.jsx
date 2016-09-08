class TopMentors extends React.Component {
  constructor(){
    super();
    this.state={
      topMentors:[]
    }
  }
  componentDidMount(){
    axios.get('/home/index/mentors').then((response)=>{
      this.setState({
        topMentors: response.data
      })
    }).catch((errors)=>{
      console.log(errors)
    })
  }


  render(){

    return(
     <div >
     <div className="top-mentors row">
     <div className="clearfix"></div>
      <h2>Top Mentors</h2>
      <hr/>
           {this.state.topMentors.map((mentor,index)=>{
             return(
               <div className="col-md-3 col-sm-3 col-xs-12 profile_details"  key={index}>
                 <div className="well profile_view">
                   <div className="col-sm-12">
                   <h4 className="brief">{mentor.location}</h4>
               <div className="mentor-card">
                <img  className="mentor-card-image" src="https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg" alt="profile/img" />
                <p className="mentor-name"> {mentor.first_name} {mentor.last_name}</p>
               </div>
              </div>
              <div className="col-xs-12 bottom text-center">
              <a  className="btn btn-success btn-xs" href={`/users/${mentor.id}/show`}>visit profile</a>
              </div>
              </div>
              </div>
           )
           })
           }
      </div>
      <hr/>
      </div>

    )
  }
}
