/* eslint-disable no-nested-ternary */
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'
import StepContent from '@material-ui/core/StepContent'
import Typography from '@material-ui/core/Typography'
import { StepConnector, Hidden } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%'
  },
  stepConector: {
    paddingBottom: 0,
    '& span': {
      borderLeft: '3px solid #2e344e'
    }
  },
  stepper: {
    backgroundColor: 'transparent',
    [theme.breakpoints.down('xs')]: {
      paddingRight: 0,
      paddingLeft: 0
    }
  },
  stepContent: {
    marginTop: 0,
    borderLeft: '3px solid #2e344e'
  },
  circle: {
    width: 16,
    height: 16,
    borderRadius: 8,
    border: '5px solid #2e344e',
    marginLeft: 6
  },
  stepLabel: {
    display: 'flex',
    flexDirection: 'row'
  },
  label: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-start'
    }
  },
  title: {
    marginLeft: 15,
    color: theme.palette.primary.maintwo
  },
  line: {
    marginRight: 15,
    width: 30,
    height: 1,
    backgroundColor: '#2e344e'
  },
  date: {
    width: 200,
    marginLeft: 15,
    textAlign: 'left'
  },
  divContent: {
    display: 'flex',
    flexDirection: 'row',
    paddingTop: 15
  },
  divWidthContent: {
    width: 275
  },
  divTypoContent: {
    textAlign: 'left'
  }
}))

export default function MyStepper({ steps }) {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Stepper
        connector={<StepConnector className={classes.stepConector} />}
        className={classes.stepper}
        orientation="vertical"
      >
        {steps.map((step) =>
          step.id >= 0 ? (
            <Step active key={step.id}>
              <StepLabel
                classes={{ label: classes.label }}
                className={classes.stepLabel}
                icon={<span className={classes.circle} />}
              >
                <Typography className={classes.date} variant="h6">
                  {step.date}
                </Typography>
                <Hidden xsDown>
                  <span className={classes.line} />
                </Hidden>
                <Typography className={classes.title} variant="h5">
                  {step.title}
                </Typography>
              </StepLabel>
              <StepContent className={classes.stepContent}>
                <div className={classes.divContent}>
                  <Hidden xsDown>
                    <div className={classes.divWidthContent} />
                  </Hidden>
                  <div style={{ flex: 1 }}>
                    <Typography variant="h6" className={classes.divTypoContent}>
                      {step.subtitle}
                    </Typography>
                    <Typography variant="body1">{step.content}</Typography>
                  </div>
                </div>
              </StepContent>
            </Step>
          ) : step.id === -1 ? (
            <Step active key={step.id}>
              <StepLabel icon={null} />
            </Step>
          ) : null
        )}
      </Stepper>
    </div>
  )
}
