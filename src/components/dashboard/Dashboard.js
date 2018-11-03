import React from "react";
import Notifications from './Notifications';
import ProjectList from '../projects/ProjectList';
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import RedirectCreate from '../projects/redicretCreate'

 class Dashboard extends React.Component {
   
render(){
  const { notifications, projects, auth } = this.props;
  console.log(this.props);
  const showNotification = auth.uid ?  <Notifications notifications={notifications} /> : null;
  const showAddButotn = auth.uid ? <RedirectCreate/> : null;
    return (
        <div className="dashboard container">
          <div className="row">
          {showAddButotn}
          <div className="col s12 m5 offset-m1">
             {showNotification}
            </div>
            <div className="col s12 m6">
              <ProjectList projects={projects}/>
            </div>
          </div>
        </div>
      )
  }
}
// Get Data form Store
const mapStateToProps = (state) => {

  return{
    projects: state.firestore.ordered.projects,
    notifications: state.firestore.ordered.notifications,
    auth: state.firebase.auth,
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'projects', orderBy : ['createdAt','asc']},
    { collection: 'notifications', limit: 3, orderBy : ['time','desc']}
  ])
) (Dashboard)