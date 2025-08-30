// src/components/App.tsx
import Alert from "./Alert";
import Product from "./Product";
import Test from "./Test"; // 👈 Додай цей рядок
import Button from "./Button";
import UserMenu from "./UserMenu";
import { useState } from "react";
// import ClickCounter from "./ClickCounter";

interface Values {
  x: number;
  y: number;
}

export default function App() {
  // const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
  //   console.log("Clicked!", event);
  //   console.log("Target:", event.target); // сам <button>
    // let clicks = 0;
const [count, setCount] = useState(0);
 const [isOpen, setIsOpen] = useState(false);
 const handleClick = () => {
	  // 3. Використовуємо setClicks для зміни стану clicks
    setCount(count + 1);
  // const handleClick = () => {
  //   clicks = clicks + 1;
    // console.log(clicks);
  };
const toggleMessage = () => {
    setIsOpen(!isOpen);
  };
const [values, setValues] = useState<Values>({ x: 0, y: 0 });

  const updateValue = (key: keyof Values) => {
  setValues({
    ...values,
    [key]: values[key] + 1,
  });
};

  // const updateX = () => {
  //   setValues({
  //     ...values,
  //     x: values.x + 1,
  //   });
  // };

  // const updateY = () => {
  //   setValues({
  //     ...values,
  //     y: values.y + 1,
  //   });
  // };

  return (
    <>
    <Alert />
      <h1>Best selling</h1>
      <Product
        name="Tacos With Lime"
        imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?w=640"
        price={10.99}
      />
      <Product
        name="Fries and Burger"
        imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?w=640"
        price={14.29}
      />
      <Alert />
      <Alert type="success" />
      <Alert type="error" />
      <Test/> {/* 👈 Додай цей рядок */} 
      <Button variant="primary" text="Login" />
      <Button variant="secondary" text="Follow" />
      <UserMenu name="Makhaylo" />
      {/* <button onClick={handleClick}>Click me!</button>; */}
      {/* <button onClick={handleClick}>Clicked: {clicks}</button>; */}
      {/* <ClickCounter value={clicks} onUpdate={handleClick} />
      <ClickCounter value={clicks} onUpdate={handleClick} /> */}
       <button onClick={handleClick}>Clicked: {count}</button>
      <button onClick={toggleMessage}>
        {isOpen ? "Hide message" : "Show message"}
      </button>

      {isOpen && <p>🎉 Surprise! You toggled me.</p>}
      <div>
      <p>x: {values.x}, y: {values.y}</p>
      <button onClick={() => updateValue("x")}>Update x</button>
<button onClick={() => updateValue("y")}>Update y</button>


    </div>
    </>
  );
}
