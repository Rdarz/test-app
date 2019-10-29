import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import Login from './SubComponent'
import { setUserDetails, setLoggedIn } from 'Actions/loginActions'

const mapDispatchToProps = {
  setUserDetails: obj => setUserDetails(obj),	
  setLoggedIn: obj => setLoggedIn(obj),	
}

const mapStateToProps = state => ({
  userCredential: state.login.userCredential,
  loggedIn: state.login.loggedIn
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login))
