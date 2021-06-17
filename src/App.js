import './styles/App.scss';
import { ApartmentsGrid, ContactHeader, Footer, Header } from "./components";
import { IndexSearchBox } from "./components/IndexSearchBox";
import { useState, useEffect } from "react";
import { entitiesRequests } from "./dal/entitiesRequests";

function App() {
    const [apartments, setApartments] = useState(null);
    const [notifications, setNotifications] = useState([]);

    const getApartments = async() => {
        const response = await entitiesRequests.getAll();
        setApartments(response);
    }
    useEffect(() => {
        getApartments();

    }, []);
    useEffect(()=>{
        setTimeout(()=>{
            setNotifications([])
        }, 8000)
    }, [notifications])




    return ( <div className = { 'App' } >
            <ContactHeader/>
            <Header/>
            <IndexSearchBox/>
            <div className={ 'wrapper' }>
                {apartments !== null ?
                        <ApartmentsGrid   apartments = { apartments }/>
                    : 'SEARCH ...'}
            </div>

             <Footer/>
            </div> );
            }

            export default App;