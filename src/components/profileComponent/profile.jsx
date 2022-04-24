import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import "../../style/profile.css";
import Navbar from "../commonComponent/Navbar";
import RecipeReviewCard from "../postComponent/post";
import PostData from "../../data/PostData";

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
    { name: "asd", monney: 10210 },
    { name: "ascc", monney: 15120 },
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
              <Avatar sx={{ width: 150, height: 150 }} src={infor.imgPath} />
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
                  <Typography variant="h4">{activity.name}</Typography>
                  <Typography variant="h5">{activity.monney}đ</Typography>
                </div>
              ))}
            </div>
            <div className="profile-activity">
              <Typography variant="h4">Total</Typography>
              <Typography variant="h5">{total}đ</Typography>
            </div>
          </div>
        </div>
        <div className="profile-right">
          {PostData.map((data) => {
            return (
              <RecipeReviewCard data={data} hasButton={false} key={data.id} />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Profile;
