import React, {useEffect, useState} from "react";
import {GetPostsByCategory} from "@/src/actions/BlogAction";

export default function SavingGuide() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const {data} = await GetPostsByCategory('saving-guide?per_page=4');
            setPosts(data);
        }
        fetchData();
    }, []);

    return (
        <>
            {posts && posts.map((post) => (
                <div className="col-md-6 col-lg-3" key={post?.id}>
                    <div className="feature-box">
                        <div className="feature-image">
                            <a href="#"><img
                                src={post?.media?.thumb ?? '/assets/images/placeholders/235x170.png'}
                                alt=""/></a>
                        </div>
                        <div className="feature-content bg-white">
                            <hr/>
                            <h3 className="feature-title"><a href="#">{post?.title}</a></h3>
                            <p className="feature-subtitle">
                                {post?.excerpt?.split(' ').slice(0, 10).join(' ')}{post?.excerpt?.split(' ').length > 10 ? '...' : ''}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}