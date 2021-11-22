import React,{useState,useEffect} from 'react';
import axios from 'axios';
import NavBar from './components/Navbar';
import Annoucement from './components/Annoucement';
import Slider from './components/Slider';


function App(props) {
    const {data} = props;
    const [user, setUser] = useState({})
    useEffect(() => {
       Object.keys(data).length > 0 && setUser(data);
    }, []);

    return (
        <div>
            <Annoucement/>
            <NavBar name={user.name ? user.name : null}/>
            <Slider/>
        </div>
    )
}

export default App
