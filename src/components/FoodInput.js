import React, {useState} from 'react'
import {ListGroup, Button} from "react-bootstrap"
import {HiOutlineTrash} from "react-icons/hi"




export const FoodInput = (props) => {
    const [originalCal] = useState(props.cals)
    const [originalCarbs] = useState(props.carbs)
    const [originalFats] = useState(props.fats)
    const[originalProteins] = useState(props.proteins)
    const [tempCals, setTempCals] = useState(props.cals)
    const [tempCarbs, setTempCarbs] = useState(props.carbs)
    const [tempFats, setTempFats] = useState(props.fats)
    const [tempProteins, setTempProteins] = useState(props.proteins)
    const [foodName, setFoodName] = useState('')
    const [calories, setCalories] = useState('')
    const [carbs, setCarbs] = useState('')
    const [fats, setFats] = useState('')
    const [proteins, setProteins] = useState('')
    const [foods, setFoods] = useState([])
    const [id, setId] = useState(0)
    let calVariant = 'green'
    let carbVariant = 'green'
    let fatVariant = 'green'
    let proteinVariant = 'green'


    const deleteFood = (id) =>{
        


        let tempFood = null
        for(let i = 0; i < foods.length; i++){
            if(foods[i].id === id){
                tempFood = foods[i]
            }
        }
        if(isNaN(parseInt(tempFood.cals))){
            tempFood.cals = 0
        }
        if(isNaN(parseInt(tempFood.proteins))){
            tempFood.proteins = 0
        }
        if(isNaN(parseInt(tempFood.carbs))){
            tempFood.carbs = 0
        }
        if(isNaN(parseInt(tempFood.fats))){
            tempFood.fats = 0
        }
        

        setTempCals(tempCals + parseInt(tempFood.cals))
        setTempCarbs(tempCarbs + parseInt(tempFood.carbs))
        setTempFats(tempFats + parseInt(tempFood.fats))
        setTempProteins(tempProteins + parseInt(tempFood.proteins))
        const newList = foods.filter(food => food.id !== id)
        setFoods(newList)

    }

    const addFood = () => {
        
        setTempCals(tempCals - calories)
        setTempCarbs(tempCarbs - carbs)
        setTempFats(tempFats - fats)
        setTempProteins(tempProteins - proteins)

        const food = {
            name: foodName,
            cals: calories,
            proteins: proteins,
            carbs: carbs,
            fats: fats,
            id: id
        }



        foods.push(food)
        setFoods(foods)
        setFoodName('')
        setCalories('')
        setProteins('')
        setCarbs('')
        setFats('')
        setId(id + 1)
        


        
       

    }

     if(tempCals <= originalCal * .5 && tempCals > 0){
        calVariant = 'yellow'
    } else if(tempCals <= 0) {
        calVariant = 'red'
    }
    if(tempCarbs <= originalCarbs * .5 && tempCarbs > 0){
        carbVariant = 'yellow'
    } else if(tempCarbs <= 0) {
        carbVariant = 'red'
    }
    if(tempFats <= originalFats * .5 && tempFats > 0){
        fatVariant = 'yellow'
    } else if(tempFats <= 0) {
        fatVariant = 'red'
    }
    if(tempProteins <= originalProteins * .5 && tempProteins > 0){
        proteinVariant = 'yellow'
    } else if(tempProteins <= 0) {
        proteinVariant = 'red'
    }
   
    return (
        <div>
            <div className="macros">
                    <h1>Macros</h1>
                    <ListGroup variant="flush" className="list">
                        <ListGroup.Item className={calVariant}>Calroies: {tempCals}</ListGroup.Item>
                        <ListGroup.Item className={proteinVariant}>Proteins: {tempProteins}</ListGroup.Item>
                        <ListGroup.Item className={carbVariant}>Carbs: {tempCarbs}</ListGroup.Item>
                        <ListGroup.Item className={fatVariant}>Fats: {tempFats}</ListGroup.Item>
                    </ListGroup>
                    
                    <h1>Food Log</h1>
                    
                </div>
            <div className="innerBox">
                <label className="label">Name</label>
                 <input 
                 className="input"
                 value={foodName}
                onChange= {(e) => {setFoodName(e.target.value)}}
                 />
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
                 <div className="buttonBox"> <Button className="button"variant="primary" onClick={addFood} >Submit</Button></div>
                 <div className="foodBox">
                    {foods.length > 0? (
                        foods.map(food => {
                            return(
                            <ListGroup horizontal className="foodList">
                                <ListGroup.Item>Name: {food.name}</ListGroup.Item>
                                <ListGroup.Item>Cals: {food.cals}</ListGroup.Item>
                                <ListGroup.Item>Proteins: {food.proteins}</ListGroup.Item>
                                <ListGroup.Item>Carbs: {food.carbs}</ListGroup.Item>
                                <ListGroup.Item>Fat: {food.fats}</ListGroup.Item>
                                <ListGroup.Item> <span onClick={() => deleteFood(food.id)}><HiOutlineTrash /></span> </ListGroup.Item>
                            </ListGroup>
                            )
                        })

                    )
                    
                    
                    :""}
                     
                 </div>
               
               
            </div>
        </div>
    )
}

export default FoodInput;
