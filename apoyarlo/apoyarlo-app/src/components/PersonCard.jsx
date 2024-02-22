//Crea un componente PersonCard con las propiedades firstName, lastName, age, y hairColor
function PersonCard(props) {
    return (
      <div>
        <h1>{props.lastName}, {props.firstName}</h1>
        <p>Age: {props.age}</p>
        <p>Hair Color: {props.hairColor}</p>
      </div>
    )
  }

export default PersonCard