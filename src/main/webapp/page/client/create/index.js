import { connect } from 'react-redux';
import {
    resetSaved,
    saveClient,
    setAddress,
    setCountryId,
    setEmail,
    setFirstName,
    setLastName,
    setUserId, updateClient
} from "../action";
import Create from './Create';
import {getCountries} from "../../country/action";

const mapStateToProps = state => ({
    client: state.client.client,
    saved: state.client.saved,
    countries: state.country.list
});

const mapDispatchToProps = dispatch => ({
    saveClient: client => saveClient(client, dispatch),
    setFirstName: value => dispatch(setFirstName(value)),
    setLastName: value => dispatch(setLastName(value)),
    setEmail: value => dispatch(setEmail(value)),
    setAddress: value => dispatch(setAddress(value)),
    setUserId: value => dispatch(setUserId(value)),
    setCountryId: value => dispatch(setCountryId(value)),
    getCountries: () => getCountries(dispatch),
    updateClient: client => updateClient(client, dispatch),
    resetSaved: () => dispatch(resetSaved())
});

export default connect(mapStateToProps, mapDispatchToProps)(Create);
