import React from 'react';

import { NextRouter } from 'next/router';

import { Carousel } from '@mantine/carousel';

import { UserProfile } from '../types';
import { UserProfileCard } from './PRUserProfileCard';

// interface UserProfileCarouselProps {
//   users: UserProfile[];
// }

export interface PRUserProfileCarouselProps {
  router?: NextRouter;
  users?: UserProfile[];
}

export const UserProfileCarousel = ({ users, router }: PRUserProfileCarouselProps) => {
  console.log('PRUserProfileCarousel');
  return (
    <>
      <Carousel slideSize="33.33%" slideGap="sm" align="start" slidesToScroll={1} orientation="horizontal" loop>
        {users?.map((user, index) => (
          <Carousel.Slide key={index}>
            <UserProfileCard user={user} />
          </Carousel.Slide>
        ))}
      </Carousel>
    </>
  );
};
