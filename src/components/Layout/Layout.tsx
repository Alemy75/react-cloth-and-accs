import React from 'react';
import Header from "./Header/Header";
import s from './Layout.module.scss'
import {Outlet} from "react-router-dom";

const Layout: React.FC = () => {
    return (
        <React.Fragment>
            <Header/>
            <main className={s.container}>
                <Outlet/>
            </main>
        </React.Fragment>
    );
};

export default Layout;