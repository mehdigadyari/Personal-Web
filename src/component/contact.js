import React from 'react'
import { Grid, makeStyles, Typography } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
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
    textAlign: 'left'
  },
  desc: {
    cursor: 'pointer',
    transition: '1s',
    '&:hover': {
      color: theme.palette.primary.maintwo,
      transition: '0.4s'
    }
  },
  divIcon: {
    margin: 10,
    padding: 10,
    paddingBottom: 5,
    border: '1px solid #2e344e',
    marginRight: 25
  },
  divDetail: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column'
  }
}))

export default function Service({ title, text1, text2, icon }) {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Grid
        className={classes.main}
        container
        direction="row"
        justify="flex-start"
        alignItems="center"
      >
        <div className={classes.divIcon}>{icon}</div>
        <div className={classes.divDetail}>
          <Typography className={classes.title} variant="h5">
            {title}
          </Typography>
          <Typography className={classes.desc} variant="body1">
            {text1}
          </Typography>
          <Typography className={classes.desc} variant="body1">
            {text2}
          </Typography>
        </div>
      </Grid>
    </div>
  )
}
