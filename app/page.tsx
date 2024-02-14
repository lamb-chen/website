import PostPreview from "./components/PostPreview";
import getPostMetadata from "./components/getPostMetadata";

const HomePage = () => {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => (
    // ...post gets all the post.title, post.date etc.
    <PostPreview key={post.slug} {...post} />
  ));
  return <div className="grid-cols-1 md:grid-cols-2 gap-4">{postPreviews}</div>
};

export default HomePage