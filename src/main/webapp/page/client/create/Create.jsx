import React, {Component} from 'react';
import {ROUTE_CLIENT, STRING_EMPTY} from "../../../common/constant";
import {Redirect} from "react-router-dom";

class Create extends Component {
    componentWillMount() {
        const {getCountries} = this.props;
        getCountries();
    }

    componentWillUnmount() {
        const { resetSaved } = this.props;
        resetSaved();
    }

    render() {
        const {
            client,
            saveClient,
            setFirstName,
            setLastName,
            setEmail,
            setAddress,
            setCountryId,
            countries,
            updateClient,
            saved
        } = this.props;
        if (saved) return <Redirect to={ROUTE_CLIENT}/>;
        const {id, firstName, lastName, email, address, user, country} = client;
        const action = id ? 'Edit' : 'Add';
        return (
            <div>
                <div className="py-5 text-center">
                    <h2>{action} Client</h2>
                </div>
                <div className="row">
                    <div className="col-md-12 order-md-1">
                        <form className="needs-validation" noValidate>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="firstName"> First name</label>
                                    <input type="text" className="form-control" id="firstName" placeholder=""
                                           value={firstName || STRING_EMPTY} onChange={value => setFirstName(value)}/>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="lastName"> Last name </label>
                                    <input type="text" className="form-control" id="lastName" placeholder=""
                                           value={lastName || STRING_EMPTY} onChange={value => setLastName(value)}/>
                                </div>
                            </div>
                            {user && <div className="mb-3">
                                <label htmlFor="username">Username</label>
                                <div className="input-group">
                                    <input type="text" className="form-control" id="username" placeholder="Username"
                                           value={user.username}/>
                                </div>
                            </div>}
                            <div className="mb-3">
                                <label htmlFor="email">Email <span className="text-muted">(Optional)</span></label>
                                <input type="email" className="form-control" id="email" placeholder="you@example.com"
                                       value={email || STRING_EMPTY} onChange={value => setEmail(value)}/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="address">Address</label>
                                <input type="text" className="form-control" id="address" placeholder="1234 Main St"
                                       value={address || STRING_EMPTY} onChange={value => setAddress(value)}/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="country">Country</label>
                                <select className="custom-select d-block w-100" id="country"
                                        onChange={value => setCountryId(value)}>
                                    <option value="">Choose...</option>
                                    {countries.map(({id, name}) =>
                                        <option value={id} selected={id === country.id}>{name}</option>)}
                                </select>
                            </div>
                            <hr className="mb-4"/>
                            <button className="btn btn-primary btn-lg btn-block" type="submit"
                                    onClick={() => id ? updateClient(client) : saveClient(client)}>{action} Client
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Create;
