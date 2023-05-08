import React from "react";
import {
  Paper,
  Grid,
  IconButton,
  InputBase,
  useTheme,
  useMediaQuery,
  Box,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useRouter } from "next/router";

const SearchBar = ({ onFocus, onChange }) => {
  const theme = useTheme();
  const router = useRouter();
  const searchShow = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <Grid container spacing={1} sx={{ marginBottom: "0.5rem" }}>
      <Grid item xs={12}>
        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            //   width: searchShow ? 400 : 1200,
            borderRadius: "2rem",
          }}
          elevation={4}
          onFocus={onFocus}
        >
          <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
            <SearchIcon />
          </IconButton>
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search for dostors or symptoms."
            inputProps={{ "aria-label": "Search doctors" }}
            onChange={onChange}
          />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default SearchBar;
