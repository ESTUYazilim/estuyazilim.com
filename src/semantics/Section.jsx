import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

export default function Section() {
  return (
    <Container component="section" id="about">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "15vh",
          marginBottom: "2rem",
        }}>
        <Typography variant="h2">About ESC</Typography>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, neque? Earum aliquam exercitationem dicta deleniti accusantium reiciendis mollitia possimus illo suscipit perferendis, dolor neque, doloribus voluptate minus ex non incidunt sapiente veniam velit at eveniet nostrum quaerat libero? Recusandae quae excepturi et est. In officia eius modi doloremque deleniti ea quidem incidunt vero, vel fugiat a ducimus error alias culpa expedita harum totam adipisci necessitatibus nostrum labore, cupiditate earum voluptate. Magnam, eligendi. Doloremque illo natus quam incidunt. Perspiciatis id nesciunt illo consequatur ducimus similique. Quo sit animi nemo fugit deserunt, maxime at doloremque dolores consequuntur facilis id. Voluptates unde molestias, accusantium labore laborum asperiores velit! Unde odio dolores animi commodi, tenetur facilis exercitationem voluptas illum quisquam ipsum odit reiciendis et nihil quibusdam. Aut praesentium reprehenderit repellendus neque quasi fugiat quam a suscipit, ipsam quia aspernatur totam in modi debitis perspiciatis ad officiis dicta, dolores ducimus consectetur saepe tempore. Quaerat, totam.
        </Typography>
      </Box>
    </Container>
  );
}
