import './styles/App.scss';
import { ApartmentsGrid, ContactHeader, Footer, Header } from "./components";
import { IndexSearchBox } from "./components/IndexSearchBox";
import { useState, useEffect } from "react";
import { entitiesRequests } from "./dal/entitiesRequests";
import {likesRequests} from "./dal/likesRequests";

function App() {
    const [apartments, setApartments] = useState(null);
    const [likes, setLikes] = useState([]);
    const setLikeHandler =async (apartmentId)=>{
        let inState = likes.filter(like=>like.apartmentId === apartmentId)[0];
        if(inState){
            await likesRequests.updateLike(inState.id, !inState.status);
        } else {
            await likesRequests.setLike(apartmentId);
        }
        await loadLikes();
    }

    const loadLikes = async ()=>{
        //Только для одного пользователя по умолчанию
        let likesFromServer = (await likesRequests.forUser());
        setLikes(likesFromServer);
    }

    const getApartments = async() => {
        const response = await entitiesRequests.getAll();
        setApartments(response);
    }
    useEffect(() => {
        getApartments();
        loadLikes();
    }, []);




    return ( <div className = { 'App' } >
            <ContactHeader/>
            <Header/>
            <IndexSearchBox/>
            <div className={ 'wrapper' }>
                {apartments !== null ?
                        <ApartmentsGrid setLikeHandler={setLikeHandler}  likes={likes} apartments = { apartments }/>
                    : 'SEARCH ...'}
            </div>

             <Footer/>
            </div> );
            }

            export default App;