import React from 'react';
import Header from '../HeaderComponent'
import Footer from '../FooterComponent'

const Layout =({children}) =>{
    return(
        <>
            <Header/>
            {children}
            <Footer/>
        </>
    )
}

export default Layout;