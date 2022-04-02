import{sections} from  "./directoryData";
import './directory.scss'
import {MenuItem} from '../menu-item/menuItem'


export const Directory =()=>{

 return (
     <>
        <div className="directory-menu">
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