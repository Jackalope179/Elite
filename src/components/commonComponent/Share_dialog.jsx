import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import "../../style/Dialog_Form.css";
import Share from "./Share";
import Tag from "./Tag";

const Share_dialog = (props) => {
  const onClose = () => {
    props.onClose();
  };
  const [tag, setTag] = React.useState([]);

  return (
    <Dialog
      open={props.open}
      onClose={props.onClose}
      id="dialog-form"
      PaperProps={{
        sx: {
          width: 500,
          height: 425,
          borderRadius: 5,
        },
      }}
    >
      <DialogTitle style={{ textAlign: "center" }}>Share</DialogTitle>
      <hr style={{ margin: 0 }} />
      <div id="share-to">
        <div>
          <DialogContentText
            style={{ fontWeight: "bold", marginTop: "10px", marginLeft: 10 }}
          >
            To :
          </DialogContentText>
        </div>
        <div>
          {tag.map((tag_) => {
            return <Tag setTag={setTag} tag={tag} />;
          })}
        </div>
      </div>
      <hr />
      <DialogContentText style={{ fontWeight: "bold", marginLeft: 10 }}>
        Suggested
      </DialogContentText>
      <DialogContent>
        {[1, 2, 3, 4, 5, 6, 7, 8].map(() => {
          return <Share setTag={setTag} tag={tag} />;
        })}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={onClose}>Share</Button>
      </DialogActions>
    </Dialog>
  );
};

export default Share_dialog;
