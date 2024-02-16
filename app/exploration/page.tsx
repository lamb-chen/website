import fs from 'fs';
import ReactMarkdown from 'react-markdown';
import matter from 'gray-matter';

const ExplorationPage = () => {
  const file = 'app/exploration/exploration.md';
  const content = fs.readFileSync(file, 'utf8');
  const exploration = matter(content);

  return (
    <div className='text-customText'>
      <article className='prose'>
      <ReactMarkdown
          components={{
            a: ({ node, ...props }) => (
                <a className="text-customText hover:text-" {...props} />
              ),
              h3: ({ node, ...props }) => (
                <h3 className="text-customText" {...props} />
              ),
              p: ({ node, ...props }) => (
                <p className="text-customText" {...props} />
              ),
              h4: ({ node, ...props }) => (
                <h4 className="text-customText" {...props} />
              ),
              li: ({ node, ...props }) => (
                <li className="text-customText" {...props} />
              ),
              strong: ({ node, ...props }) => (
                  <strong className="text-bold text-customText" {...props} />
                ),
          }}
        >{exploration.content}</ReactMarkdown>
      </article>
    </div>
  );
};

export default ExplorationPage;