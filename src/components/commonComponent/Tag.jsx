import React from "react";
import "../../style/Dialog_Form.css";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";
export default function Tag(props) {
  const [exist, setExist] = React.useState(true);
  const closeHandler = () => {
    setExist(false);
  };
  return exist ? (
    <div className="tag-name">
      <p style={{ margin: 0 }}>
        anh.nguyen{" "}
        <IconButton sx={{ padding: 0 }} onClick={closeHandler}>
          <CloseIcon />
        </IconButton>
      </p>
    </div>
  ) : null;
}
