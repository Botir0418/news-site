
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
