import React,{useEffect,useState} from "react";
import './category.scss';
import {CollectionItem} from '../../components/collection-item/collectionItem'
import {useParams} from 'react-router-dom';
import{useSelector} from 'react-redux';
export const Category = ()=>{
    const [categoryData,setCategoryData] = useState([]);
    const param = useParams();

    console.log(param.catName)

    const directoryDataList = useSelector((state)=>state.shopDataReducer.collection);
    // console.log(directoryDataList);

    useEffect(()=>{
        const filteredData =directoryDataList.filter((item)=>
           item.routeName ===  param.catName
        ) 
        setCategoryData(filteredData)
    },[])


    return( 
    <div className="category">
       {
           categoryData.map((title,key)=>{
               console.log(title.items[0].name) 
               const {items} = title
                return (
                    <div key={key}>
                        <h1 style={{textAlign: 'center'}}>{title.title}</h1> 
                    <div className="item">
                        {
                            items.map((ele)=>{ 
                                return (

                                    <CollectionItem key={ele.id}    item={ele} />
                                ) 
                                
                            })
                        }
                    </div>  
                    </div>
                )

                

           })
       }
   

    </div>)
}
