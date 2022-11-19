import * as React from "react";
import PropTypes from 'prop-types';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Carousel from "../components/Carousel";
import LinearProgress from '@mui/material/LinearProgress';

function LinearProgressWithLabel(props) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '100%', mr: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="inherit">{`${Math.round(
          props.value,
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

LinearProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate and buffer variants.
   * Value between 0 and 100.
   */
  value: PropTypes.number.isRequired,
};

export default function Header() {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 50 ? 0 : prevProgress + 2));
    }, 200);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Container component="header" sx={{ mt: 4, mb: 2 }}>
        <Typography variant="body1">Stay Tuned!</Typography>
        <Typography variant="body2">'estuyazilim.com' is currently under construction</Typography>
        <LinearProgressWithLabel color='inherit' value={progress} />
      </Container>
      <Carousel
        next={() => {/* Do stuff */ }}
        prev={() => {/* Do other stuff */ }}
      >
      </Carousel>
    </Box>
  );
}
