import { GoBackBtn } from '../components/GoBackBtn/GoBackBtn';

export default function NotFoundPage() {
  return (
    <div>
      <GoBackBtn path="/">Back to home page</GoBackBtn>
      <h1>Oops! It seems like the page you`re looking for doesn`t exist.</h1>
    </div>
  );
}
