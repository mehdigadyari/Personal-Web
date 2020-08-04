import React from 'react'
import { Typography, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  root: {
    position: 'relative',
    marginBottom: 70,
    height: 75,
    width: '100%'
  },
  title: {
    textAlign: 'left',
    '&::after': {
      content: "''",
      position: 'absolute',
      left: 0,
      top: 'auto',
      bottom: 0,
      height: 5,
      borderRadius: 100,
      width: 35,
      background: '#36485a'
    },
    '&::before': {
      content: "''",
      position: 'absolute',
      left: 0,
      top: 'auto',
      bottom: 0,
      height: 5,
      borderRadius: 100,
      width: 100,
      background: 'rgba(29, 193, 21, 0.319)'
    }
  },
  subtitle: {
    fontSize: '3.2rem',
    position: 'absolute',
    left: 15,
    top: '100%',
    lineHeight: '1rem',
    fontWeight: 900,
    color: 'rgba(25,29,43,44)',
    display: 'line-block',
    zIndex: -1,
    transform: 'translateY(-40%)'
  }
}))

export default function TitleAbout({ title }) {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Typography className={classes.title} variant="h2">
        {title}
      </Typography>
      <span className={classes.subtitle}>{title}</span>
    </div>
  )
}
