import PostPreview from "./components/PostPreview";
import getPostMetadata from "./components/getPostMetadata";

const HomePage = () => {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => (
    // ...post gets all the post.title, post.date etc.
    <PostPreview key={post.slug} {...post} />
  ));
  return <div>
    <h2 className="text-xl pb-2 underline decoration-double decoration-customLine font-bold text-customText"> Entries </h2>
    {postPreviews}
    </div>
};

export default HomePage