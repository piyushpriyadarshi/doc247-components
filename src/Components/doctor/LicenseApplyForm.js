import * as React from "react";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import { Box, Typography } from "@mui/material";
import PracticeForm from "@/Components/Forms/practiceForm";
import ClinicForm from "@/Components/Forms/clinicForm";
import BasicForm from "../Forms/basicForm";

const steps = ["Basic Info", "Practice Info", "Clinic Info"];

const LicenseApplyForm = () => {
  const [activeStepCount, setActiveStepCount] = React.useState(0);
  const [skip, setSkip] = React.useState(new Set());

  const skipStep = (step) => {
    return skip.has(step);
  };

  const handleStepNext = () => {
    let newSkipped = skip;
    if (skipStep(activeStepCount)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStepCount);
    }

    setActiveStepCount((prevActiveStep) => prevActiveStep + 1);
    setSkip(newSkipped);
  };

  const handleStepBack = () => {
    setActiveStepCount((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepReset = () => {
    setActiveStepCount(0);
  };
  console.log("active", activeStepCount);

  return (
    <>
      <Box sx={{ m: 2, xs: { m: 0 }, p: 1 }}>
        <Stepper activeStep={activeStepCount}>
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};
            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        {activeStepCount == 0 && <BasicForm />}
        {activeStepCount == 1 && <PracticeForm />}
        {activeStepCount == 2 && <ClinicForm />}
        {activeStepCount === steps.length ? (
          <Box>
            <h3 sx={{ mt: 4, mb: 2, color: "green" }}>
              information submitted successfully
            </h3>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                pt: 4,
              }}
            >
              <Box sx={{ flex: "1 1 auto" }} />
              <Button onClick={handleStepReset}>Reset</Button>
            </Box>
          </Box>
        ) : (
          <Box>
            <h3 sx={{ mt: 2, mb: 1 }}>
              Step
              {activeStepCount + 1}
            </h3>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                pt: 2,
              }}
            >
              <Button
                color="primary"
                disabled={activeStepCount === 0}
                onClick={handleStepBack}
                sx={{ mr: 1 }}
              >
                Previous
              </Button>
              <Box sx={{ flex: "1 1 auto" }} />

              <Button onClick={handleStepNext}>
                {activeStepCount === steps.length - 1 ? "Done" : "Next"}
              </Button>
            </Box>
          </Box>
        )}
      </Box>
    </>
  );
};

export default LicenseApplyForm;
