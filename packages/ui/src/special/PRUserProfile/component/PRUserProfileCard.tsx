import React, { useState } from 'react';

import { Badge, Button, Card, Collapse, Group, Image, Text } from '@mantine/core';

import { UserProfile } from '../types';
import { UserProfileModal } from './PRUserProfileModal';

interface UserProfileCardProps {
  user: UserProfile;
}

export const UserProfileCard: React.FC<UserProfileCardProps> = ({ user }) => {
  const [opened, setOpened] = useState(false);
  const [modalOpened, setModalOpened] = useState(false);

  const handleOpenModal = () => setModalOpened(true);

  return (
    <div>
      <Card shadow="sm" padding="lg" onClick={handleOpenModal} style={{ cursor: 'pointer' }}>
        <Group>
          <Image src={user.profileImage} alt={user.username} width={80} height={80} radius="50%" />
          <Text component="span">{user.username}</Text>
          <Badge color="blue" size="sm">
            {user.jobObjective}
          </Badge>
          <Text size="md" mt="sm" component="span">
            {user.summary}
            <br />
            <Text size="sm" mt="sm" component="span">
              최근프로젝트: {user.topics[0]?.title}
            </Text>
          </Text>
          <Button
            variant="outline"
            fullWidth
            mt="md"
            onClick={(e) => {
              e.stopPropagation();
              setOpened((e) => !e);
            }}
          >
            {!opened ? '펼치기' : '접기'}
          </Button>

          <Collapse in={opened}>
            {user.topics.map((project, index) => (
              <div key={index} style={{ marginBottom: '1rem' }}>
                <Text size="lg" component="span">
                  {project.title}
                </Text>
                <Text size="xs" component="span">
                  기간: {project.period}
                </Text>
                <Text size="xs" component="span">
                  업무: {project.role}
                </Text>
                <Text size="xs" component="span">
                  사용 기술: {project.technology.join(', ')}
                </Text>
              </div>
            ))}
          </Collapse>
        </Group>
      </Card>

      {/* 모달 */}
      <UserProfileModal
        user={user}
        opened={modalOpened}
        // opened={false}
        onClose={() => setModalOpened(false)}
      />
    </div>
  );
};

// export default UserProfileCard;
