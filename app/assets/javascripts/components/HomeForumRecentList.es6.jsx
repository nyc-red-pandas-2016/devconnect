class HomeForumRecentList extends React.Component {
  render() {
    return(
      <table className="data table table-striped no-margin">
        <thead>
          <tr>
            <th>#</th>
            <th>Post</th>
            <th>Author</th>
            <th className="hidden-phone">Responses</th>
            <th>Topic</th>
          </tr>
        </thead>
        <tbody>
          <HomeForumRecentPost />
        </tbody>
      </table>
    );
  }

}
