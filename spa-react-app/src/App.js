import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Grid,
  Paper,
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  header: {
    color: '#444',
    boxShadow: 'none',
  },
  footer: {
    top: 'auto',
    bottom: 0
  },
  container: {
    marginTop: theme.spacing(4),
  },
  mainGrid: {
    marginTop: theme.spacing(3),
  },
  paper: {
    padding: theme.spacing(3),
  },
  postTitle: {
    marginBottom: theme.spacing(2),
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="static" color="default" className={classes.header}>
        <Toolbar>
          <Typography variant="h5">My Blog</Typography>
        </Toolbar>
      </AppBar>

      <Container maxWidth="md" className={classes.container}>
        <Grid container spacing={3} className={classes.mainGrid}>
          <Grid item xs={12} md={8}>
            <Paper elevation={0} className={classes.paper}>
              <Typography variant="h4" className={classes.postTitle}>
                Article Title
              </Typography>
              <Typography variant="body1">
                Article content goes here...
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper elevation={0} className={classes.paper}>
              <Typography variant="h6">Recent Posts</Typography>
              <List component="nav">
                <ListItem button>
                  <ListItemText primary="Post 1" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="Post 2" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="Post 3" />
                </ListItem>
              </List>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      <AppBar position="fixed" color="default" className={classes.footer}>
        <Container maxWidth="md">
          <Toolbar>
            <Typography variant="body2">&copy; My Blog 2023</Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

export default App;
