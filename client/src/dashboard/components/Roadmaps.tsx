import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Modal,
  TextField,
  IconButton,
} from "@mui/material";
import ParticlesBackground from "../../component/ParticlesBackground";
import CustomModal from "../../component/CustomModal";


const Roadmaps = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    console.log("Opening modal");
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    console.log("Closing modal");
    setModalOpen(false);
  };

  console.log("Roadmaps component rendered with isModalOpen:", isModalOpen);

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        textAlign: "center",
        p: 2,
      }}
    >
      <ParticlesBackground />
      <Box
        sx={{
          maxWidth: "900px",
          margin: "0 auto", // Center horizontally
          mt: 4, // Margin from the top
        }}
      >
        <Typography
          variant="h4"
          sx={{
            mb: 2,
            fontSize: { xs: "2rem", sm: "2.5rem" },
            color: "primary.main",
          }}
        >
          Chart Your Path to{" "}
          <Typography
            component="span"
            sx={{ color: "primary.main", fontWeight: "bold" }}
          >
            Success
          </Typography>
        </Typography>
        <Typography
          variant="body1"
          sx={{
            mb: 4,
            fontSize: { xs: "1rem", sm: "1.2rem" },
            color: "text.secondary",
          }}
        >
          Empower your journey with personalized AI-driven tools. Create
          roadmaps, set milestones, and track progress towards achieving your
          goals.
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={handleOpenModal}
          >
            Get Started
          </Button>
          <Button variant="outlined" color="primary" size="large">
            Demo
          </Button>
        </Box>
      </Box>

      {/* Custom Modal */}
      <CustomModal open={isModalOpen} handleClose={handleCloseModal} />
    </Box>
  );
};

export default Roadmaps;
