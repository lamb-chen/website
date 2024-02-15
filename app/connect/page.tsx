import fs from 'fs';
import ReactMarkdown from 'react-markdown';
import matter from 'gray-matter';

const ConnectPage = () => {
  const file = 'app/connect/connect.md';
  const content = fs.readFileSync(file, 'utf8');
  const connect = matter(content);

  return (
    <div className='text-customText'>
      <article className='prose'>
      <ReactMarkdown
          components={{
            a: ({ node, ...props }) => (
              <a className="text-customText no-underline hover:underline" {...props} />
            ),
            h3: ({ node, ...props }) => (
              <h3 className="text-customText no-underline hover:underline" {...props} />
            ),
          }}
        >{connect.content}</ReactMarkdown>
      </article>
    </div>
  );
};

export default ConnectPage;