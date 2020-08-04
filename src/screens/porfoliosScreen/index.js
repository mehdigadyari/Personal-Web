import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'
import Title from '../../component/TitleAbout'
import { getTranslate } from '../../localization'
import Service from '../../component/Service'
import FrontIcon from '../../asset/instagram.png'
import appIcon from '../../asset/feet.png'
import foodIcon from '../../asset/food.png'
import foodWebIcon from '../../asset/foodWeb.png'

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    padding: 30,
    paddingTop: 60,
    width: '100%',
    [theme.breakpoints.down('xs')]: {
      paddingRight: 10,
      paddingLeft: 10
    }
  }
}))

export default function Index() {
  const classes = useStyles()
  const trans = getTranslate()

  return (
    <div className={classes.root}>
      <Title title={trans.portfolios} />

      <Grid item container xs={12}>
        <Grid container direction="row">
          <Service icon={FrontIcon} title={trans.pro1} desc={trans.pro1desc} />
          <Service icon={appIcon} title={trans.pro2} desc={trans.pro2desc} />
          <Service icon={foodIcon} title={trans.pro3} desc={trans.pro3desc} />
        </Grid>
        <Grid container direction="row">
          <Service icon={FrontIcon} title={trans.pro4} desc={trans.pro4desc} />
          <Service icon={appIcon} title={trans.pro5} desc={trans.pro5desc} />
          <Service
            icon={foodWebIcon}
            title={trans.pro6}
            desc={trans.pro6desc}
          />
        </Grid>
      </Grid>
    </div>
  )
}
