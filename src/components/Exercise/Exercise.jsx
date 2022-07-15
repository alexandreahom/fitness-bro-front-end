import ExerciseDetails from '../../pages/ExerciseDetails/ExerciseDetails';
import { Link } from 'react-router-dom'

const Exercise = (props) => {
  return ( 
    <>
    <ul>
    <Link to={`/workout/${props.workout.name}`}>{props.workout.name}</Link>
    </ul>
    </>
   );
}
 
export default Exercise;