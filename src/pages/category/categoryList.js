import React from "react";
import './category.scss';
import {CollectionItem} from '../../components/collection-item/collectionItem'
import {useParams} from 'react-router-dom';
export const Category = ()=>{

    const param = useParams();

    console.log({param:param})
    

    return(
    <div className="category">
        <h2>Hats Page</h2>

    </div>)
}
