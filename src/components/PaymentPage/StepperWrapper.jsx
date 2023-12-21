import {
  Box,
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  useSteps,
} from '@chakra-ui/react';

export default function StepperWrapper({ idx }) {
  const steps = [
    { title: 'Checkout' },
    { title: 'Payment' },
    { title: 'Summary' },
  ];

  const { activeStep } = useSteps({
    index: idx,
    count: steps.length,
  });

  return (
    <Stepper
      index={activeStep}
      display={{ base: 'none', md: 'flex' }}
      mt={4}
      w='70%'
    >
      {steps.map((step, index) => (
        <Step key={index}>
          <StepIndicator color={'brand.foreground'}>
            <StepStatus
              complete={<StepIcon />}
              incomplete={<StepNumber />}
              active={<StepNumber />}
            />
          </StepIndicator>

          <Box>
            <StepTitle color={'brand.foreground'}>{step.title}</StepTitle>
            <StepDescription>{step.description}</StepDescription>
          </Box>

          <StepSeparator />
        </Step>
      ))}
    </Stepper>
  );
}
