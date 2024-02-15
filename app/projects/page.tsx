import fs from 'fs';
import ReactMarkdown from 'react-markdown';
import matter from 'gray-matter';

const ProjectsPage = () => {
  const file = 'app/projects/projects.md';
  const content = fs.readFileSync(file, 'utf8');
  const projects = matter(content);

  return (
    <div>
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
        >{projects.content}</ReactMarkdown>
      </article>
    </div>
  );
};

export default ProjectsPage;