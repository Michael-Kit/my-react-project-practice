import clsx from "clsx";

export default function Test() {
  const isPrimary = true;
  const isDisabled = false;

  const myClassName = clsx(
    "btn",
    isPrimary && "btn-primary",
    isDisabled && "btn-disabled"
  );

  console.log(myClassName); // Побачиш "btn btn-primary" в консолі

  return <button className={myClassName}>Click me</button>;
}
