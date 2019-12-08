import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {getClientsByUserId, selectClient} from "./action";
import Client from './Client';

const mapStateToProps = state => ({
    clients: state.client.list,
    client: state.client.client
});

const mapDispatchToProps = dispatch => ({
    getClientsByUserId: id => getClientsByUserId(id, dispatch),
    selectClient: id => dispatch(selectClient(id))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Client));
