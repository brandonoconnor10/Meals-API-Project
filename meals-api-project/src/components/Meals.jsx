import axios from 'axios'
import React, { useEffect, useState } from 'react'
import '../styles.css'


const Meals = () => {
  const [items, setItems] = useState([])

  // fetching api data via axios
  useEffect(() => {
    axios
    .get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
    .then((res) => {
        // console.log(res.data)
        setItems(res.data.meals)
    })
    .catch((err) => {
        console.log(err)
    })
  },[])
//   list of the meals being rendered 
  const itemList = items.map(({ strMeal, strMealThumb, idMeal}) => {

    return (
        <section className='card'>
            <img src={strMealThumb} alt={strMeal} />
            <section className='content'>
                <p>{strMeal}</p>
                <p>#{idMeal}</p>
            </section>
        </section>
    )
  })
//   displaying the meals we fetched 
  return <div className='items-container'>{itemList}</div>
  
}

export default Meals