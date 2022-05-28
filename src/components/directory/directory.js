import{sections} from  "./directoryData";
import './directory.scss'
import {MenuItem} from '../menu-item/menuItem'
import {useNavigate} from 'react-router-dom'
import{useSelector} from 'react-redux';

export const Directory =()=>{
const navigate = useNavigate();
const directoryDataList = useSelector((state)=>state.directoryData.sections);
const handleRouteChage=(id)=>{
    // console.log({id})
    // navigate(`/hatsPage/${id}`)
    }


    const handleCatRoute = (id,title)=>{
        console.log({id:id,title:title})
        navigate(`/hatsPage/${title}`)
    }
 return (
         
     <>
        <div className="directory-menu" onClick={handleRouteChage} >
            {
                directoryDataList.map(({title,imageUrl,id,size,routeName})=>{
                    console.log({id})
                    
                    return(
                        <MenuItem
                            key={id}
                            title={title}
                            size={size}
                            imageUrl={imageUrl}
                            handleCatRoute={()=>handleCatRoute(id,title)}


                            />
                    )

                })
            }

        </div>

     </>
 )
}