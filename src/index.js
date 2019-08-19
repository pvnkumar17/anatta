import React from "react";
import { render } from "react-dom";
import Layout from './components/layout';
import Header from './components/header';
import Recommended from './components/recommended';
import FeaturesStrip from './components/features-strip';
import Footer from './components/footer'
import PDP from './components/PDP';
import "./index.css";
import configureStore from "./redux/configureStore";
import {Provider} from "react-redux";

const store = configureStore();

render(
    <Provider store={store}>
        <Layout>
            <Header />
            <div className="container-content">
                <div className="content">
                    <PDP />
                </div>
            </div>
            <Recommended />
            <FeaturesStrip />
            <Footer />
        </Layout>
    </Provider>, 
    document.getElementById("app")
);