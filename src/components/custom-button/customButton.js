import  './customButton.scss'

export const CustomButton =(props) => {
    const{btnLabelText,className,...rest}=props;
    return (<>
  <button className={className}{...rest}>
      {btnLabelText}
  </button>  
    
    </>)
}