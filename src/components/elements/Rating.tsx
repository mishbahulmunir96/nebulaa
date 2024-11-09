import { Rating, RatingStar } from "flowbite-react";

export function RatingElement() {
  return (
    <Rating>
      <RatingStar />
      <RatingStar />
      <RatingStar />
      <RatingStar />
      <RatingStar filled={false} />
    </Rating>
  );
}
