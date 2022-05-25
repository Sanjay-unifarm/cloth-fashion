import './menuItem.scss'


export const MenuItem =(props)=>{
    const{title,imageUrl,size,handleCatRoute} = props;
    
  

    return (
        <>
            
               <div  className={`${size} menu-item`}>
                    
                    <div className="background-image" style={{backgroundImage:`url(${imageUrl})`}} />

            
                    
                    <div className="content" onClick={handleCatRoute}>
                        <h1 className="title">{title}</h1>
                        <span className="subtitle"  >Shop Now</span>  
                    </div>
                 </div>    
        </>
    )
}