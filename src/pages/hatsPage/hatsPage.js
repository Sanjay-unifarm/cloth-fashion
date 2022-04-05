import {SHOP_DATA} from './shopData'

import {CollectionPreview} from '../../components/preview-collection/preview-collection'
export const HatsPage =()=>{
    console.log(SHOP_DATA)
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