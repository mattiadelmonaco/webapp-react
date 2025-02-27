export default function VoteInStars({ vote }) {
  let stars = [];
  let roundedVote = Math.round(vote * 2) / 2;
  let fullStars = Math.floor(roundedVote);
  let hasHalfStar = roundedVote % 1 !== 0;

  for (let i = 1; i <= 5; i++) {
    if (i <= fullStars) {
      stars.push(<i key={i} className="fa-solid fa-star"></i>);
    } else if (hasHalfStar) {
      stars.push(<i key={i} className="fa-solid fa-star-half-stroke"></i>);
      hasHalfStar = false;
    } else {
      stars.push(<i key={i} className="fa-regular fa-star"></i>);
    }
  }

  return <div className="text-[#B88701]">{stars}</div>;
}
