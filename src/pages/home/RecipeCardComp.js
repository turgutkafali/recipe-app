import React from 'react';
import { useHistory, useNavigate } from 'react-router-dom';
import { RecipeCard, RecipeImage, Button, RecipeHeader } from './HomeStyle';
import defaultImg from '../../assets/default-image.jpg';
import { useEffect } from 'react';


const RecipeCardComp = ({ recipe }) => {
    // console.log(recipe)
    const history = useHistory();
    const moreClick = () => {
        // history.push("/view")
        history.push({
            pathname: '/details',
            recipe: recipe,
        });
    };
    return (
        <RecipeCard>
            <RecipeHeader>{recipe?.label}</RecipeHeader>
            <RecipeImage src={recipe?.image ?? defaultImg} alt="" />
            <Button onClick={()=>history.push({
                pathname: '/details',
                recipe: {recipe}

            })}>View More</Button>
        </RecipeCard>
    );
};
export default RecipeCardComp;
