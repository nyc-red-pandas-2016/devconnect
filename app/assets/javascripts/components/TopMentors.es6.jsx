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
     <div className="owl-carousel">
           {this.state.topMentors.map((mentor,index)=>{
             return(<div className="item" key={index}>
              <img src="#" alt="profile/img" width="200" height="200"/>
               {mentor.first_name}
               {mentor.last_name}
               {mentor.location}
               </div>)
           })
           }
      </div>

    )
  }
}
