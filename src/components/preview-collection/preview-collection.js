import './preview-collection.scss'
import { CollectionItem } from '../../components/collection-item/collectionItem'

export const CollectionPreview =  ({items,title})=>{
    return(
        <div className="collection-preview">
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="preview">
                {

                    items
                    .filter((item,ind)=>ind<4)
                    .map((item)=>{
                        return(
                            <CollectionItem key={item.id} item={item} />
                        )

                    })
                }

            </div>
        </div>
    )
}