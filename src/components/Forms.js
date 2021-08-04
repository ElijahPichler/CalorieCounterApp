import React, {useState} from 'react'
import "./Forms.css"
import { Button} from "react-bootstrap"
import FoodInput from "./FoodInput"

export const Forms = () => {
    const [calories, setCalories] = useState('')
    const [proteins, setProteins] = useState('')
    const [carbs, setCarbs] = useState('')
    const [fats, setFats] = useState('')
    const [submitted, setSubmitted] =useState(false)



    const submit = () => {
        setSubmitted(true)
    }
    return (
        <div className="box">
                <div className="innerBox">
                    <label className="label">Calories</label>
                    <input 
                    className="input"
                    value={calories}
                    onChange= {(e) => {setCalories(e.target.value)}}
                    />
                    <label className="label">Proteins</label>
                    <input 
                    className="input"
                    value={proteins}
                    onChange= {(e) => {setProteins(e.target.value)}}
                    />
                    
                    <label className="label">Carbs</label>
                    <input 
                    className="input"
                    value={carbs}
                    onChange= {(e) => {setCarbs(e.target.value)}}
                    />
                    <label className="label">Fats</label>
                    <input 
                    className="input"
                    value={fats}
                    onChange= {(e) => {setFats(e.target.value)}}
                    />
                    <Button className="button"variant="primary" onClick={submit}>Submit</Button>
                </div>
                <hr></hr>
                {
                submitted ? <>
                
                <FoodInput cals={calories} carbs={carbs} fats={fats} proteins={proteins}/>
                
                
                
               </> :""}
           
        </div>
    )
}
export default Forms;