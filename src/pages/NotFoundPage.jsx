import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div>
      <Link to="/">Back to home page</Link>
      <h1>Oops! It seems like the page you`re looking for doesn`t exist.</h1>
    </div>
  );
}
