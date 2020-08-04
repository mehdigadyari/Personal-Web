import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Typography } from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton'
import Telegram from '@material-ui/icons/Telegram'
import LinkedIn from '@material-ui/icons/LinkedIn'
import Twitter from '@material-ui/icons/Twitter'
import Instagram from '@material-ui/icons/Instagram'
import GitHub from '@material-ui/icons/GitHub'
import { getTranslate } from '../../localization'
import './home.css'

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    overflow: 'hidden',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  nameText: {
    color: theme.palette.primary.maintwo,
    [theme.breakpoints.down('xs')]: {
      display: 'block'
    }
  },
  divIcons: {
    marginTop: 25
  },
  iconButtonStyle: {
    border: '2px solid #2e344e',
    marginRight: 7,
    marginLeft: 8,
    transition: '0.5s',
    '&:hover': {
      borderColor: theme.palette.primary.maintwo,
      color: theme.palette.primary.maintwo,
      transition: '1s'
    }
  }
}))

export default function Index() {
  const classes = useStyles()
  const trans = getTranslate()

  return (
    <div className={classes.root}>
      <div id="stars" />
      <div id="stars2" />
      <div id="stars3" />
      <Grid>
        <Typography variant="h1">
          {trans.hi1} <span className={classes.nameText}> {trans.name} </span>
          {trans.hi2}
        </Typography>
        <Typography variant="subtitle1">{trans.description}</Typography>
        <div className={classes.divIcons}>
          <IconButton
            href="https://github.com/mehdigadyari"
            color="inherit"
            className={classes.iconButtonStyle}
          >
            <GitHub />
          </IconButton>
          <IconButton
            href="https://www.linkedin.com/in/mehdi-gadyari-21369b123/"
            color="inherit"
            className={classes.iconButtonStyle}
          >
            <LinkedIn />
          </IconButton>
          <IconButton
            href="https://twitter.com/GadMehdi"
            color="inherit"
            className={classes.iconButtonStyle}
          >
            <Twitter />
          </IconButton>
          <IconButton
            href="https://t.me/mehdi_gadyari"
            color="inherit"
            className={classes.iconButtonStyle}
          >
            <Telegram />
          </IconButton>
          <IconButton
            href="https://www.instagram.com/mehdi_gadyari/"
            color="inherit"
            className={classes.iconButtonStyle}
          >
            <Instagram />
          </IconButton>
        </div>
      </Grid>
    </div>
  )
}
