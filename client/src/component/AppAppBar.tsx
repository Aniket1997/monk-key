import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { styled, alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import MenuItem from "@mui/material/MenuItem";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import Sitemark from "./SitemarkIcon.tsx";
import ColorModeIconDropdown from "../shared-theme/ColorModeIconDropdown.tsx";

const StyledToolbar = styled(Toolbar)(({ theme }) => {
  const isDarkMode = theme.palette.mode === "dark";

  return {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexShrink: 0,
    borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
    backdropFilter: "blur(24px)",
    border: "1px solid",
    borderColor: theme.palette.divider,
    backgroundColor: isDarkMode
      ? alpha(theme.palette.background.default, 0.4)
      : alpha(theme.palette.background.paper, 0.4),
    boxShadow: theme.shadows[1],
    padding: "8px 12px",
  };
});

const StyledLinkButton = styled(Button)(({ theme }) => ({
  color: theme.palette.text.primary,
  textDecoration: "none",
  outline: "none",
}));

export default function AppAppBar() {
  const [open, setOpen] = useState(false);
  const location = useLocation(); // Get current route

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const isBlogPage = location.pathname === "/blogs";

  return (
    <AppBar
      position="fixed"
      enableColorOnDark
      sx={{
        boxShadow: 0,
        bgcolor: "transparent",
        backgroundImage: "none",
        mt: "calc(var(--template-frame-height, 0px) + 28px)",
      }}
    >
      <Container maxWidth="lg">
        <StyledToolbar variant="dense" disableGutters>
          <Box
            sx={{ flexGrow: 1, display: "flex", alignItems: "center", px: 0 }}
          >
            <Sitemark />
            {!isBlogPage && ( // Only show these tabs if not on the blog page
              <Box sx={{ display: { xs: "none", md: "flex" }, ml: 3 }}>
                <Button
                  variant="text"
                  color="info"
                  size="small"
                  onClick={() => {
                    document
                      .getElementById("features-section")
                      ?.scrollIntoView({
                        behavior: "smooth",
                      });
                  }}
                >
                  Features
                </Button>
                <Button
                  variant="text"
                  color="info"
                  size="small"
                  onClick={() => {
                    document
                      .getElementById("testimonials-section")
                      ?.scrollIntoView({
                        behavior: "smooth",
                      });
                  }}
                >
                  Testimonials
                </Button>
                <Button
                  variant="text"
                  color="info"
                  size="small"
                  onClick={() => {
                    document
                      .getElementById("heighlight-section")
                      ?.scrollIntoView({
                        behavior: "smooth",
                      });
                  }}
                >
                  Highlights
                </Button>
                <Button
                  variant="text"
                  color="info"
                  size="small"
                  onClick={() => {
                    document.getElementById("pricing-section")?.scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                >
                  Pricing
                </Button>
                <Button
                  variant="text"
                  color="info"
                  size="small"
                  sx={{ minWidth: 0 }}
                  onClick={() => {
                    document.getElementById("faq-section")?.scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                >
                  FAQ
                </Button>
                <StyledLinkButton
                  component={Link}
                  to="/blogs"
                  variant="text"
                  size="small"
                >
                  <button>Blog</button>
                </StyledLinkButton>
              </Box>
            )}
          </Box>
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 1,
              alignItems: "center",
            }}
          >
            <Button color="primary" variant="text" size="small">
              Sign in
            </Button>
            <Button color="primary" variant="contained" size="small">
              Sign up
            </Button>
            <ColorModeIconDropdown />
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" }, gap: 1 }}>
            <ColorModeIconDropdown size="medium" />
            <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="top"
              open={open}
              onClose={toggleDrawer(false)}
              PaperProps={{
                sx: {
                  top: "var(--template-frame-height, 0px)",
                },
              }}
            >
              <Box sx={{ p: 2, backgroundColor: "background.default" }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                >
                  <IconButton onClick={toggleDrawer(false)}>
                    <CloseRoundedIcon />
                  </IconButton>
                </Box>

                {!isBlogPage && ( // Also hide these menu items if on the blog page
                  <>
                    <MenuItem
                      onClick={() => {
                        document
                          .getElementById("features-section")
                          ?.scrollIntoView({
                            behavior: "smooth",
                          });
                      }}
                    >
                      Features
                    </MenuItem>
                    <MenuItem
                      onClick={() => {
                        document
                          .getElementById("testimonials-section")
                          ?.scrollIntoView({
                            behavior: "smooth",
                          });
                      }}
                    >
                      Testimonials
                    </MenuItem>
                    <MenuItem
                      onClick={() => {
                        document
                          .getElementById("heighlight-section")
                          ?.scrollIntoView({
                            behavior: "smooth",
                          });
                      }}
                    >
                      Highlights
                    </MenuItem>
                    <MenuItem
                      onClick={() => {
                        document
                          .getElementById("pricing-section")
                          ?.scrollIntoView({
                            behavior: "smooth",
                          });
                      }}
                    >
                      Pricing
                    </MenuItem>
                    <MenuItem
                      onClick={() => {
                        document.getElementById("faq-section")?.scrollIntoView({
                          behavior: "smooth",
                        });
                      }}
                    >
                      FAQ
                    </MenuItem>
                  </>
                )}
                <Divider sx={{ my: 3 }} />
                <MenuItem>
                  <Button color="primary" variant="contained" fullWidth>
                    Sign up
                  </Button>
                </MenuItem>
                <MenuItem>
                  <Button color="primary" variant="outlined" fullWidth>
                    Sign in
                  </Button>
                </MenuItem>
              </Box>
            </Drawer>
          </Box>
        </StyledToolbar>
      </Container>
    </AppBar>
  );
}
