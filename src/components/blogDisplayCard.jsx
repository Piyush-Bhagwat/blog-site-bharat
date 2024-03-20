import React from "react";

const BlogDisplayCard = ({ img, tags, date, title, user="piyush" }) => {
    console.log(img);

    const renderTags = () => {
        return (
            <>
                {tags?.map((t) => {
                    return <div className="tags">{t}</div>;
                })}
            </>
        );
    };

    const getTime = () => {
        const t = new Date(date);
        const day = t.getDate();
        const month = t.getMonth();
        const y = t.getFullYear();

        return `${day}-${month + 1}-${y}`;
    };

    return (
        <div className="blog-dsiplay-card">
            <img src={img} alt="#" className="display-img" />

            <div className="info">
                <div className="date-tags">
                    <div className="tag-container">{renderTags()}</div>
                    <div className="date">{getTime()}</div>
                </div>

                <div className="title">{title}</div>

                <div className="user-display">
                    <h4 className="user-name">~{user}</h4>
                </div>
            </div>
        </div>
    );
};

export default BlogDisplayCard;
