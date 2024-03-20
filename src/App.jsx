import { useContext, useState } from "react";
import "./App.css";
import BlogDisplayCard from "./components/blogDisplayCard";
import { blogContext } from "./context/context";
import AddBlog from "./components/AddBlog";
// import { blogs } from "./data";

function App() {
    const { blogs } = useContext(blogContext);
    const [toAdd, setAdd] = useState(false);
    const renderCards = () => {
        return (
            <>
                {blogs?.map((b) => {
                    return (
                        <BlogDisplayCard
                            key={b._id}
                            title={b.title}
                            date={b.time}
                            user={b.creator}
                            tags={b.tags}
                            img={b.displayImage}
                        />
                    );
                })}

                <button className="add-btn" onClick={() => setAdd((p) => !p)}>
                    <i className="fa-solid fa-plus"></i>
                </button>

                {toAdd && <AddBlog />}
            </>
        );
    };

    return (
        <div className="App">
            <h1>Crappy Blog</h1>

            <div className="blogs-container">{renderCards()}</div>
        </div>
    );
}

export default App;
