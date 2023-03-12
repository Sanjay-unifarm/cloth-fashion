import {useSelector} from 'react-redux'
import {Routes,Route} from "react-router-dom"
import {CollectionOverview} from '../../components/collection-overview/collection-overview'
import { Category } from '../category/categoryList';
import { useLocation,useNavigate } from "react-router-dom";
export const HatsPage =()=>{
    const match = useLocation();
    const navigate = useNavigate();
    console.log({match: match.pathname})
    const collection = useSelector((state)=>state.shopDataReducer.collection)

        const redirctToHatsPage = ()=>{
            let id =1;
            navigate(`/hatsPage/${id}`)
        }

    return(
        <>
            <div className="shop-page">
                {/* <button  onClick={redirctToHatsPage} >Redirect</button> */}
            {/* <Routes>

                <Route exact path={`${match.pathname}`} element={<CollectionOverview/>} />
                <Route  path={`${match.pathname}/:categoryId`} element={<Category/>} />
            </Routes> */}

                <CollectionOverview/>

            </div>


        </>
    )
} 