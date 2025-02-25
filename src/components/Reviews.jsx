export default function Reviews({ reviews }) {
  return (
    <div className="bg-white rounded-2xl my-10">
      <h2 className="font-extrabold text-4xl text-center py-5">Recensioni</h2>
      <ul className="p-5">
        {reviews.map((review) => {
          return (
            <li key={review.id}>
              <h3>
                <strong>{review.name}</strong>
              </h3>
              <h3>
                <strong>Voto: </strong>
                {review.vote}
              </h3>
              <p>
                <strong>Recensione: </strong>
                {review.text}
              </p>
              <hr className="mb-8 mt-3" />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
