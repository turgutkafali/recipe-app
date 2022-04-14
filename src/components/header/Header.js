import React from 'react'
import Form from './Form'
import { HeaderContainer, MainHeader } from './HeaderStyle'


function Header({ setQuery, query, getData, mealTypes, setMeal, meal }) {
  return (
    <HeaderContainer>
      <MainHeader>Recipe App</MainHeader>
      <Form
        setQuery={setQuery}
        query={query}
        getData={getData}
        mealTypes={mealTypes}
        setMeal={setMeal}
        meal={meal}

      />
    </HeaderContainer>
  )
}

export default Header