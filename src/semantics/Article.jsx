import * as React from "react";
import { CircularProgress, Container, Box } from "@mui/material";
import { getMembers, getExecutiveStaff } from "../modules/GitHub";
import { useEffect } from "react";
import TechnicalTeam from "../components/Team/TechnicalTeam";
import ExecutiveTeam from "../components/Team/ExecutiveTeam";

export default function Members() {
    const [technicalTeamData, setTechnicalTeamData] = React.useState('');
    const [executiveTeamData, setExecuviteTeamData] = React.useState('');
    const [isLoading, setLoading] = React.useState(true);

    useEffect(() => {
        async function getTechnicalTeam() {
            const data = await getMembers();
            setTechnicalTeamData(data);
        }

        async function getExecutiveTeam() {
            const data = await getExecutiveStaff();
            setExecuviteTeamData(data);
            setLoading(false);
        }

        if (!technicalTeamData || !executiveTeamData) {
            getTechnicalTeam();
            getExecutiveTeam();
        }
    }, []);

    return (
        isLoading ? (<CircularProgress />) :
            (
                <Container component="article" id="team">
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            minHeight: "15vh",
                            marginBottom: "2rem",
                        }}>
                        <ExecutiveTeam data={executiveTeamData}/>
                        <TechnicalTeam data={technicalTeamData}/>
                    </Box>
                </Container>)
    );
}