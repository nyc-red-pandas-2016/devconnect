// class ProfileSkills extends React.Component {
//
//   handleSkillSubmit(event) {
//     event.preventDefault();
//     debugger;
//     fetch(event.target, {
//       method: "POST",
//       headers: {
//         'dataType' : 'application/json',
//         'Accept' : 'application/json',
//         'Content-Type' : 'application/json',
//         'Access-Control-Allow-Origin' : 'http://localhost:3000'
//       },
//       body: JSON.stringify({
//         mentor_id: mentor,
//         user_id: this.props.data.id
//       })
//     }).then((response) => response.json())
//     .then((response) => {
//     }).catch((error) => {
//       console.log(error);
//     });
//   }
//
//   render() {
//     return(
//       <form >
//         <input ref="skillID" type="hidden" value={this.props.skill.id}/>
//         <input type='submit' ref='skill' onClick={this.handleSkillSubmit.bind(this)}  href="/users/endorsement" className="btn btn-success"><i className="fa m-right-xs"></i>{this.props.skill.name} />
//       </form>
//     );
//   }
// }
