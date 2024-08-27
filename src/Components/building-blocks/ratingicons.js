import React from 'react';
import YelpReview from '../../Assets/review-yelp.png';
import MichelinReview from '../../Assets/review-michelin.png';
import GoogleReview from '../../Assets/review-google.png';

function Ratings({ iconGap, iconSize}) {
  return (
    <div aria-label="Social media links" style={{ display: "flex", gap: iconGap, justifyContent: "center" }}>
      <img src={YelpReview} alt="Yelp 5 star review" width={iconSize} height={iconSize} />
      <img src={MichelinReview} alt="Michelin 2024" width={iconSize} height={iconSize} />
      <img src={GoogleReview} alt="Google 5 star review" width={iconSize} height={iconSize} />
    </div>
  );
}

export default Ratings;