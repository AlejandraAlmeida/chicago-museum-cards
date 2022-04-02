import { useNavigate } from "react-router";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ArrowCircleLeftRoundedIcon from "@mui/icons-material/ArrowCircleLeftRounded";

export default function Header() {
  const navigate = useNavigate();
  const currentURL = window.location.pathname;

  const returnHome = () => {
    if (currentURL !== "/") {
      return navigate("/");
    }
  };

  return (
    <Box color="Warning" sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar position="relative">
          {currentURL !== "/" && (
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2, position: "absolute" }}
              onClick={returnHome}
            >
              <ArrowCircleLeftRoundedIcon fontSize="large" />
            </IconButton>
          )}

          <Typography
            variant="h4"
            textAlign="center"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            Chicago Museum Cards
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
