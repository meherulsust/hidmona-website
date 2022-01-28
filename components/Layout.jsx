
import Footer from './footer';
import Header from './header';
import Navbar from './navbar';

const Layout = ( {Children} ) =>{
    return(
        <>
            <Header />
            <Navbar />
                {Children}
            <Footer />
        </>
       
    )
}

export default Layout;
