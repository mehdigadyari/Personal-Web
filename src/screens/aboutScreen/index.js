import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Typography, Button } from '@material-ui/core'
import Title from '../../component/TitleAbout'
import { getTranslate } from '../../localization'
import MainImg from '../../asset/prof2.jpg'
import Service from '../../component/Service'
import FrontIcon from '../../asset/encryption.png'
import appIcon from '../../asset/facebook.png'
import apiIcon from '../../asset/api.png'

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh'
  },
  aboutGrid: {
    paddingTop: 60,
    paddingBottom: 50,
    paddingRight: 30,
    paddingLeft: 30
  },
  GridImg: {
    position: 'relative',
    '&::after': {
      content: "''",
      position: 'absolute',
      right: 0,
      top: 'auto',
      bottom: 0,
      height: '65%',
      // borderRadius: 100,
      width: 15,
      background: 'rgba(3,27,255,0.6)'
    },
    '&::before': {
      content: "''",
      position: 'absolute',
      left: 0,
      top: '0',
      // bottom: 0,
      height: '65%',
      // borderRadius: 100,
      width: 15,
      background: 'rgba(3, 127, 255, 0.6)'
    }
  },
  MainImg: {
    width: '60%'
  },
  aboutTextGrid: {
    paddingLeft: 20,
    paddingRight: 20,
    [theme.breakpoints.down('xs')]: {
      padding: 0,
      marginTop: 15,
      marginButtom: 15
    }
  },
  nameText: {
    color: theme.palette.primary.maintwo,
    [theme.breakpoints.down('xs')]: {
      display: 'block'
    }
  },
  iconStyle: {
    fontSize: 36,
    color: theme.palette.primary.maintwo
  }
}))

export default function Index() {
  const classes = useStyles()
  const trans = getTranslate()

  return (
    <Grid alignItems="flex-start" container className={classes.root}>
      <Grid className={classes.aboutGrid} item container xs={12}>
        <Title title={trans.aboutme} />
        <Grid container direction="row">
          <Grid item xs={12} md={6} className={classes.GridImg}>
            <img className={classes.MainImg} src={MainImg} alt={trans.name} />
          </Grid>
          <Grid item xs={12} md={6} className={classes.aboutTextGrid}>
            <Typography variant="h3">
              {trans.hi1}
              <span className={classes.nameText}> {trans.name} </span>
              {trans.hi2}
            </Typography>
            <Typography variant="body1">{trans.description}</Typography>
            <Typography variant="body1" style={{ marginTop: 10 }}>
              <b style={{ maxWidth: 100, display: 'inline-block' }}>
                {trans.fullname}
              </b>
              : {trans.name}
            </Typography>
            <Typography variant="body1" style={{ marginTop: 10 }}>
              <b style={{ maxWidth: 100, display: 'inline-block' }}>
                {trans.age}
              </b>
              : 24 {trans.year}
            </Typography>
            <Typography variant="body1" style={{ marginTop: 5 }}>
              <b style={{ maxWidth: 100, display: 'inline-block' }}>
                {trans.nation}
              </b>
              : {trans.iranian}
            </Typography>
            <Typography variant="body1" style={{ marginTop: 5 }}>
              <b style={{ maxWidth: 100, display: 'inline-block' }}>
                {trans.language}
              </b>
              : {trans.languageName}
            </Typography>
            <Typography variant="body1" style={{ marginTop: 5 }}>
              <b style={{ maxWidth: 100, display: 'inline-block' }}>
                {trans.phone}
              </b>
              : {trans.num}
            </Typography>
            <div style={{ display: 'flex', marginTop: 20 }}>
              <Button variant="contained" color="primary">
                {trans.res}
              </Button>
            </div>
            <Typography
              variant="body1"
              color="secondary"
              style={{ marginTop: 5 }}
            >
              {trans.listening}
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid className={classes.aboutGrid} item container xs={12}>
        <Title title={trans.services} />
        <Grid container direction="row">
          <Service
            icon={FrontIcon}
            title={trans.webdesign}
            desc={trans.servicedesc}
          />
          <Service
            icon={appIcon}
            title={trans.mobileapplication}
            desc={trans.servicedesc1}
          />
          <Service
            icon={apiIcon}
            title={trans.webdevelopment}
            desc={trans.servicedesc2}
          />
        </Grid>
      </Grid>
    </Grid>
  )
}
