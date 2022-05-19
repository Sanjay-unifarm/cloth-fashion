import './collection-overview.scss'
import { useSelector } from "react-redux"
import {CollectionPreview} from '../../components/preview-collection/preview-collection'
export const CollectionOverview = ()=>{
    const collection = useSelector((state)=>state.shopDataReducer.collection)
    
    return(
        <div className="collection-overview">
            {
                    collection.map(({id,...otherCollecionProps})=>{
                        return(

                            <CollectionPreview key={id} {...otherCollecionProps} />
                        )
                    })
                },

        </div>
    )
}