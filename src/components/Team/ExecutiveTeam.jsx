import * as React from "react";
import { Paper, Typography, Avatar, Grid, Tooltip, Link, List, ListItem, ListItemText, ListItemButton } from "@mui/material";


export default function ExecutiveTeam(props) {
    const { data } = props;
    console.log(data);

    return (
        <Grid container spacing={2}>
            <Typography variant="h4" sx={{ width: "100%" }}>
                Executive Staff
            </Typography>
            <Typography variant="body" sx={{ width: "100%" }}>
                Executive staff members are responsible for the management of both departments and the community.
            </Typography>
            {executivePaper("President and Business Department Leader", data.get("president"))}
            {executivePaper("Vice President", data.get("vice_president"))}
            {executivePaper("Educational Department Leader", data.get("educational_lead"))}
            {executivePaper("Technical Department Leader", data.get("technical_lead"))}
        </Grid>
    );
}

function executivePaper(title, member) {
    return (
        <Grid item xs={12} md={4} sx={{
            marginBottom: "2rem"
        }}>
            <Tooltip title="Click on avatar to open in new browser tab" arrow>
                <Paper key={title} elevation={3} sx={{
                    padding: 2,
                    height: "35vh"
                }}>
                    <Link href={`https://github.com/${member.login}`} target="_blank">
                        <Avatar
                            alt={member.name}
                            src={member.avatar_url}
                            sx={{ width: 96, height: 96, margin: "auto" }}
                        />
                    </Link>
                    <Typography variant="h5" sx={{ textAlign: "center", padding: 2 }}>
                        {member.name}
                    </Typography>
                    <Typography variant="h6" sx={{ textAlign: "center", padding: 2 }}>
                        {title}
                    </Typography>
                </Paper>
            </Tooltip>
        </Grid>
    );
}