import { Box, Grid, Stack, Typography } from "@mui/material";
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2
import { useState, useEffect } from "react";
import Person from "./Person";

export default function People() {
    const [people, setPeople] = useState([]);

    //Load products from server when the page loads for the first time using UseEffect.
    useEffect(() => {
        getAllPeople();
    }, []);

    const getAllPeople = async () => {
        let url = "https://youngstartup.io/api/cwebsite/get_speakers_dyn"
        const res = await fetch(url,
            {
                mode: 'cors',
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                }
            }
        )
        const data = await res.json();
        setPeople(data.speakers);
    }

    return (
        <>
            <Stack justifyContent="center" alignItems="center" marginBottom={3} >
                <Box marginTop={2} marginBottom={4} textAlign='center'><Typography color={"white"} fontSize={{xs:18,sm:22,md:28,lg:30}}>MEET OUR 30 FEATERED INVESTORS</Typography></Box>
                <Grid2 container spacing={{ xs: 1, sm: 2, md: 4, lg: 4 }} columns={{ xs: 2, sm: 3, md: 4, lg: 5 }} disableEqualOverflow display="flex" >
                    {
                        //show person component for each item in the list of investors 
                        people.map((p) => (
                            <Person personObj={p}></Person>
                        ))}
                </Grid2>
            </Stack>
        </>
    );
}