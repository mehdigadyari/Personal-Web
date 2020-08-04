/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Typography, Modal } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 15,
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 15
  },
  image: {
    width: '100%',
    cursor: 'pointer',
    '&:hover': {
      transform: 'rotate(360deg)',
      transition: '0.4s'
    }
  },
  title: {
    textAlign: 'left',
    cursor: 'pointer',
    '& a': {
      texDecoration: 'none',
      color: '#FFF',
      transition: '0.4s',
      '&:hover': {
        color: theme.palette.maintwo,
        transition: '0.4s'
      }
    }
  },
  ModalImg: {
    width: '100%',
    height: '100%'
  },
  modal: {
    width: '60%',
    height: '80%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 60,
    [theme.breakpoints.down('xs')]: {
      width: '90%',
      height: '50%'
    }
  }
}))

export default function Index({ image, title, desc, href }) {
  const classes = useStyles()
  const [open, setOpen] = useState(false)

  return (
    <>
      <Grid item lg={4} className={classes.root}>
        <img
          onClick={() => setOpen(true)}
          src={image}
          className={classes.image}
          alt={title}
        />
        <Typography variant="h5" className={classes.title}>
          <a href={href}> {title} </a>
        </Typography>
        <Typography variant="body1">{desc}</Typography>
      </Grid>
      <Modal
        className={classes.modal}
        open={open}
        onClose={() => setOpen(false)}
      >
        <img className={classes.ModalImg} src={image} alt={title} />
      </Modal>
    </>
  )
}
