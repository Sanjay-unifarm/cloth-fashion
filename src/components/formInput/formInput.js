import './formInput.scss'

export const FormInput =(props) => {
    const{type,value,label,placeholder,name,handleChange}=props;
    return(
        <>
        <div className="group">

<label className='shrink' >{label}</label>
                <input 
                className="form-input"
                name={name}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={handleChange}    
                />

        </div>

                
        </>
    )
}