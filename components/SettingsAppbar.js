import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { useNavigate } from 'react-router-native';

const SettingsAppbar = () => {
    const navigate = useNavigate(); // Call useNavigate inside the component

    return (
        <Appbar.Header>
            <Appbar.BackAction onPress={() => navigate(`/`)} />
            <Appbar.Content title="Title" />
            <Appbar.Action icon="calendar" onPress={() => { }} />
            <Appbar.Action icon="magnify" onPress={() => { }} />
        </Appbar.Header>
    );
};

export default SettingsAppbar;
