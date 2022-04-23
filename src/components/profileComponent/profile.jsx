import React from "react";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import "../../style/profile.css";

const profile = () => {
    return (
        <>
            <div className="profile">
                <div className="profile-left">
                    <div className="profile-left-1">
                        <div className="profile-left-1-1">
                            <Avatar
                                sx={{ width: 150, height: 150 }}
                                src="https://kenh14cdn.com/2019/9/12/photo-4-15682544730301888465967.jpg"
                            />
                        </div>
                        <div className="profile-left-1-2">
                            <Typography variant="h3">Hoang Nguyen</Typography>
                            <Typography variant="h5">5 activities</Typography>
                        </div>
                    </div>
                    <div className="profile-left-2">
                        <div className="profile-left-2-head">
                            <Typography variant="h3">Activities</Typography>
                        </div>
                    </div>
                </div>
                <div className="profile-right">
                    <div className="profile-item"></div>
                    <div className="profile-item"></div>
                    <div className="profile-item"></div>
                    <div className="profile-item"></div>
                </div>
            </div>
        </>
    );
};

export default profile;
