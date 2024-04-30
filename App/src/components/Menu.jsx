import React, { useState, useEffect } from 'react';
import './Menu.css'

import axios from 'axios';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import app from '../utils/firebaseConfig';



// Inicializar Firestore
const db = getFirestore(app);

function Menu() {
  const [menuItems, setMenuItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMenuData = async () => {
      try {
        // Obtener datos de la API de comidas usando Axios
        const mealResponse = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=');
        const mealData = mealResponse.data;

        // Obtener datos de la API de bebidas usando Axios
        const drinkResponse = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail');
        const drinkData = drinkResponse.data;

        // Combinar datos de comidas y bebidas de la API
        const combinedDataFromAPI = [...mealData.meals, ...drinkData.drinks];

        // Obtener precios de comidas desde Firebase
        const mealsSnapshot = await getDocs(collection(db, 'meals'));
        const mealPrices = mealsSnapshot.docs.reduce((acc, doc) => {
          acc[doc.data().name] = doc.data().price;
          return acc;
        }, {});

        // Obtener precios de bebidas desde Firebase
        const drinksSnapshot = await getDocs(collection(db, 'drinks'));
        const drinkPrices = drinksSnapshot.docs.reduce((acc, doc) => {
          acc[doc.data().name] = doc.data().price;
          return acc;
        }, {});

        // Asociar precios a elementos del menú
        const combinedDataWithPrices = combinedDataFromAPI.map(item => {
          let price = '';
          if (item.strMeal && mealPrices[item.strMeal]) {
            price = parseFloat(mealPrices[item.strMeal]).toFixed(2);
          } else if (item.strDrink && drinkPrices[item.strDrink]) {
            price = parseFloat(drinkPrices[item.strDrink]).toFixed(2);
          }
          return { ...item, price };
        });

        setMenuItems(combinedDataWithPrices);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMenuData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="container">
      <h1>Menú</h1>
      <ul className="menu-list">
        {menuItems.map(item => (
          <li key={item.idMeal || item.idDrink} className="menu-item">
            {item.strMeal && <p><strong>Nombre:</strong> {item.strMeal}</p>}
            {item.strDrink && <p><strong>Nombre:</strong> {item.strDrink}</p>}
            {item.strCategory && <p><strong>Categoría:</strong> {item.strCategory}</p>}
            {item.strArea && <p className="area"><strong>Área:</strong> {item.strArea}</p>}
            {item.strDrinkThumb && <img src={item.strDrinkThumb} alt={item.strDrink} className="menu-item-img" />}
            {item.strMealThumb && <img src={item.strMealThumb} alt={item.strMeal} className="menu-item-img" />}
            {item.price && <p><strong>Precio:</strong> ${item.price}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Menu;

