//this component explains how to pass props from parent component to the child component
//1.the prop name passed from the parent component should be same as that used in child component eg:name,age etc used here

export function UseProps(props) {
  return (
    <>
      <h1>{props.name}</h1>
      <h3>{props.age}</h3>
      <h4>{props.hobbies}</h4>
    </>
  );
}
