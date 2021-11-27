import React,{useState,useEffect} from 'react';
import NavBar from './components/Navbar';
import Annoucement from './components/Annoucement';
import Slider from './components/Slider';
import Category from './components/Category';
import Product from './components/Products';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';


function App(props) {
    const {data} = props;
    const [user, setUser] = useState({})
    useEffect(() => {
       Object.keys(data).length > 0 && setUser(data);
        var  value = sessionStorage.getItem('user');
        console.log(JSON.parse(value));
    }, []);

    return (
        <div>
            <Annoucement/>
            <NavBar/>
            <Slider/>
            <Category/>
            <Product/>
            <Newsletter/>
            <Footer/>
        </div>
        
    )
}

export default App
