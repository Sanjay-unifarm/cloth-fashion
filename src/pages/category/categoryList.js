import React from "react";
import './category.scss';
import {CollectionItem} from '../../components/collection-item/collectionItem'
import {useParams} from 'react-router-dom';
import{useSelector} from 'react-redux';
export const Category = ()=>{
    const param = useParams();

    console.log({param:param})

    const directoryDataList = useSelector((state)=>state.shopDataReducer.collection);
    console.log(directoryDataList[0].items);
    return(
    <div className="category">
        <h2>Hats Page</h2>

    </div>)
}
