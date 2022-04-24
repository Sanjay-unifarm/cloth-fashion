import {SHOP_DATA} from './shopData'

import {CollectionPreview} from '../../components/preview-collection/preview-collection'
export const HatsPage =()=>{
    const collection = SHOP_DATA;

    return(
        <>
            <div className="shop-page">

                {
                    collection.map(({id,...otherCollecionProps})=>{
                        return(

                            <CollectionPreview key={id} {...otherCollecionProps} />
                        )
                    })
                },
            </div>


        </>
    )
} 