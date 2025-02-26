export default function VoteInStars({ vote }) {
  let stars = [];

  for (let i = 1; i <= 5; i++) {
    if (i <= vote) {
      stars.push(<i key={i} className="fa-solid fa-star text-[#B88701]"></i>);
    } else if (vote % 1 !== 0) {
      stars.push(
        <i key={i} className="fa-solid fa-star-half-stroke text-[#B88701]"></i>
      );
    } else {
      stars.push(<i key={i} className="fa-regular fa-star text-[#B88701]"></i>);
    }
  }

  return <div>{stars}</div>;
}
