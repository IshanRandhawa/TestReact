import React from 'react';
import { List, Datagrid, TextField, EmailField, EditButton } from 'react-admin';

export const PostList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="Server_ram" />
            <TextField source="Server_cpu" />
            <TextField source="Server_os" />
            <TextField source="Server_graphic" />
            <TextField source="Server_storage" />
            <TextField source="created_at" />
            <TextField source="updated_at" />
            <EditButton />

        </Datagrid>
    </List>
);
