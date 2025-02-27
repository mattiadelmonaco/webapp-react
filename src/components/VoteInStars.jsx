export default function VoteInStars({ vote }) {
  let stars = [];

  for (let i = 1; i <= 5; i++) {
    if (i <= vote) {
      stars.push(<i key={i} className="fa-solid fa-star"></i>);
    } else if (vote % 1 !== 0) {
      stars.push(<i key={i} className="fa-solid fa-star-half-stroke"></i>);
    } else {
      stars.push(<i key={i} className="fa-regular fa-star"></i>);
    }
  }

  return <div className="text-[#B88701]">{stars}</div>;
}
