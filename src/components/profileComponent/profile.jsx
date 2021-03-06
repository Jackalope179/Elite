import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import "../../style/profile.css";
import Navbar from "../commonComponent/Navbar";
import RecipeReviewCard from "../postComponent/post";
import PostData from "../../data/PostData";

const Profile = () => {
    const [infor, setInfor] = useState({
        name: "Anh Nguyễn",
    });

    const [activities, setActivities] = useState([
        { name: "A", monney: 10000 },
        { name: "B", monney: 1020 },
        { name: "C", monney: 1500 },
        { name: "D", monney: 10210 },
        { name: "E", monney: 15120 },
    ]);

    const [total, setTotal] = useState(0);

    useEffect(() => {
        setTotal(activities.reduce((x, y) => x + y.monney, 0));
    }, []);

    return (
        <>
            <Navbar />
            <div className="profile">
                <div className="profile-left">
                    <div className="profile-left-1">
                        <div className="profile-left-1-1">
                            <Avatar
                                sx={{
                                    width: 150,
                                    height: 150,
                                    bgcolor: "orange",
                                    fontSize: 50,
                                }}
                            >
                                A
                            </Avatar>
                        </div>
                        <div className="profile-left-1-2">
                            <Typography variant="h3">{infor.name}</Typography>
                            <Typography variant="h5">
                                {activities.length} activities
                            </Typography>
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
                        <div className="profile-activity">
                            <Typography variant="h4">Total</Typography>
                            <Typography variant="h5">{total}đ</Typography>
                        </div>
                    </div>
                </div>
                <div className="profile-right" id="scrollbar">
                    {PostData.map((data) => {
                        return (
                            <RecipeReviewCard
                                data={data}
                                hasButton={false}
                                key={data.id}
                            />
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default Profile;
