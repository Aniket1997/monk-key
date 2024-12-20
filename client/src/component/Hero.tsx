import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import InputLabel from "@mui/material/InputLabel";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { checkUser } from "../api/AuthApi";
import { visuallyHidden } from "@mui/utils";
import { styled } from "@mui/material/styles";

const StyledBox = styled("div")(({ theme }) => ({
  alignSelf: "center",
  width: "100%",
  height: 400,
  marginTop: theme.spacing(8),
  borderRadius: theme.shape.borderRadius,
  outline: "6px solid",
  outlineColor: "hsla(220, 25%, 80%, 0.2)",
  border: "1px solid",
  borderColor: theme.palette.grey[200],
  boxShadow: "0 0 12px 8px hsla(220, 25%, 80%, 0.2)",
  backgroundImage: `url(https://mui.com/static/screenshots/material-ui/getting-started/templates/dashboard.jpg)`,
  backgroundSize: "cover",
  [theme.breakpoints.up("sm")]: {
    marginTop: theme.spacing(10),
    height: 700,
  },
  ...(theme.palette.mode === "dark" && {
    boxShadow: "0 0 24px 12px hsla(210, 100%, 25%, 0.2)",
    backgroundImage: `url(https://mui.com/static/screenshots/material-ui/getting-started/templates/dashboard-dark.jpg)`,
    outlineColor: "hsla(220, 20%, 42%, 0.1)",
    borderColor: theme.palette.grey[700],
  }),
}));

const Hero: React.FC = () => {
  const [email, setEmail] = useState<string>(""); // Typed as string
  const navigate = useNavigate();

  const handleCheckUser = async (): Promise<void> => {
    if (!email) {
      alert("Please enter an email address.");
      return;
    }
    try {
      const response = await checkUser({ email });
      if (response.exists) {
        setEmail(email); // Set user email in context
        navigate(`/signin?email=${encodeURIComponent(email)}`); // Redirect to login with email
      } else {
        setEmail(email); // Set user email in context
        navigate(`/signup?email=${encodeURIComponent(email)}`); // Redirect to signup with email
      }
    } catch (error) {
      console.error("Error checking user:", error);
    }
  };

  return (
    <Box
      id="hero"
      sx={(theme) => ({
        width: "100%",
        backgroundRepeat: "no-repeat",
        backgroundImage:
          "radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 90%), transparent)",
        ...theme.applyStyles?.("dark", {
          backgroundImage:
            "radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 16%), transparent)",
        }),
      })}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 12 },
        }}
      >
        <Stack
          spacing={2}
          useFlexGap
          sx={{ alignItems: "center", width: { xs: "100%", sm: "70%" } }}
        >
          <Typography
            variant="h1"
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              alignItems: "center",
              fontSize: "clamp(2rem, 10vw, 2rem)",
            }}
          >
            Empower&nbsp; Learning&nbsp; Journey&nbsp;
            <Typography
              component="span"
              variant="h1"
              sx={(theme) => ({
                fontSize: "inherit",
                color: "primary.main",
                ...theme.applyStyles?.("dark", {
                  color: "primary.light",
                }),
              })}
            >
              AI-Driven
            </Typography>
          </Typography>
          <Typography
            sx={{
              textAlign: "center",
              color: "text.secondary",
              width: { sm: "100%", md: "80%" },
            }}
          >
            Master any topic with personalized AI-driven tools. Create roadmaps,
            set goals, and track progress to ace your exams—be it academics,
            certifications, or beyond. Your success, reimagined.
          </Typography>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={1}
            useFlexGap
            sx={{ pt: 2, width: { xs: "100%", sm: "350px" } }}
          >
            <InputLabel htmlFor="email-hero" sx={visuallyHidden}>
              Email
            </InputLabel>
            <TextField
              id="email-hero"
              hiddenLabel
              size="small"
              variant="outlined"
              aria-label="Enter your email address"
              placeholder="Your email address"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Update email on change
              inputProps={{
                autoComplete: "off",
                "aria-label": "Enter your email address",
              }}
            />
            <Button
              variant="contained"
              color="primary"
              size="small"
              sx={{ minWidth: "fit-content" }}
              onClick={handleCheckUser}
            >
              Start now
            </Button>
          </Stack>
          <Typography
            variant="caption"
            color="text.secondary"
            sx={{ textAlign: "center" }}
          >
            By clicking &quot;Start now&quot; you agree to our&nbsp;
            <Link href="#" color="primary">
              Terms & Conditions
            </Link>
            .
          </Typography>
        </Stack>
        <StyledBox id="image" />
      </Container>
    </Box>
  );
};

export default Hero;
