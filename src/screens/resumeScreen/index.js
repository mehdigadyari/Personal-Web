import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Typography } from '@material-ui/core'
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter'
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary'
import Title from '../../component/TitleAbout'
import Skill from '../../component/Skill'
import { getTranslate } from '../../localization'
import MyStepper from '../../component/MyStepper'

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh'
  },
  skillGrid: {
    paddingTop: 60,
    paddingBottom: 50,
    paddingRight: 30,
    paddingLeft: 30,
    [theme.breakpoints.down('xs')]: {
      paddingRight: 5,
      paddingLeft: 5
    }
  },

  nameText: {
    color: theme.palette.primary.maintwo,
    [theme.breakpoints.down('xs')]: {
      display: 'block'
    }
  },
  skillSecondTitle: { marginLeft: 10 },
  GridStepper: {
    marginBottom: 15,
    marginTop: 15
  }
}))

export default function Index() {
  const classes = useStyles()
  const trans = getTranslate()

  return (
    <Grid alignItems="flex-start" container className={classes.root}>
      <Grid className={classes.skillGrid} item container xs={12}>
        <Title title={trans.myskils} />
        <Grid container direction="row">
          <Grid item xs={12} md={3}>
            <Skill value={80} title="React Native" />
            <Skill value={70} title="React Js" />
            <Skill value={60} title="JavaScript" />
            <Skill value={80} title="HTML/Css" />
            <Skill value={60} title="Jquery" />
          </Grid>
          <Grid item xs={12} md={3}>
            <Skill value={70} title="RestFull-API" />
            <Skill value={75} title="GraphQl" />
            <Skill value={75} title="MongoDB" />
            <Skill value={65} title="Native-base" />
            <Skill value={80} title="React-Native-Element" />
            <Skill value={60} title="Socket io(Real-Time)" />
            <Skill value={90} title="RTL" />
          </Grid>
          <Grid item xs={12} md={3}>
            <Skill value={65} title="Es5/Es6" />
            <Skill value={90} title="WebPack" />
            <Skill value={90} title="PWA" />
            <Skill value={90} title="Material-Ui" />
            <Skill value={90} title="React-Hooks/HOC" />
            <Skill value={90} title="Multi Language" />
            <Skill value={90} title="Clean Code" />
            <Skill value={90} title="Use-Memo" />
          </Grid>
          <Grid item xs={12} md={3}>
            <Skill value={90} title="Redux/MiddleWare/Context" />
            <Skill value={90} title="React-Router" />
            <Skill value={90} title="Reducer" />
            <Skill value={90} title="React-Navigation" />
            <Skill value={90} title="Use Navigation" />
            <Skill value={90} title="LazyLoad Component High Performance" />
            <Skill value={90} title="Animations" />
            <Skill value={90} title="Git/GitLab/GitHub/PostMan" />
          </Grid>
        </Grid>
      </Grid>

      <Grid className={classes.skillGrid} item container xs={12}>
        <Title title={trans.resume} />
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="center"
        >
          <BusinessCenterIcon style={{ fontSize: 34 }} />
          <Typography variant="h4" className={classes.skillSecondTitle}>
            {trans.educationalquantification}
          </Typography>
          <Grid container className={classes.GridStepper}>
            <MyStepper steps={trans.workingSteps} />
          </Grid>
        </Grid>

        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="center"
        >
          <LocalLibraryIcon style={{ fontSize: 34 }} />
          <Typography variant="h4" className={classes.skillSecondTitle}>
            {trans.workingexperience}
          </Typography>
          <Grid container className={classes.GridStepper}>
            <MyStepper steps={trans.eduSteps} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}
