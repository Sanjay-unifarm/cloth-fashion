import './preview-collection.scss'
import { CollectionItem } from '../../components/collection-item/collectionItem'

export const CollectionPreview =  ({items,title})=>{
    console.log(items)
    return(
        <div className="collection-preview">
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="preview">
                {

                    items
                    .filter((item,ind)=>ind<4)
                    .map(({id,...otherItemProps})=>{
                        return(
                            <CollectionItem key={id} {...otherItemProps}/>
                        )

                    })
                }

            </div>
        </div>
    )
}