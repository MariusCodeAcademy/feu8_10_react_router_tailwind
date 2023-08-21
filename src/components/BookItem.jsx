import { Link } from 'react-router-dom';

export default function BookItem(props) {
  return (
    <li>
      <Link className="" to={`/books/${props.id}`}>
        <span>{props.title}</span> - <strong>category: </strong>
        {props.category}
      </Link>
    </li>
  );
}
