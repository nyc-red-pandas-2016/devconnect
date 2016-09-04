class Post extends React.Component {

  constructor() {
    super();
  }


  render() {
    return(
      <div>
        <ul>
          <li><h3>{this.props.post.title}</h3><p>{this.props.post.content}</p></li>
        </ul>
      </div>
    );
  };
};
