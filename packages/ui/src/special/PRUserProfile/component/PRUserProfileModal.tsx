import React from 'react';

import { Badge, Group, Image, Modal, Text } from '@mantine/core';

import { UserProfile } from '../types';

interface UserProfileModalProps {
  user: UserProfile;
  opened: boolean;
  onClose: () => void;
}

export const UserProfileModal: React.FC<UserProfileModalProps> = ({ user, opened, onClose }) => {
  console.log('Profile Modal');
  return (
    <Modal opened={opened} onClose={onClose} title={user.username} size="lg">
      <Group>
        <Image src={user.profileImage} alt={user.username} width={100} height={100} radius="50%" />
        <Badge color="blue" size="lg">
          {user.jobObjective}
        </Badge>
        <Text size="lg">{user.summary}</Text>

        {user.topics.map((project, index) => (
          <div key={index} style={{ marginTop: -10, marginBottom: '1rem', marginLeft: '12rem' }}>
            <Text size="lg">{project.title}</Text>
            <Text size="xs">기간: {project.period}</Text>
            <Text size="xs">업무: {project.role}</Text>
            <Text size="xs">사용 기술: {project.technology.join(', ')}</Text>
          </div>
        ))}
      </Group>
    </Modal>
  );
};

// export default UserProfileModal;
