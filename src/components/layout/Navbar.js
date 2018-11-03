import React from "react";
import { Link, Redirect  } from 'react-router-dom';
import SignedInLink from './SignedInLink';
import SignedOutLink from './SignedOutLink';
import { connect } from 'react-redux'
const Navbar = (props) => {
  
  const { auth, profile } = props;
  const links = auth.uid ?  <SignedInLink profile={profile}/> :<SignedOutLink/>;
  const renderRedirect = () => {
    if (!auth.uid) {
      return <Redirect to='/signin' />
    }
  }

  return (
    <nav className="nav-wrapper black darken-3">
      <div className="conatiner">
      {renderRedirect()}
        <Link to="/" className="brand-logo left">TODO's</Link>
        {links}
      </div> 
    </nav>
  );
};

const mapStateToProps = (state) =>{
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}

export default connect(mapStateToProps)(Navbar);


