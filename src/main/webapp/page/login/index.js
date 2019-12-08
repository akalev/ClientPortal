import {connect} from 'react-redux';
import {login, setPassword, setUsername} from "./action";
import Login from './Login';

const mapStateToProps = state => ({
    user: state.login.user
});

const mapDispatchToProps = dispatch => ({
    login: user => login(user, dispatch),
    setUsername: value => dispatch(setUsername(value)),
    setPassword: value => dispatch(setPassword(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
