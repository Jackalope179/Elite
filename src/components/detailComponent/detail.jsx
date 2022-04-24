import React from "react";
import PostContent from "../commonComponent/postcontent/postContent";
import RecipeReviewCard from "../postComponent/post";
import Donate from "./donate";
import Container from "@mui/material/Container";
import Navbar from "../commonComponent/Navbar";

const Detail = () => {
    return (
        <>
            <Navbar />
            <Container
                style={{
                    overflowY: "auto",
                    height: "calc(100vh - 60px)",
                    top: 60,
                    position: "relative",
                    paddingBottom: 50,
                }}
            >
                <RecipeReviewCard
                    data={{
                        id: 1,
                        name: "Hoang inc",
                        time: new Date().toISOString().slice(0, 10),
                        avatar: "H",
                        imgs: [
                            "http://www.chuahoangphap.com.vn/Images/Charity/hoangphap_ke-hoach-tu-thien-va-phong-sanh-t12019_full_05182019_081828.jpg", "http://www.chuahoangphap.com.vn/Images/News/hp_26313.jpg"
                        ],
                        content: "Sáng ngày 17/12/2012 (nhằm ngày 5/11 Nhâm Thìn) được sự chỉ dạy của Thượng tọa Trụ trì, đoàn từ thiện chùa Hoằng Pháp do thầy Thích Tâm Huệ làm trưởng đoàn đã đến xã Vĩnh Ngọc, TP. Nha Trang, tỉnh Khánh Hòa để tặng quà cho những hộ dân nghèo tại đây.",
                        liked: false,
                        target: 10000000,
                        donatersCount: 10,
                    }}
                    hasButton={false}
                />
                <Donate />
            </Container>
        </>
    );
};

export default Detail;
