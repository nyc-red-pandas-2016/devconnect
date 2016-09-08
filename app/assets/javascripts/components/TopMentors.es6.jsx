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
      <h2>Top Mentors</h2>
      <hr/>
           {this.state.topMentors.map((mentor,index)=>{
             return(
               <a  key={index} href={`/users/${mentor.id}/show`}>
               <div className="mentor-card col-xs-6 col-md-4">
                <img  className="mentor-card-image" src="https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg" alt="profile/img" />
                <span className="mentor-name"> {mentor.first_name} {mentor.last_name}</span>
                <span className="mentor-location">{mentor.location}</span>
               </div>
             </a>
           )
           })
           }
      </div>
      <hr/>
      </div>

    )
  }
}
