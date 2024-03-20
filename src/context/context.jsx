import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const blogContext = createContext(null);

export function BlogConextProvider(prop) {
    const [blogs, setBlogs] = useState(null);

    useEffect(() => {
        async function getData() {
            const data = await axios.get(
                "http://localhost:1010/api/blog/getAllBlogs"
            );
            setBlogs(data.data);
            console.log("data: ", data.data);
        }
        getData();
    }, []);

    const value = { blogs, setBlogs };
    return (
        <blogContext.Provider value={value}>
            {prop.children}
        </blogContext.Provider>
    );
}
