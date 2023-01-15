import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {BsArrowRight} from "react-icons/bs";
import { Link } from 'react-router-dom';
import classes from "./Card.module.css"
function BasicExample(props) {
  return (
    <Card style={{ width: '30rem',marginTop:"20px" }}>
      <Card.Img variant="top" src={props.data.image} />
      <Card.Body>
        <Card.Title>{props.data.title}</Card.Title>
        <Card.Text>
          {
            props.data.description
          }
        </Card.Text>
        <Link to={`/places/${props.data.title}`} className={classes.button}>Checkout <BsArrowRight className={classes.icon} /></Link>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;