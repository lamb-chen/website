import PostPreview from "./components/PostPreview";
import getPostMetadata from "./components/getPostMetadata";

const HomePage = () => {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => (
    // ...post gets all the post.title, post.date etc.
    <PostPreview key={post.slug} {...post} />
  ));
  return <div>{postPreviews}</div>
};

export default HomePage