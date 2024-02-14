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
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

const PostPage = (props: any) => {
  const slug = props.params.slug;
  const post = getPostContent(slug);
  return (
    <div className="text-white">
      <h1 className="text-3xl">{post.data.title}</h1>
      <p className="text-slate-300 my-3">{post.data.date}</p>
      <article className="prose lg:prose-xl">
      <ReactMarkdown
          components={{
            // Style links
            a: ({ node, ...props }) => (
              <a className="text-white hover:underline" {...props} />
            ),
            // Style headings
            h4: ({ node, ...props }) => (
              <h4 className="text-2xl text-white" {...props} />
            ),
            h2: ({ node, ...props }) => (
              <h2 className="text-xl text-white" {...props} />
            ),
            h3: ({ node, ...props }) => (
              <h3 className="text-lg text-white" {...props} />
            ),
            p: ({ node, ...props }) => (
              <p className="text-lg text-white" {...props} />
            ),
            code: ({ node, ...props }) => (
              <code className="text-lg text-white" {...props} />
            ),
            li: ({ node, ...props }) => (
              <li className="text-lg text-white" {...props} />
            ),
            // Add more heading levels if needed
          }}
        >
          {post.content}
        </ReactMarkdown>
      </article>
    </div>
  );
};

export default PostPage;