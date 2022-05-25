import{sections} from  "./directoryData";
import './directory.scss'
import {MenuItem} from '../menu-item/menuItem'
import {useNavigate} from 'react-router-dom'
import{useSelector} from 'react-redux';

export const Directory =()=>{
const navigate = useNavigate();
const directoryDataList = useSelector((state)=>state.directoryData.sections);
const handleRouteChage=()=>{
    navigate(`/hatsPage`)
    }


    const handleCatRoute = (id)=>{
        // console.log({id:id})
        // navigate(`/hatsPage/${id}`)
    }
 return (
         
     <>
        <div className="directory-menu" onClick={handleRouteChage} >
            {
                directoryDataList.map(({title,imageUrl,id,size})=>{
                    
                    return(
                        <MenuItem
                            key={id}
                            title={title}
                            size={size}
                            imageUrl={imageUrl}
                            handleCatRoute={()=>handleCatRoute(id)}


                            />
                    )

                })
            }

        </div>

     </>
 )
}