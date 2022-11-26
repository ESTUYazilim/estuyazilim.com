import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import LinearProgress from "@mui/material/LinearProgress";

// Purpose of this component is avoid multiple re-renders in header component.
// Only this component will render each state update instead whole header
const ProgressBar = (props) => {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 50 ? 0 : prevProgress + 2
      );
    }, 200);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ width: "100%", mr: 1 }}>
        <LinearProgress
          variant="determinate"
          value={progress}
          color="inherit"
        />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="inherit">{`${Math.round(
          progress
        )}%`}</Typography>
      </Box>
    </Box>
  );
};

export default ProgressBar;
