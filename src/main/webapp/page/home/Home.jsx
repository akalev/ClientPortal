import React from 'react';
import {Redirect} from 'react-router-dom';
import {ROUTE_CLIENT} from "../../common/constant";

const Home = () => <Redirect to={ROUTE_CLIENT}/>;

export default Home;