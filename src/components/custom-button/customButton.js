import  './customButton.scss'

export const CustomButton =(props) => {
    const{btnLabelText,className}=props;
    return (<>
  <button className={className}>
      {btnLabelText}
  </button>  
    
    </>)
}