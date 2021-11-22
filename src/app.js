import React,{useState,useEffect} from 'react';
import axios from 'axios';
import NavBar from './components/Navbar';


function App(props) {
    const {data} = props;
    const [user, setUser] = useState({})
    useEffect(() => {
       Object.keys(data).length > 0 && setUser(data);
    }, []);
    return (
        <div>
            <NavBar name={user.name ? user.name : null}/>
        </div>
    )
}

export default App
