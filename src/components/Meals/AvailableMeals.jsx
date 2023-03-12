import { useEffect, useState } from "react";
import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        "https://react-http-7e382-default-rtdb.asia-southeast1.firebasedatabase.app/meals.json"
      );
      const responseDate = await response.json();
      const loadedMeals = [];

      for (const key in responseDate) {
        loadedMeals.push({
          id: key,
          name: responseDate[key].name,
          description: responseDate[key].description,
          price: responseDate[key].price,
        });
      }

      setMeals(loadedMeals);
      setIsLoading(false);
    };
    fetchMeals();
  }, []);

  if(isLoading){
    return (
      <section className={classes.MealsIsLoading}>
        Loading...
      </section>
    )
  }

  const mealList = meals.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
