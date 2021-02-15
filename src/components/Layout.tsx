import * as React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ViewListIcon from '@material-ui/icons/ViewList';
import redirect from '../lib/redirect';

interface LayoutProps {
  children?: any; 
  title: string; 
}

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    appBar: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      backgroundColor: theme.palette.background.default,
      color: theme.palette.primary.dark
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0
    },
    drawerPaper: {
      width: drawerWidth,
      background: theme.palette.primary.main,
      color: 'white'
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing(3),
    },
  }),
);

const Layout: React.FC<LayoutProps> = (props) => {
  const { children, title } = props; 
  const classes = useStyles();

  const handleClickIcon = (route: string) => { 
      redirect(route);
  }

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar} elevation={0}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={classes.toolbar} />
        <List>
          <ListItem button onClick={()=>handleClickIcon('/home')}>
            <ListItemIcon><HomeIcon style={{fill: "white"}}/></ListItemIcon>
            <ListItemText><b>Home</b></ListItemText>
          </ListItem>
          <ListItem button onClick={()=>handleClickIcon('/dashboard')}>
            <ListItemIcon><DashboardIcon style={{fill: "white"}}/></ListItemIcon>
            <ListItemText><b>Dashboard</b></ListItemText>
          </ListItem>
          <ListItem button onClick={()=>handleClickIcon('/studentlist')}>
            <ListItemIcon><ViewListIcon style={{fill: "white"}}/></ListItemIcon>
            <ListItemText><b>Student List</b></ListItemText>
          </ListItem>
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {children}
      </main>
    </div>
  );
};

export default Layout; 