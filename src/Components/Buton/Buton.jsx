import ButonStyle from "./buton.module.css"

function Buton ( {btn}) {
    return (
       <div className={ButonStyle.title}> 
       
        {/* module ccs tanımlamalarını değişkenmiş gibi süslü içinde yazıyoruz */}

         <button className={ButonStyle["btn"]}>
            
             {/* farklı kullanımı [""] */}
            
            {btn}
        </button>
       </div> 
      
    )
}
export default Buton