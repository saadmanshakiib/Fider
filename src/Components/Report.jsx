import { useRef } from "react"
import './contact.css';

const Contact = () => {

  const ref = useRef();

      const handleSubmit=()=>{
        if(ref.current.value != ""){
                  alert("Submitted To Admin Panel")
        }
        else{
          alert("Input Field Cant Be Empty");
        }
      }


  return (
    <div className="contact-page">
      <div className="container">
        <h1 className="header">Report Page</h1>
        <textarea
        ref={ref}
         type="text"
         placeholder="Report Your Problem Here"
         rows="20"
         cols='75'
        />
        <button type="submit" onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  )
}

export default Contact