// class Posts extends React.Component
//
// constructor () {
//   super();
//   this.handleSubmit = this.handleSubmit.bind(this);
// }
//
// // IN TOPIC COMPONENT
//
// // this.state = {
// //       posts: [],
//
// // topicPosts() {
// //   $.ajax({
// //     method: "GET",
// //     url: "/topics/" + this.props.topic.id.toString(), (I RENDERED JSON POSTS IN THIS CONTROLLER)
// //   }).done((response) => {
// //     this.setState({posts: response});
// //   })
// // }
//
// // <Posts updatePosts={this.updatePosts} user_id={this.props.user_id} parent_class="Topic" posts={this.state.posts} parentID={this.props.topic.id}/>
// handleSubmit(event) {
//   event.preventDefault();
//   // The parent (topics) should pass the specific topic to its child (topic) and the topic (the child) sends its id to the posts component (parentID)
//   // In topics component
//   // <Topic topic={topic} user_id={this.props.user_id}/>
//   // In topic component
//   // parentID={this.props.topic.id}
//   var postableID = this.props.parentID
//   var postTitle = this.refs.postTitle
//   var postContent = this.refs.postContent
//   $.ajax({
//     method: "POST",
//     url: "/posts",
//     data: {
//       post: {
//         title: postTitle.value,
//         content: postContent.value,
//         postable_id: postableID,
//         // parent_class should be passed from the parent of this component (topic) as a prop: parent_class="Topic"
//         postable_type: this.props.parent_class,
//         user_id: this.props.user_id
//       }
//     }
//   }).done((response) => {
//     this.refs.postTitle.value = "";
//     // IN TOPIC COMPONENT
//     // this.updatePosts = this.updatePosts.bind(this);
//     // THIS METHOD (update posts) SHOULD BE IN TOPIC COMPONENT
//     // updatePosts(newPost) {
//     //   if (newPost) {
//     //     this.setState({posts: this.state.posts.concat(newPost)});
//     //   } else {
//     //     this.setState({posts: this.props.posts})
//     //   }
//     // }
//     //
//     // <Posts updatePosts={this.updatePosts}
//     this.props.updatePosts(response);
//   })
// }
//
// render() {
//   return(
//     <div>
//       {this.props.user_id != 0 ?
//         <form onSubmit={this.handleSubmit} action='/posts' method='post' >
//           <label><h4>Leave a Post for this {this.props.parent_class}:</h4></label>
//           <input ref='postTitle' type='text' name='title'/><br/>
//           <input ref='postContent' type='text' name='content'/><br/>
//           <input type="submit" value="Create Post"/>
//         </form>
//         :
//         <h4>Must be logged in to create post</h4>
//       }
//       <h3>Posts:</h3>
//       {this.props.posts.map((post, i) => {
//         return (
//           <ul key={i}>
//             <Post post={post} user_id={this.props.user_id}/>
//           </ul>
//         );
//       })}
//     </div>
//   );
// };
// };
