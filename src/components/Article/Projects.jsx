import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

export default function Projects(props) {
    const { data } = props;
    return (
        <Grid container spacing={2} id="projects">
            <Typography variant="h4" sx={{ width: "100%" }}>
                Projects of ESC
            </Typography>
            <Typography variant="body" sx={{ width: "100%" }}>
                The projects of the ESC are developed by the technical team.
            </Typography>
            {/* {repositoryPaper("")} */}
        </Grid>
    );
}

function repositoryPaper(repository) {
    return (
        <Grid item xs={12} md={4} id="projects" sx={{
            marginBottom: "2rem"
        }}>
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Word of the Day
                    </Typography>
                    <Typography variant="h5" component="div">
                        benevolent
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        adjective
                    </Typography>
                    <Typography variant="body2">
                        well meaning and kindly.
                        <br />
                        {'"a benevolent smile"'}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
        </Grid>
    );
}