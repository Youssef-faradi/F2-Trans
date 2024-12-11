import { Home } from './pages/Home/home.jsx';
import { AboutUs } from './pages/AboutUs/aboutUs.jsx';
import { ContactUs } from './pages/ContactUs/contactUs.jsx';
import { Route, Routes } from 'react-router-dom';
import { Error } from './pages/Errors/error.jsx';
import { Header } from './layouts/Header.jsx';
import { Footer } from './layouts/Footer.jsx';
import { MyProvider } from './utils/contextProvider.jsx';
import { Services } from './pages/Services/Services.jsx';


function App() {
    return (
        <>
            <MyProvider>
                <Header />
                <div className='h-[10vh]'></div>
                <Routes>

                    <Route path='*' element={<Error />} />
                    <Route path='/' element={<Home />} />
                    <Route path='/services' element={<Services />} />
                    <Route path='/about' element={<AboutUs />} />
                    <Route path='/contact' element={<ContactUs />} />

                </Routes>
                <Footer />

            </MyProvider>

        </>
    );
}

export default App;
