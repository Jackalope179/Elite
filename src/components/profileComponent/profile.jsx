import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import "../../style/profile.css";
import Navbar from "../commonComponent/Navbar";
import PostContent from "../commonComponent/postcontent/postContent";

const Profile = () => {
    const [infor, setInfor] = useState({
        imgPath:
            "https://kenh14cdn.com/2019/9/12/photo-4-15682544730301888465967.jpg",
        name: "Hoang Nguyen",
    });

    const [activities, setActivities] = useState([
        {
            name: "A",
            desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo consequuntur vitae nam unde sed dicta maiores non deleniti repudiandae reiciendis officia tenetur odio voluptate, quibusdam perspiciatis suscipit fuga temporibus eius?",
            monney: 10000,
        },
        { name: "B", monney: 1020 },
        { name: "C", monney: 1500 },
    ]);

    return (
        <>
            <Navbar />
            <div className="profile">
                <div className="profile-left">
                    <div className="profile-left-1">
                        <div className="profile-left-1-1">
                            <Avatar
                                sx={{ width: 150, height: 150 }}
                                src={infor.imgPath}
                            />
                        </div>
                        <div className="profile-left-1-2">
                            <Typography variant="h3">{infor.name}</Typography>
                            <Typography variant="h5">5 activities</Typography>
                        </div>
                    </div>
                    <div className="profile-left-2">
                        <div className="profile-left-2-head">
                            <Typography variant="h3">Activities</Typography>
                        </div>
                        <div className="profile-activities">
                            {activities.map((activity, index) => (
                                <div className="profile-activity" key={index}>
                                    <Typography variant="h4">
                                        {activity.name}
                                    </Typography>
                                    <Typography variant="h5">
                                        {activity.monney}đ
                                    </Typography>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="profile-right">
                    <PostContent width="90%" />
                    <PostContent width="90%" />
                    <PostContent width="90%" />
                    <PostContent width="90%" />
                </div>
            </div>
        </>
    );
};

export default Profile;
