// import React from "react";
// import {
//     Button,
//     TextField,
//     Grid,
//     Paper,
//     AppBar,
//     Typography,
//     Toolbar,
//     Link,
// } from "@material-ui/core";
// class Login extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { username: "", password: "" , authflag:1};
//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }
//     handleChange(event) {
//         this.setState({ username: event.state.username, password: event.state.password });
//     }
//     handleSubmit(event) {
//         event.preventDefault();
//         if (this.state.username === 'admin' && this.state.password === 'admin12345') {         
//             const { username, password } = this.state;
//             localStorage.setItem('user', username);
//             localStorage.setItem('password', password);
//             // localStorage.setItem("user", JSON.stringify(username, password));
//             this.props.history.push("/news");
//         } else {
//             alert('Login Parol xato!');
//         }
//     }
//     render() {
//         return (
//             <div id="login">
//                 <AppBar position="static" alignitems="center" color="primary">
//                     <Toolbar>
//                         <Grid container justify="center" wrap="wrap">
//                             <Grid item>
//                                 <Typography variant="h6">News Site</Typography>
//                             </Grid>
//                         </Grid>
//                     </Toolbar>
//                 </AppBar>
//                 <Grid container spacing={0} justify="center" direction="row">
//                     <Grid item>
//                         <Grid
//                             container
//                             direction="column"
//                             justify="center"
//                             spacing={2}
//                             className="login-form"
//                         >
//                             <Paper
//                                 variant="elevation"
//                                 elevation={2}
//                                 className="login-background"
//                             >
//                                 <Grid item>
//                                     <Typography component="h1" variant="h5">
//                                         Sign in
//                                     </Typography>
//                                 </Grid>
//                                 <Grid item>
//                                     <form onSubmit={this.handleSubmit}>
//                                         <Grid container direction="column" spacing={2}>
//                                             <Grid item>
//                                                 <TextField
//                                                     type="text"
//                                                     placeholder="Name"
//                                                     fullWidth
//                                                     name="username"
//                                                     variant="outlined"
//                                                     value={this.state.username}
//                                                     onChange={(event) =>
//                                                         this.setState({
//                                                             [event.target.name]: event.target.value,
//                                                         })
//                                                     }
//                                                     required
//                                                     autoFocus
//                                                 />
//                                             </Grid>
//                                             <Grid item>
//                                                 <TextField
//                                                     type="password"
//                                                     placeholder="Password"
//                                                     fullWidth
//                                                     name="password"
//                                                     variant="outlined"
//                                                     value={this.state.password}
//                                                     onChange={(event) =>
//                                                         this.setState({
//                                                             [event.target.name]: event.target.value,
//                                                         })
//                                                     }
//                                                     required
//                                                 />
//                                             </Grid>
//                                             <Grid item>
//                                                 <Button
//                                                     variant="contained"
//                                                     color="primary"
//                                                     type="submit"
//                                                     className="button-block"
//                                                 >
//                                                     Submit
//                                                 </Button>
//                                             </Grid>
//                                         </Grid>
//                                     </form>
//                                 </Grid>
//                                 <Grid item>
//                                     <Link href="#" variant="body2">
//                                         Forgot Password?
//                                     </Link>
//                                 </Grid>
//                             </Paper>
//                         </Grid>
//                     </Grid>
//                 </Grid>
//             </div>
//         );
//     }
// }
// export default Login;

import React, { Component } from "react";
import "../App.css";
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Link } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      message: "",
      open: false
    };
  }

  setUsername = event => {
    this.setState({
      username: event.target.value
    });
  };

  setPassword = event => {
    this.setState({
      password: event.target.value
    });
  };

  signIn = () => {
    if (this.state.username === "admin" && this.state.password === "admin12345") {
      this.setState({
        open: true,
        message: "You have successfully Logged In!"
      });
            const { username, password } = this.state;
            localStorage.setItem('user', username);
            localStorage.setItem('password', password);
            // localStorage.setItem("user", JSON.stringify(username, password));
    } else {
        alert('Incorrect Username or Password!');
    }
  };

  handleClose = () => {
    this.setState({
      open: false
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="Login">
            <TextField
              variant="standard"
              placeholder="Username"
              margin="normal"
              required
              onChange={this.setUsername}
              value={this.state.username}
            />
            <TextField
              variant="standard"
              placeholder="Password"
              margin="normal"
              required
              type="password"
              onChange={this.setPassword}
              value={this.state.password}
            />

            <div className="Button">
              <Button
                variant="contained"
                color="primary"
                onClick={() => {
                  this.signIn();
                }}
              >
                Log In
              </Button>
            </div>
          </div>
          <Dialog
            open={this.state.open}
            onClose={this.handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">Sign In</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                {this.state.message}
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              {/* <Button onClick={this.handleClose} color="primary">
                Okay
              </Button> */}
              <Link to="/news" onClick={this.handleClose} color="primary" >Okay</Link>
            </DialogActions>
          </Dialog>
        </header>
      </div>
    );
  }
}

export default Login;