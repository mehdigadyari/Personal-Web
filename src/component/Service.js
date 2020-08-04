import React from 'react'
import { Grid, makeStyles, Typography } from '@material-ui/core'
import { getTranslate } from '../localization'

const useStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: 15,
    paddingRight: 15,
    marginTop: 20
  },
  main: {
    backgroubdColor: '#191d2b',
    zIndex: 1,
    border: '1px solid #2e344e',
    borderTop: '5px solid #2e344e',
    padding: theme.spacing(6),
    transition: '0.4s',
    '&:hover': {
      borderTopColor: theme.palette.primary.main,
      transition: '0.4s'
    }
  },

  title: {
    marginTop: 15,
    position: 'relative',
    '&::before': {
      content: "''",
      position: 'absolute',
      left: 0,
      top: -10,
      bottom: 0,
      height: 2,
      width: 50,
      background: '#2e344e'
    },
    '&::after': {
      content: "''",
      position: 'absolute',
      left: 0,
      top: 40,
      bottom: 0,
      height: 2,
      width: 50,
      background: '#2e344e'
    }
  },
  desc: {
    marginTop: 15
  },
  FronttIcon: {
    width: 60,
    height: 60
  }
}))

export default function Service({ title, desc, icon }) {
  const classes = useStyles()
  const trans = getTranslate()
  return (
    <Grid item lg={4} md={6} xs={12} className={classes.root}>
      <Grid
        className={classes.main}
        container
        direction="column"
        alignItems="flex-start"
      >
        <img src={icon} alt={trans.name} className={classes.FronttIcon} />
        <Typography className={classes.title} variant="h5">
          {title}
        </Typography>
        <Typography className={classes.desc} variant="body1">
          {desc}
        </Typography>
      </Grid>
    </Grid>
  )
}
