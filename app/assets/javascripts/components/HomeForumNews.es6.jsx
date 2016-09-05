class HomeForumNews extends React.Component {
  render() {
    return(
      <div>
        <ul className="messages">
          <li>
            <img src="images/img.jpg" className="avatar" alt="Avatar"/>
            <div className="message_date">
              <h3 className="date text-error">25</h3>
              <p className="month">August</p>
            </div>
            <div className="message_wrapper">
              <h4 className="heading">Dev Bootcamp</h4>
              <blockquote className="message">A Day in the Life of a Dev Bootcamp student</blockquote><br />
              <blockquote className="message">A day at Dev Bootcamp is far different than any school or educational institution you’ve experienced. Some describe it as organized chaos, others as having a summer camp feel. At Dev Bootcamp we like to think of the inclusive learning environment at each of our campuses as a simulation for what it’s like to...</blockquote>
              <br />
              <p className="url">
                <span className="fs1" aria-hidden="true" data-icon=""></span>
                <a href="#" data-original-title="">Download</a>
              </p>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}
