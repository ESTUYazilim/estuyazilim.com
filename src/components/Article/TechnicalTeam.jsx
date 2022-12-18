import * as React from "react";
import { Paper, Typography, Avatar, Grid, Tooltip, Link } from "@mui/material";


export default function TechnicalTeam(props) {
    const { data } = props;

    return (
        <Grid container spacing={2} sx={{
            marginBottom: "2rem"
        }}>
                            <Typography variant="h4" sx={{ width: "100%" }}>
                                Technical Team    
                            </Typography>
                            <Typography variant="body" sx={{ width: "100%" }}>
                                Technical team members are responsible for the development of the projects and the maintenance of the infrastructure.
                            </Typography>
                            {data.map((member) => (
                                <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={member.id}>
                                    <Tooltip title="Click on avatar to open in new browser tab" arrow placement="top">
                                    <Paper elevation={3} sx={{
                                        padding: 2,
                                    }}>
                                        <Link href={`https://github.com/${member.login}`} target="_blank">
                                        <Avatar
                                            alt={member.login}
                                            src={member.avatar_url}
                                            sx={{ width: 56, height: 56, margin: "auto" }}
                                        />
                                        </Link>
                                        <Typography variant="h6" sx={{ textAlign: "center", padding: 2, width: "100%"}}>
                                            {member.login}
                                        </Typography>
                                    </Paper>
                                    </Tooltip>
                                </Grid>
                            ))}
                        </Grid>
    );
}