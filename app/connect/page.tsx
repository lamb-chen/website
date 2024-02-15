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
            // Style links
            a: ({ node, ...props }) => (
              <a className="text-sm text-customText no-underline hover:underline" {...props} />
            ),
            h3: ({ node, ...props }) => (
              <h3 className="text-customText no-underline hover:underline" {...props} />
            ),
            // Add more heading levels if needed
          }}
        >{connect.content}</ReactMarkdown>
      </article>
    </div>
  );
};

export default ConnectPage;