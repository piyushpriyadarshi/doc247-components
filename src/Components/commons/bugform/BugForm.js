import {
  Button,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React from "react";
import styles from "./bugform.module.css";
function BugForm() {
  return (
    <Container>
      <Grid item xs={12} className={styles.bug}>
        <FormControl sx={{ minWidth: 120 }} size="medium" fullWidth>
          <InputLabel id="editor-language">Lang</InputLabel>
          <Select
            labelId="editor-language"
            id="editor-language"
            value={"content"}
            label="IssueType"
            //   onChange={handleLangChange}
          >
            {["content", "software"].map((lang) => {
              return (
                <MenuItem value={lang} key={lang}>
                  {lang}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12} className={styles.bug}>
        <TextField
          label="BugName"
          variant="outlined"
          rows={5}
          multiline
          fullWidth
        />
      </Grid>
      <Grid item xs={12} className={styles.bug}>
        <Button variant="contained" fullWidth color="secondary">
          Send
        </Button>
      </Grid>
    </Container>
  );
}

export default BugForm;
