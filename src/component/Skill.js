/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-shadow */
import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography, LinearProgress } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    padding: 10,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start'
  },
  progressDiv: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%'
  },
  progress: {
    width: '90%',
    marginLeft: 15,
    height: 6,
    backgroundColor: '#2e344e'
  }
}))

export default function Index({ value, title }) {
  const classes = useStyles()

  const [val, setVal] = useState(30)
  //   useEffect(() => {
  //     setTimeout(() => {
  //       if (val === value) {
  //         return
  //       }
  //       setVal((val) => val + 5)
  //     }, 100)
  //   }, [val])

  useEffect(() => {
    setTimeout(() => {
      setVal(value)
    }, 500)
  }, [])

  return (
    <div className={classes.root}>
      <Typography variant="h6"> {title} </Typography>
      <div className={classes.progressDiv}>
        <Typography variant="body1">{value}%</Typography>
        <LinearProgress
          className={classes.progress}
          value={val}
          variant="determinate"
          color="primary"
        />
      </div>
    </div>
  )
}
