import * as React from "react";
import { CircularProgress, Container, Box } from "@mui/material";
import { getMembers, getExecutiveStaff } from "../modules/GitHub";
import { useEffect } from "react";
import TechnicalTeam from "../components/Article/TechnicalTeam";
import ExecutiveTeam from "../components/Article/ExecutiveTeam";
import Projects from "../components/Article/Projects";

export default function Members() {
  const [technicalTeamData, setTechnicalTeamData] = React.useState(null);
  const [executiveTeamData, setExecuviteTeamData] = React.useState(null);
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

  return isLoading ? (
    <Container component="article" id="team">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          minHeight: "15vh",
          marginBottom: "2rem",
        }}>
        <CircularProgress />
      </Box>
    </Container>
  ) : (
    <Container component="article" id="team">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "15vh",
          marginBottom: "2rem",
        }}>
        <ExecutiveTeam data={executiveTeamData} />
        <TechnicalTeam data={technicalTeamData} />
        {/* <Projects /> */}
      </Box>
    </Container>
  );
}
