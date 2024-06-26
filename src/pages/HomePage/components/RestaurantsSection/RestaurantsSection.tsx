import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Carousel from "react-multi-carousel";

import { useFetchRestaurants } from "../../../../api/hooks";
import { IconButton } from "../../../../components/IconButon/IconButton";
import { PageSection } from "../../../../components/PageSection/PageSection";

import {
  RestaurantCard,
  RestaurantCardSkeleton,
} from "../../../../components/RestaurantCard/RestaurantCard";

import { Restaurant } from "../../../../types";
import { restaurants as data } from "../../../../stub/restaurants";

const PreviousButton = styled(IconButton)`
  position: absolute;
  left: 0;
`;

const NextButton = styled(IconButton)`
  position: absolute;
  right: 0;
`;

type RestaurantsSectionProps = {
  title: string;
};

export const RestaurantsSection = ({ title }: RestaurantsSectionProps) => {
  const navigate = useNavigate();

  const restaurants = data;

  const isMobile = /Mobi/i.test(window.navigator.userAgent);

  return (
    <PageSection title={title}>
      <Carousel
        draggable={isMobile}
        partialVisible={isMobile}
        customLeftArrow={<button type="button" onClick={() => {}} />}
        customRightArrow={<button type="button" onClick={() => {}} />}
        responsive={{
          desktop: {
            breakpoint: { max: 5000, min: 1024 },
            items: 3,
            slidesToSlide: 3,
          },
          tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            paritialVisibilityGutter: 50,
          },
          mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            paritialVisibilityGutter: 30,
          },
        }}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        itemClass="carousel-item"
      >
        {restaurants.map((restaurant: Restaurant, index: number) => (
          <RestaurantCard
            key={restaurant.name + index}
            {...restaurant}
            onClick={() => navigate(`/restaurants/${restaurant.id}`)}
          />
        ))}
      </Carousel>
    </PageSection>
  );
};
