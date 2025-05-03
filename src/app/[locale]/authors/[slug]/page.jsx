import AuthorClientPage from "./AuthorClientPage";

export const dynamic = 'force-dynamic'

async function getAuthorBySlug(slug) {
    const response = await fetch(`${process.env.API_URL}/authors/${slug}`, {
        method: 'GET',
        headers: {
            'X-VENDOR-KEY': process.env.VENDOR_KEY,
            'Content-Type': 'application/json',
        },
        next: {
            revalidate: 5
        }
    });

    return response.json();
}

const Author = async(props) => {
    const params = await props.params;

    const {data: author} = await getAuthorBySlug(params?.slug);

    return (
        <AuthorClientPage author={author} />
    );
};

export default Author;
