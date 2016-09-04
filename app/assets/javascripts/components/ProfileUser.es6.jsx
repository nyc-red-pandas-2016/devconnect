class ProfileUser extends React.Component{
  render(){
    let {id,first_name,last_name,bio} = this.props.data
    return(
      <div>
      <div className="page-title">
          <div className="title_left">
            <h3>User Profile</h3>
          </div>
          <div className="title_right">
            <div className="col-md-5 col-sm-5 col-xs-12 form-group pull-right top_search">
              <div className="input-group">
                <input type="text" className="form-control" placeholder="Search for..."/>
                <span className="input-group-btn">
                          <button className="btn btn-default" type="button">Go!</button>
                      </span>
              </div>
            </div>
          </div>
        </div>
        <div className="clearfix"></div>
        <div className="row">
          <div className="col-md-12 col-sm-12 col-xs-12">
            <div className="x_panel">
              <div className="x_title">
                <h2>User Report <small>Activity report</small></h2>
                <ul className="nav navbar-right panel_toolbox">
                  <li><a className="collapse-link"><i className="fa fa-chevron-up"></i></a>
                  </li>
                  <li className="dropdown">
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><i className="fa fa-wrench"></i></a>
                    <ul className="dropdown-menu" role="menu">
                      <li><a href="#">Settings 1</a>
                      </li>
                      <li><a href="#">Settings 2</a>
                      </li>
                    </ul>
                  </li>
                  <li><a className="close-link"><i className="fa fa-close"></i></a>
                  </li>
                </ul>
                <div className="clearfix"></div>
              </div>
              <div className="x_content">

                <div className="col-md-3 col-sm-3 col-xs-12 profile_left">

                  <div className="profile_img">

                    {/* <!-- end of image cropping --> */}
                    <div id="crop-avatar">
                      {/* <!-- Current avatar --> */}
                      <img className="img-responsive avatar-view" src="images/picture.jpg" alt="Avatar" title="Change the avatar"/>



                      {/* <!-- Loading state --> */}
                      <div className="loading" aria-label="Loading" role="img" tabIndex="-1"></div>
                    </div>
                    {/* <!-- end of image cropping --> */}

                  </div>
                  <h3>{first_name} {last_name}</h3>

                  <ul className="list-unstyled user_data">
                    <li><i className="fa fa-map-marker user-profile-icon"></i> San Francisco, California, USA
                    </li>

                    <li>
                      <i className="fa fa-briefcase user-profile-icon"></i> Software Engineer
                    </li>

                    <li className="m-top-xs">
                      <i className="fa fa-external-link user-profile-icon"></i>
                      <a href="http://www.kimlabs.com/profile/" target="_blank">www.kimlabs.com</a>
                    </li>
                  </ul>

                  <a href={`/users/edit`} className="btn btn-success"><i className="fa fa-edit m-right-xs"></i>Edit Profile</a>
                  <br />

                  {/* <!-- start skills --> */}
                  <h4>Skills</h4>
                  <ul className="list-unstyled user_data">
                    <li>
                      <p>Web Applications</p>
                      <div className="progress progress_sm">
                        <div className="progress-bar bg-green" role="progressbar" data-transitiongoal="50"></div>
                      </div>
                    </li>
                    <li>
                      <p>Website Design</p>
                      <div className="progress progress_sm">
                        <div className="progress-bar bg-green" role="progressbar" data-transitiongoal="70"></div>
                      </div>
                    </li>
                    <li>
                      <p>Automation & Testing</p>
                      <div className="progress progress_sm">
                        <div className="progress-bar bg-green" role="progressbar" data-transitiongoal="30"></div>
                      </div>
                    </li>
                    <li>
                      <p>UI / UX</p>
                      <div className="progress progress_sm">
                        <div className="progress-bar bg-green" role="progressbar" data-transitiongoal="50"></div>
                      </div>
                    </li>
                  </ul>
                  {/* <!-- end of skills --> */}

                </div>
                <div className="col-md-9 col-sm-9 col-xs-12">

                  <div className="" role="tabpanel" data-example-id="togglable-tabs">
                    <ul id="myTab" className="nav nav-tabs bar_tabs" role="tablist">
                      <li role="presentation" className="active"><a href="#tab_content1" id="home-tab" role="tab" data-toggle="tab" aria-expanded="true">Recent Activity</a>
                      </li>
                      <li role="presentation" className=""><a href="#tab_content2" role="tab" id="profile-tab" data-toggle="tab" aria-expanded="false">Projects Worked on</a>
                      </li>
                      <li role="presentation" className=""><a href="#tab_content3" role="tab" id="profile-tab2" data-toggle="tab" aria-expanded="false">Profile</a>
                      </li>
                    </ul>
                    <div id="myTabContent" className="tab-content">
                      <div role="tabpanel" className="tab-pane fade active in" id="tab_content1" aria-labelledby="home-tab">

                        {/* <!-- start recent activity --> */}
                        <ul className="messages">
                          <li>
                            <img src="images/img.jpg" className="avatar" alt="Avatar"/>
                            <div className="message_date">
                              <h3 className="date text-info">24</h3>
                              <p className="month">May</p>
                            </div>
                            <div className="message_wrapper">
                              <h4 className="heading">Desmond Davison</h4>
                              <blockquote className="message">Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua butcher retro keffiyeh dreamcatcher synth.</blockquote>
                              <br />
                              <p className="url">
                                <span className="fs1 text-info" aria-hidden="true" data-icon=""></span>
                                <a href="#"><i className="fa fa-paperclip"></i> User Acceptance Test.doc </a>
                              </p>
                            </div>
                          </li>
                          <li>
                            <img src="images/img.jpg" className="avatar" alt="Avatar"/>
                            <div className="message_date">
                              <h3 className="date text-error">21</h3>
                              <p className="month">May</p>
                            </div>
                            <div className="message_wrapper">
                              <h4 className="heading">Brian Michaels</h4>
                              <blockquote className="message">Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua butcher retro keffiyeh dreamcatcher synth.</blockquote>
                              <br />
                              <p className="url">
                                <span className="fs1" aria-hidden="true" data-icon=""></span>
                                <a href="#" data-original-title="">Download</a>
                              </p>
                            </div>
                          </li>
                          <li>
                            <img src="images/img.jpg" className="avatar" alt="Avatar"/>
                            <div className="message_date">
                              <h3 className="date text-info">24</h3>
                              <p className="month">May</p>
                            </div>
                            <div className="message_wrapper">
                              <h4 className="heading">Desmond Davison</h4>
                              <blockquote className="message">Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua butcher retro keffiyeh dreamcatcher synth.</blockquote>
                              <br />
                              <p className="url">
                                <span className="fs1 text-info" aria-hidden="true" data-icon=""></span>
                                <a href="#"><i className="fa fa-paperclip"></i> User Acceptance Test.doc </a>
                              </p>
                            </div>
                          </li>
                          <li>
                            <img src="images/img.jpg" className="avatar" alt="Avatar"/>
                            <div className="message_date">
                              <h3 className="date text-error">21</h3>
                              <p className="month">May</p>
                            </div>
                            <div className="message_wrapper">
                              <h4 className="heading">Brian Michaels</h4>
                              <blockquote className="message">Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua butcher retro keffiyeh dreamcatcher synth.</blockquote>
                              <br />
                              <p className="url">
                                <span className="fs1" aria-hidden="true" data-icon=""></span>
                                <a href="#" data-original-title="">Download</a>
                              </p>
                            </div>
                          </li>

                        </ul>
                        {/* <!-- end recent activity --> */}

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
                        <p>xxFood truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui
                          photo booth letterpress, commodo enim craft beer mlkshk </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
