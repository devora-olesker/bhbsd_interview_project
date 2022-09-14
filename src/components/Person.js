import { Button, Typography } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2
import { Stack } from '@mui/system';
import * as React from 'react';
import PersonDialog from './PersonDialog';

export default function Person(props) {
    //person object that has been sent as a prop
    const person = props.personObj;

    //boolean variable to manage the dialog. When true, the dialog will open.
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (value) => {
        setOpen(false);
    };

    return (
        <>
            <Grid2 onClick={handleClickOpen} xs={1} sm={1} md={1} lg={1} display="flex" justifyContent="center" alignItems="center" key={person.id} >
                <Stack spacing={1} >
                    <img src={person.speaker_head_shot_to_display} alt="headshot"></img>
                    <box >
                    <Typography fontSize={18} color={'white'}>{person.firstname + " " + person.lastname}</Typography>
                    <Typography fontSize={16} color={'red'}>{person.company}</Typography>
                    </box>

                </Stack>

            </Grid2>

            <PersonDialog
                open={open}
                onClose={handleClose}
                name={person.firstname+ " "+person.lastname}
                company={person.company}
                pic={person.speaker_head_shot_to_display}
                bio={person.bio}
                
            />
        </>
    );
}