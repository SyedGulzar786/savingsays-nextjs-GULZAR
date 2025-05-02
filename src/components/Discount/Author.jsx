"use client"

const Author = ({store}) => {
    const {author, authorAverageSavingText: averageSavingText} = store;
    return (
        <div className="pmsl-row post-meta-and-socials-links">
            <div className="metas">
                <ul className="pmsl-list list-inline">
                    <li className="item author">
                        <div className="meta-item post-author has-img d-flex align-items-center">
                            <div className="avatar me-2">
                                <img
                                    width="32"
                                    height="32"
                                    src={author?.avatar}
                                    className="avatar avatar-32 photo rounded-circle"
                                    alt={author?.name}
                                    decoding="async"
                                />
                            </div>
                            <span className="by">Tip By</span>
                            <a
                                href={author?.url}
                                title={author?.name}
                                rel="author"
                                className="ms-1"
                            >
                                {author?.name}
                            </a>
                        </div>
                    </li>
                </ul>
                <div className="HoverHref" dangerouslySetInnerHTML={{ __html: averageSavingText}}></div>
            </div>
        </div>
    );
};

export default Author;
