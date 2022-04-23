import React from "react";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import "../../style/profile.css";
import Navbar from "../commonComponent/Navbar";

const Profile = () => {
    return (
        <>
            <Navbar />
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
                        <div className="profile-activities">
                            <div className="profile-activity">
                                <Typography variant="h4">A</Typography>
                                <Typography variant="h5">100000đ</Typography>
                            </div>
                            <div className="profile-activity"></div>
                            <div className="profile-activity"></div>
                            <div className="profile-activity"></div>
                            <div className="profile-activity"></div>
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

export default Profile;
