import React from 'react'
import Header from '../../components/header/Header'
import axios from 'axios';
import { useState, useEffect } from 'react';
import RecipeCardComp from './RecipeCardComp'
import homeSvg from '../../assets/home.svg'
import { MainContainer, HomeImg, ImgDiv } from './HomeStyle';


const mealTypes = ['Breakfast', 'Lunch', 'Dinner', 'Snack', 'Teatime']
const APP_ID = "b868a915";
const APP_KEY = "71024cbf66e21a8ef9ca6b7cb0d09dff";

function Home() {
    // const [query, setQuery] = useState('apple')
    const [query, setQuery] = useState()
    const [recipes, setRecipes] = useState()
    const [meal, setMeal] = useState(mealTypes[0].toLowerCase())
    const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${meal}`;

    const getData = async () => {
        if (query !== '') {
            const result = await axios.get(url);
            if (result.status === 200) {
                setRecipes(result.data.hits)
            }

        } else {
            alert('Please fill the form')
        }
    }

    // useEffect(() => {
    //     getData();
    // }, [])
    return (
        <div>
            <Header
                setQuery={setQuery}
                query={query}
                getData={getData}
                mealTypes={mealTypes}
                setMeal={setMeal}
                meal={meal}
            />
            {recipes ? (
                <MainContainer>
                    {recipes?.map((recipe, index) => (
                        <RecipeCardComp key={index} recipe={recipe?.recipe} />
                    ))}
                </MainContainer>
            ) : (
                <ImgDiv>
                    <HomeImg src={homeSvg} />
                </ImgDiv>
            )}

        </div>
    )
}

export default Home;