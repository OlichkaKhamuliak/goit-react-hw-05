import css from './ReviewsList.module.css';

const ReviewsList = ({ feedbacks }) => {
  return (
    <div>
      <ul className={css.list}>
        {feedbacks.map(({ author, content, id }) => (
          <li key={id} className={css.item}>
            <p className={css.author}>Author: {author}</p>
            <p> {content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReviewsList;
