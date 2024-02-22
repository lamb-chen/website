import fs from "fs";
import ReactMarkdown from "react-markdown";
import matter from "gray-matter";
import getPostMetadata from "@/app/components/getPostMetadata";


const getPostContent = (slug: string) => {
  const folder = "posts/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
};

export const generateStaticParams = async () => {
  const posts = getPostMetadata();
  posts.sort((a, b) => (new Date(b.date) as any) - (new Date(a.date) as any));
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

const PostPage = (props: any) => {
  const slug = props.params.slug;
  const post = getPostContent(slug);
  return (
    <div className="text-customText">
      <article className="prose flex-grow w-full text-customText">
        <h1 className="text-2xl text-customText">{post.data.title}</h1>
        <p>{post.data.subtitle}</p>
        <p className="my-3">{post.data.date}</p>
        <ReactMarkdown
            components={{
              a: ({ node, ...props }) => (
                <a className="text-customText hover:underline" {...props} />
              ),
              h4: ({ node, ...props }) => (
                <h4 className="text-customText" {...props} />
              ),
              h2: ({ node, ...props }) => (
                <h2 className="text-customText" {...props} />
              ),
              h3: ({ node, ...props }) => (
                <h3 className="text-customText" {...props} />
              ),
              p: ({ node, ...props }) => (
                <p className="text-customText" {...props} />
              ),
              code: ({ node, ...props }) => (
                <code className="text-customText" {...props} />
              ),
              li: ({ node, ...props }) => (
                <li className="text-customText" {...props} />
              ),
              em: ({ node, ...props }) => (
                <em className="text-customText" {...props} />
              ),
            }}
          >
            {post.content}
          </ReactMarkdown>
      </article>
    </div>
  );
};

export default PostPage;