import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid2";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import AutoFixHighRoundedIcon from "@mui/icons-material/AutoFixHighRounded";
import ConstructionRoundedIcon from "@mui/icons-material/ConstructionRounded";
import QueryStatsRoundedIcon from "@mui/icons-material/QueryStatsRounded";
import SettingsSuggestRoundedIcon from "@mui/icons-material/SettingsSuggestRounded";
import SupportAgentRoundedIcon from "@mui/icons-material/SupportAgentRounded";
import ThumbUpAltRoundedIcon from "@mui/icons-material/ThumbUpAltRounded";
import { styled } from "@mui/material";

const items = [
  {
    icon: <SettingsSuggestRoundedIcon />,
    title: "Built to Last",
    description:
      "Rely on a platform designed to support your long-term preparation journey, making it a lasting and valuable resource.",
  },
  {
    icon: <ConstructionRoundedIcon />,
    title: "Seamless User Experience",
    description:
      "Navigate effortlessly with an intuitive interface that integrates into your routine, making study preparation stress-free.",
  },
  {
    icon: <ThumbUpAltRoundedIcon />,
    title: "Great user experience",
    description:
      "Integrate our product into your routine with an intuitive and easy-to-use interface.",
  },
  {
    icon: <AutoFixHighRoundedIcon />,
    title: "Innovative functionality",
    description:
      "Stay ahead with advanced features like customizable roadmaps, personalized quizzes, and dynamic goal tracking, redefining study preparation.",
  },
  {
    icon: <SupportAgentRoundedIcon />,
    title: "Reliable support",
    description:
      "Our responsive team is here to guide you every step of the way, ensuring you have the assistance you need to succeed.",
  },
  {
    icon: <QueryStatsRoundedIcon />,
    title: "Attention to Detail",
    description:
      "Experience a platform designed with precision, where every feature is thoughtfully crafted to make your study journey more effective and enjoyable.",
  },
];

const FlexContainer = styled("div")({
  display: "flex",
  gap: "10px",
  alignItems: "center",
});

export default function Highlights() {
  return (
    <Box
      id="highlights"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        color: "white",
        bgcolor: "grey.900",
      }}
    >
      <Container
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: { xs: 3, sm: 6 },
        }}
      >
        <Box
          sx={{
            width: { sm: "100%", md: "60%" },
            textAlign: { sm: "left", md: "center" },
          }}
        >
          <Typography component="h2" variant="h4" gutterBottom>
            Highlights
          </Typography>
          <Typography variant="body1" sx={{ color: "grey.400" }}>
            Effortlessly tailor your study goals and roadmaps to match your pace
            and needs, boosting efficiency and helping you achieve more.
          </Typography>
        </Box>
        <Grid container spacing={2}>
          {items.map((item, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
              <Stack
                direction="column"
                component={Card}
                spacing={1}
                useFlexGap
                sx={{
                  color: "inherit",
                  p: 3,
                  height: "100%",
                  borderColor: "hsla(220, 25%, 25%, 0.3)",
                  backgroundColor: "grey.800",
                }}
              >
                <FlexContainer>
                  <Box sx={{ opacity: "50%" }}>{item.icon}</Box>
                  <Typography gutterBottom sx={{ fontWeight: "medium" }}>
                    {item.title}
                  </Typography>
                </FlexContainer>
                <div>
                  <Typography variant="body2" sx={{ color: "grey.400" }}>
                    {item.description}
                  </Typography>
                </div>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
