import{sections} from  "./directoryData";
import './directory.scss'
import {MenuItem} from '../menu-item/menuItem'
import {useNavigate} from 'react-router-dom'

export const Directory =()=>{
const navigate = useNavigate();

const handleRouteChage=()=>{
    navigate("/hatsPage")
}
 return (
         
     <>
        <div className="directory-menu" onClick={handleRouteChage} >
            {
                sections.map(({title,imageUrl,id,size})=>{
                    
                    return(
                        <MenuItem
                            key={id}
                            title={title}
                            size={size}
                            imageUrl={imageUrl}

                            />
                    )

                })
            }

        </div>

     </>
 )
}