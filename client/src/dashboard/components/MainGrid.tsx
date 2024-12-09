import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Copyright from "../internals/components/Copyright";
import Home from "./Home";
import Roadmaps from "./Roadmaps";
// import Quizs from "./Quizs";
// import Tasks from "./Tasks";
import { useSelectedItem } from "../../customHooks/SelectedItemProvider";

const MainGrid: React.FC = () => {
  const { selectedItem } = useSelectedItem();

  // Render the correct component based on the selected item
  const renderContent = () => {
    switch (selectedItem) {
      case "Home":
        return <Home />;
      case "Roadmaps":
        return <Roadmaps />;
      //   case "Quizs":
      //     return <Quizs />;
      //   case "Tasks":
      //     return <Tasks />;
      default:
        return <Home />; // Default to Home
    }
  };

  return (
    <Box sx={{ width: "100%", maxWidth: { sm: "100%", md: "1700px" }, p: 2 }}>
      <Typography component="h2" variant="h6" sx={{ mb: 2 }}>
        {selectedItem}
      </Typography>
      {renderContent()}
      <Copyright sx={{ my: 4 }} />
    </Box>
  );
};

export default MainGrid;
