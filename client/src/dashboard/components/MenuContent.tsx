import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Stack from "@mui/material/Stack";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import AssignmentRoundedIcon from "@mui/icons-material/AssignmentRounded";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import { useSelectedItem } from "../../customHooks/SelectedItemProvider";

const mainListItems = [
  { text: "Home", icon: <HomeRoundedIcon /> },
  { text: "Roadmaps", icon: <AccountTreeIcon /> },
  { text: "Quizs", icon: <FactCheckIcon /> },
  { text: "Tasks", icon: <AssignmentRoundedIcon /> },
];

const MenuContent: React.FC = () => {
  const { selectedItem, setSelectedItem } = useSelectedItem();

  const handleItemClick = (text: string) => {
    setSelectedItem(text);
    console.log(`Clicked item: ${text}`);
  };

  return (
    <Stack sx={{ flexGrow: 1, p: 1, justifyContent: "space-between" }}>
      <List dense>
        {mainListItems.map((item, index) => (
          <ListItem key={index} disablePadding sx={{ display: "block" }}>
            <ListItemButton
              selected={selectedItem === item.text}
              onClick={() => handleItemClick(item.text)}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Stack>
  );
};

export default MenuContent;
