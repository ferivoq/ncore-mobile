import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { useNavigate } from 'react-router-native'; // Import useNavigate

const HomeAppbar = () => {
  const navigate = useNavigate(); // Call useNavigate inside the component

  return (
    <Appbar.Header>
      <Appbar.Content title="Szép napot, FeriVOQ!" />
      <Appbar.Action icon="cog" onPress={() => navigate(`/settings`)} />
    </Appbar.Header>
  );
};

export default HomeAppbar;
