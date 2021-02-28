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
import AddBoxIcon from '@material-ui/icons/AddBox';
import ViewListIcon from '@material-ui/icons/ViewList';
import redirect from '../lib/redirect';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';

interface LayoutProps {
  children?: any; 
  title: string; 
}

const drawerWidth = 210;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    backgroundColor: 'white',
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
  iconText: { 
    marginLeft: theme.spacing(-2)
  },
  iconPic: { 
    marginLeft: theme.spacing(1.5)
  },
  button: { 
    margin: theme.spacing(0,3,0),
    padding: theme.spacing(3,-3,3),
    backgroundColor: '#9ACD32'
  },
  directoryList: { 
    marginTop: theme.spacing(2)
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(5),
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
        <b>{title}</b>
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
    <Button 
      variant="contained" 
      color="secondary" 
      className={classes.button} 
      onClick={()=>handleClickIcon('/creategroup')}
      disableElevation
    >
      Create Group
    </Button>
    <List className={classes.directoryList}>
      <ListItem button onClick={()=>handleClickIcon('/home')}>
        <ListItemIcon className={classes.iconPic}><HomeIcon style={{fill: "white"}}/></ListItemIcon>
        <ListItemText className={classes.iconText}>Home</ListItemText>
      </ListItem>
      <Divider/>
      <ListItem button onClick={()=>handleClickIcon('/studentlist')}>
        <ListItemIcon className={classes.iconPic}><ViewListIcon style={{fill: "white"}}/></ListItemIcon>
        <ListItemText className={classes.iconText}>Student List</ListItemText>
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