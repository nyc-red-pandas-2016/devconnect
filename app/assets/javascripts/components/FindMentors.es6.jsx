class FindMentors extends React.Component {
  constructor(){
    super();
    this.state={
      mentors:[],
      locations:[]
    }
  }
  componentDidMount(){

    this.setState({
      mentors:this.props.mentors,
      locations:this.props.locations,
      avatars: this.props.avatars
    })

  }
  searchMentor(e){
    e.preventDefault();
    var skills = this.refs.skills.value
    var location = this.refs.locations.value

    $.ajax({
      method:"get",
      url:"/mentors/search",
      data: {mentor: {skills: skills, location: location}}
    }).done((response)=>{
       this.setState({
        mentors: response
      })
    })
  }

  render(){
    return(
      <div className="find-mentors">
       <div id='search-mentor' className="col-md-12 col-sm-12 col-xs-12 text-center">
        {/* metor list */}
            <div className="row">
              <form id='mentorForm'>
                <div className="input-group form-input-group">
                  <input ref="skills" className="form-control from-input-field" placeholder="skills separare with comma ex( ruby,html,javascript )"/>
                  <div className="input-group-btn">

                    <select  ref='locations' id="mentor-dropdown" className="form-control" placeholder="location">
                    {this.state.locations.map((location,index)=>{
                      return(
                        <option key={index}>{location}</option>
                            )
                          })
                        }
                     </select>

                  <button  type="button" className="btn btn-primary" onClick={this.searchMentor.bind(this)}>Search</button>
                    </div>
                    </div>
                </form>

          <div className="clearfix"></div>

        {this.state.mentors.map((mentor,index)=>{
          return(
            <Mentor  data={mentor} key={index}/>
          )
        })}
        </div>
        </div>
      </div>

    )
  }
}
