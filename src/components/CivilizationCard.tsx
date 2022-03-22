import {Civilization} from "../features/civilizations/types";
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Grid} from "@mui/material";
import {useNavigate} from "react-router-dom";

const CivilizationCard = (civilization: Civilization) => {
    let navigate = useNavigate();
    const handleClick = () => {
        navigate(`/civilizations/${civilization.id}`, { replace: true })
    }

    return (
        <Grid item xs={4}>
            <Box sx={{ maxWidth: 275 }}>
                <Card variant="outlined">
                    <React.Fragment>
                        <CardContent>
                            <Typography variant="h5" component="div">
                                {civilization.name}
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                Team bonus: {civilization.team_bonus}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" onClick={handleClick}>Learn More..</Button>
                        </CardActions>
                    </React.Fragment>
                </Card>
            </Box>
        </Grid>
    )
}
export default CivilizationCard