import { connect } from "react-redux";
import { createNewUser } from "../../actions/session";
import Signup from './signup'
//this component doesnt need to rely on any part of the state, which i guess makes sense (given only one current user at a time)

//since ^^, we only want to pass the action that it will need to *Signup* a User! c:
const mapDispatchToProps = dispatch => ({
    createNewUser: formUser => dispatch(createNewUser(formUser)),//when called in the Signup class, it would be passed in as createNewUser(*info from a form*)!!
                                                                    //its just naming convention to call this dispatching action the same name as the Action!
});

export default connect(null, mapDispatchToProps)(Signup);
