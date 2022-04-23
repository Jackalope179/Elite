import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import "../../style/Dialog_Form.css";
import AddCircleIcon from "@mui/icons-material/AddCircle";

const Dialog_Form = (props) => {
  const [ListImage, setListImage] = React.useState([]);
  return (
    <Dialog open={props.open} onClose={props.onClose} id="dialog-form">
      <DialogTitle>Create new event</DialogTitle>
      <DialogContent>
        <DialogContentText>
          To create an event, plese fill all the field in the box below
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Describe Event"
          type="text"
          fullWidth
          variant="standard"
        />
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Desired Income"
          type="number"
          fullWidth
          variant="standard"
        />
        <AddCircleIcon
          id="dialog-form-icon"
          style={{ width: "35px", height: "35px" }}
          onClick={() => {
            setListImage([...ListImage, ""]);
          }}
        />
        {ListImage.map((item, index) => {
          return (
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Upload Image"
              type="text"
              fullWidth
              variant="standard"
            />
          );
        })}
      </DialogContent>
      <DialogActions>
        <Button onClick={props.onClose}>Cancel</Button>
        <Button onClick={props.onClose}>Post</Button>
      </DialogActions>
    </Dialog>
  );
};

export default Dialog_Form;
