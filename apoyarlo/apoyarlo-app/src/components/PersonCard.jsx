import PropTypes from "prop-types"
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
  PersonCard.propTypes = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    hairColor: PropTypes.string.isRequired,
  };
  

export default PersonCard