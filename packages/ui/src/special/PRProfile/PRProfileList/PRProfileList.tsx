import { SimpleGrid } from '@mantine/core';

import { PRProfile } from '../PRProfile';
import profileData from './PRProfileData.json';

export const PRProfileList = () => {
  console.log('dd');
  return (
    <SimpleGrid cols={3} spacing="lg">
      {profileData.map((profile) => (
        <PRProfile
          key={profile.id}
          profileImage={profile.profileImage}
          jobObjective={profile.jobObjective}
          topic={profile.topic}
          summary={profile.summary}
          username={profile.username}
        />
      ))}
    </SimpleGrid>
  );
};
