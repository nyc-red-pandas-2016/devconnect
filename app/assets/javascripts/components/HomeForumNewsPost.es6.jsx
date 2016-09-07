class HomeForumNewsPost extends React.Component {
  render() {
    function getMonth(date) {
      var month = parseInt(date.substring(5, 7));
      var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      return months[month - 1];
    }

    return(
      <li>
        <div className="message_date">
          <h3 className="date text-error">{this.props.data.date.substring(8, 10)}</h3>
          <p className="month">{getMonth(this.props.data.date)}</p>
        </div>
        <div className="message_wrapper">
          <h4 className="heading">{this.props.data.title}</h4>
          <blockquote className="message">{this.props.data.text}</blockquote>
          <br />
        </div>
      </li>
    );
  }
}
