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
      <div className="find-mentors">
       <div className="col-md-12 col-sm-12 col-xs-12 text-center">
        {/* metor list */}
        <div className="row">

          <div className="clearfix"></div>

        {this.state.topMentors.map((mentor,index)=>{
          return(
            <Mentor  data={mentor} key={index} />
          )
        })}
        </div>
        </div>
      </div>

    )
  }
}
