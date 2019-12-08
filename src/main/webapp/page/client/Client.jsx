import React, {Component} from 'react';
import {ROUTE_CLIENT_CREATE} from "../../common/constant";
import {NavLink, Redirect} from "react-router-dom";

class Client extends Component {
    componentWillMount() {
        const {getClientsByUserId} = this.props;

        getClientsByUserId();
    }

    render() {
        const {clients, selectClient, client} = this.props;
        if (client.id) return <Redirect to={ROUTE_CLIENT_CREATE}/>;
        return (<div>
            <div className="py-5 text-center">
                <h2>Clients</h2>
            </div>
            <div className="row">
                <NavLink to={ROUTE_CLIENT_CREATE} className="btn btn-primary">Add client</NavLink>
                <table class="table">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Username</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {clients.map(({id, firstName, lastName, user: {username}}) => <tr>
                        <th scope="row">{id}</th>
                        <td>{firstName}</td>
                        <td>{lastName}</td>
                        <td>{username}</td>
                        <td>
                            <a role="button" className="btn btn-primary" onClick={() => selectClient(id)}>Edit
                                client</a>
                        </td>
                    </tr>)}
                    </tbody>
                </table>
            </div>
        </div>);
    }
}

export default Client;
