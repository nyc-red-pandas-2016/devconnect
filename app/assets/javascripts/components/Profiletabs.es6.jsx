class Profiletabs extends React.Component{

  render(){
    let bio = this.props.dataBio;
    let posts = this.props.dataPosts;


    // going to write a RegExp to get the  day and month out of json
    var month = new RegExp('');

    return(
      <div className="col-md-9 col-sm-9 col-xs-12">

        <div className="" role="tabpanel" data-example-id="togglable-tabs">
          <ul id="myTab" className="nav nav-tabs bar_tabs" role="tablist">
            <li role="presentation" className="active"><a href="#tab_content1" id="home-tab" role="tab" data-toggle="tab" aria-expanded="true">Information</a>
            </li>
            {/*<li role="presentation" className=""><a href="#tab_content2" role="tab" id="profile-tab" data-toggle="tab" aria-expanded="false">Projects Worked on</a>
            </li>*/}
            <li role="presentation" className=""><a href="#tab_content3" role="tab" id="profile-tab2" data-toggle="tab" aria-expanded="false">My Posts</a>
            </li>
          </ul>
          <div id="myTabContent" className="tab-content">
            <div role="tabpanel" className="tab-pane fade active in" id="tab_content1" aria-labelledby="home-tab">
                {bio}
            </div>
            <div role="tabpanel" className="tab-pane fade" id="tab_content2" aria-labelledby="profile-tab">

              {/* <!-- start user projects --> */}
              <table className="data table table-striped no-margin">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Project Name</th>
                    <th>Client Company</th>
                    <th className="hidden-phone">Hours Spent</th>
                    <th>Contribution</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>New Company Takeover Review</td>
                    <td>Deveint Inc</td>
                    <td className="hidden-phone">18</td>
                    <td className="vertical-align-mid">
                      <div className="progress">
                        <div className="progress-bar progress-bar-success" data-transitiongoal="35"></div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>New Partner Contracts Consultanci</td>
                    <td>Deveint Inc</td>
                    <td className="hidden-phone">13</td>
                    <td className="vertical-align-mid">
                      <div className="progress">
                        <div className="progress-bar progress-bar-danger" data-transitiongoal="15"></div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Partners and Inverstors report</td>
                    <td>Deveint Inc</td>
                    <td className="hidden-phone">30</td>
                    <td className="vertical-align-mid">
                      <div className="progress">
                        <div className="progress-bar progress-bar-success" data-transitiongoal="45"></div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>New Company Takeover Review</td>
                    <td>Deveint Inc</td>
                    <td className="hidden-phone">28</td>
                    <td className="vertical-align-mid">
                      <div className="progress">
                        <div className="progress-bar progress-bar-success" data-transitiongoal="75"></div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
              {/* <!-- end user projects --> */}

            </div>
            <div role="tabpanel" className="tab-pane fade" id="tab_content3" aria-labelledby="profile-tab">
                {/* <!-- start recent activity --> */}

                  <ul className="messages">
                {posts.map((post,index)=>{
                  return(
                    <li key={index}>
                      <img src="https://s3-us-west-2.amazonaws.com/dbcfinalproject/new-post-xxl.png" className="avatar" alt="Avatar"/>
                      <div className="message_date">
                        <h3 className="date text-info">24</h3>
                        <p className="month">May</p>
                      </div>
                      <div className="message_wrapper">
                      <h4 className="heading" ><a href={`/topics/${post.postable_id}/posts/${post.id}/responses`}>{post.title}</a></h4>
                      <blockquote className="message">{post.content}</blockquote>
                      </div>
                      <br />
                      {/* <p className="url">
                        <span className="fs1 text-info" aria-hidden="true" data-icon=""></span>
                        <a href="#"><i className="fa fa-paperclip"></i> User Acceptance Test.doc </a>
                      </p> */}
                    </li>
                  )
                })}
                </ul>

                {/* <!-- end recent activity --> */}
            </div>
          </div>
        </div>
      </div>

    )
  }

}
