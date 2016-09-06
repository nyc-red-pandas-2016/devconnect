class Topnav extends React.Component {

  logout(e){
    e.preventDefault();
    axios.delete('/users/sign_out').catch((error)=>{
      console.log(error)
    })
  }

  render() {
    let {id,first_name,last_name}=this.props.current_user

    return (
  <div className="top_nav">

  <div className="nav_menu">
    <nav className="" role="navigation">
      <div className="nav toggle">
        <a id="menu_toggle"><i className="fa fa-bars"></i></a>
      </div>

      <ul className="nav navbar-nav navbar-right">
        <li className="">
          <a href="javascript:;" className="user-profile dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
              <img src={this.props.img_src} /> {first_name} {last_name}
            <span className=" fa fa-angle-down"></span>
          </a>
          <ul className="dropdown-menu dropdown-usermenu pull-right">
            <li><a href={`/users/${id}/show`}> Profile</a>
            </li>
            <li>
              <a href="javascript:;">
                <span className="badge bg-red pull-right">50%</span>
                <span>Settings</span>
              </a>
            </li>
            <li>
              <a href="javascript:;">Help</a>
            </li>
            <li><a href={'/users/sign_out'} onClick={this.logout.bind(this)}><i className="fa fa-sign-out pull-right"></i> Log Out</a>
            </li>
          </ul>
        </li>

        <li role="presentation" className="dropdown">
          <a href="javascript:;" className="dropdown-toggle info-number" data-toggle="dropdown" aria-expanded="false">
            <i className="fa fa-envelope-o"></i>
            <span className="badge bg-green">6</span>
          </a>
          <ul id="menu1" className="dropdown-menu list-unstyled msg_list" role="menu">
            <li>
              <a>
                      <span className="image">
                                        image
                                    </span>
                      <span>
                                        <span>John Smith</span>
                      <span className="time">3 mins ago</span>
                      </span>
                      <span className="message">
                                        Film festivals used to be do-or-die moments for movie makers. They were where...
                                    </span>
              </a>
            </li>
            <li>
              <a>
                      <span className="image">
                                      image
                                    </span>
                      <span>
                                        <span>John Smith</span>
                      <span className="time">3 mins ago</span>
                      </span>
                      <span className="message">
                                        Film festivals used to be do-or-die moments for movie makers. They were where...
                                    </span>
              </a>
            </li>
            <li>
              <a>
                      <span className="image">
                                      image
                                    </span>
                      <span>
                                        <span>John Smith</span>
                      <span className="time">3 mins ago</span>
                      </span>
                      <span className="message">
                                        Film festivals used to be do-or-die moments for movie makers. They were where...
                                    </span>
              </a>
            </li>
            <li>
              <a>
                      <span className="image">
                                       image
                                    </span>
                      <span>
                                        <span>John Smith</span>
                      <span className="time">3 mins ago</span>
                      </span>
                      <span className="message">
                                        Film festivals used to be do-or-die moments for movie makers. They were where...
                                    </span>
              </a>
            </li>
            <li>
              <div className="text-center">
                <a>
                  <strong>See All Alerts</strong>
                  <i className="fa fa-angle-right"></i>
                </a>
              </div>
            </li>
          </ul>
        </li>

      </ul>
    </nav>
  </div>

</div>

    );
  }
}
