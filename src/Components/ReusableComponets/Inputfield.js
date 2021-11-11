import React from "react";

const Inputfeild = (props)=>{

    const handleInputChange = (e)=>{
        props.change(e.target.value)
    }

    return (
        <div>
            <input 
                type={props.name} 
                value={props.sta} 
                // onChange={(e)=>(props.change(e.target.value))} 
                onChange = {(e)=>(
                    handleInputChange(e)
                )}
                placeholder={props.placeholder}
            />
        </div>
    )
}

export default Inputfeild