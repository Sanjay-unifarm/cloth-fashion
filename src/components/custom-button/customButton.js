import  './customButton.scss'

export const CustomButton =(props) => {
    const{btnLabelText}=props;
    return (<>
  <button className="custom-button">
      {btnLabelText}
  </button>  
    
    </>)
}