class Profile extends React.Component{
  constructor(){
    super();
      this.state={
        users: []
      }
  }
  componentDidMount(){
    this.setState({
      users: JSON.parse(this.props.user)
    })
  }
  render(){
    return(
      <ProfileUser data={this.state.users} />
    )
  }
}
