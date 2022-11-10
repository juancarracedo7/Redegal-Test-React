import { Link } from "react-router-dom";
import { BsCart3 } from 'react-icons/bs';

export default function Header() {
  return (
    <div>
      <Link to="/">Logo</Link>
      <Link to="/">Home -- </Link>
      <Link to="/details/:id">Details</Link>
      <div> <BsCart3></BsCart3></div>

    </div>
  );
}
