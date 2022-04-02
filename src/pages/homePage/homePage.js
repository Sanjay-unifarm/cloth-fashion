import { MenuItem } from '../../components/menu-item/menuItem'
import './homePage.scss'
import {Directory} from "../../components/directory/directory"


export const HomePage =()=>{
         return(
             <>
              <div className="homapage">
                  <div className="directory-menu">
                      <Directory/>
                  </div>
               </div>


             </>
         )
}