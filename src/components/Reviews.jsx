import VoteInStars from "./voteInStars";

export default function Reviews({ reviews }) {
  return (
    <div className="bg-white rounded-2xl my-10">
      <h2 className="font-extrabold text-4xl text-center pt-5">Recensioni</h2>
      <ul className="p-5">
        {reviews.map((review) => {
          return (
            <li
              key={review.id}
              className="border-b-2 border-neutral-200 pb-2 pt-5"
            >
              <h3>
                <strong>{review.name}</strong>
              </h3>
              <h3>
                <strong>Voto: </strong>
                <VoteInStars vote={review.vote} />
              </h3>
              <p>
                <strong>Recensione: </strong>
                {review.text}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
