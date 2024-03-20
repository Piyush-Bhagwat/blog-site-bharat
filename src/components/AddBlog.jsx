import axios from "axios";
import React, { useState } from "react";

function AddBlog() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [tags, setTags] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleContentChange = (event) => {
        setContent(event.target.value);
    };

    const handleTagsChange = (event) => {
        setTags(event.target.value);
    };

    const handleImageUrlChange = (event) => {
        setImageUrl(event.target.value);
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        // Convert comma-separated tags to an array
        const tagList = tags.split(",");

        // Implement logic to submit the form data (title, content, tagList, imageUrl)
        // This could involve sending the data to a backend API or storing it locally
        const newBlog = {
            title,
            content,
            tags: tagList,
            img: imageUrl,
            time: Date.now(),
            creator: "Piyush"
        };

        await axios.post("http://localhost:1010/api/blog/create", newBlog);

        // Clear the form after successful submission (optional)
        setTitle("");
        setContent("");
        setTags("");
        setImageUrl("");
    };

    return (
        <div className="add-blog-form">
            <h1>Add a New Blog Post</h1>
            <form onSubmit={handleFormSubmit}>
                <label htmlFor="title">Title:</label>
                <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={handleTitleChange}
                    required
                />
                <label htmlFor="content">Content:</label>
                <textarea
                    id="content"
                    value={content}
                    onChange={handleContentChange}
                    required
                />
                <label htmlFor="tags">Tags (comma-separated):</label>
                <input
                    type="text"
                    id="tags"
                    value={tags}
                    onChange={handleTagsChange}
                />
                <label htmlFor="imageUrl">Image URL:</label>
                <input
                    type="url"
                    id="imageUrl"
                    value={imageUrl}
                    onChange={handleImageUrlChange}
                    required
                />
                <button type="submit">Submit Post</button>
            </form>
        </div>
    );
}

export default AddBlog;
