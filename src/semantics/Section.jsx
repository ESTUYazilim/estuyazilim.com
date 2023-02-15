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
        <Typography variant="h3">About ESC</Typography>
        <Typography variant="body1">
        ESTU Software Community was established within Eskişehir Technical University in the 2022-2023 academic year. Our community, which has a multidisciplinary structure, set out with the aim of creating software awareness within the university. It aims to help our members prepare for the business world by taking charge in various teams with interdisciplinary working principles, contributing to teamwork and supporting their academic life with the trainings given within the club, on the other hand, bringing them together with people from the sector. Considering the developing technologies, we offer the chance to get to know the software activities, which is our main goal, and to dominate these activities. Our community continues its activities both with the events held and with our dynamic staff and infrastructure we have established.
        </Typography>
        <Typography variant="h4">Mission</Typography>
        <Typography variant="body1">
        Students whose aim is to learn software or improve their current knowledge in this field; To gain software awareness both theoretically and practically, together with dynamic work teams, to bring together our members with experts in their fields, to transfer their experience and work experiences, to be an intermediary for our members in finding internship and job opportunities, and to carry out all kinds of activities that support their personal development in the socio-cultural sense. and to provide motivation by raising their goals to the highest. 
        </Typography>
        <Typography variant="h4">Vision</Typography>
        <Typography variant="body1">
        To create a bridge between business life and ESTU Software Community, while supporting both our community and our members to take part in all kinds of activities in the software world that is advancing day by day, and to be a community that supports our members with trainings and contributes to their academic development by following the developing technology together with these technologies and developments. 
        </Typography>
        <Typography variant="h4">CareerD+</Typography>
        <Typography variant="body1">
        In our CareerD+ events, we aim to build a bridge between the industry and students by bringing together experts from the industry with our members. In this way, our members have the opportunity to learn about business life while they are still students, to ask questions and find answers one-on-one, to get to know the areas they want to focus on better, and to catch various internship and job opportunities. 
        </Typography>
        <Typography variant="h4">TrainingD+</Typography>
        <Typography variant="body1">
        We aim to help them increase their level of knowledge by providing trainings and projects in programming languages ​​and to enable them to take a role in the software world. After our training, we help them put their theoretical knowledge into practice with homework and projects in direct proportion to the education, and we help them with the necessary guidance on the issues they have trouble with.
        </Typography>
        <Typography variant="h4">Event+</Typography>
        <Typography variant="body1">
        Our aim in our Event+ events is to improve the social skills of our members, to enable them to communicate with people more easily and comfortably, to expand their circle of friends and networks by coming together with people from different disciplines, and to keep their motivation high with entertaining activities as well as the trainings they receive. 
        </Typography>
      </Box>
    </Container>
  );
}
