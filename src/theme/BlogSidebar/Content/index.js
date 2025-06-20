import React, {memo, useState} from 'react';
import Heading from '@theme/Heading';
import {BlogSidebarItemList} from '@docusaurus/plugin-content-blog/client';
import categories from '@site/src/data/projectSidebar';
import styles from './styles.module.css';

function BlogSidebarContent() {
  const [open, setOpen] = useState(() =>
    Object.fromEntries(Object.keys(categories).map((k) => [k, true])),
  );

  const toggle = (project) =>
    setOpen((o) => ({...o, [project]: !o[project]}));

  return (
    <>
      {Object.entries(categories).map(([project, items]) => (
        <div role="group" key={project}>
          <Heading as="h3">
            <button
              type="button"
              onClick={() => toggle(project)}
              className={styles.toggleButton}
            >
              {open[project] ? '▼' : '▶'} {project}
            </button>
          </Heading>
          {open[project] && (
            <BlogSidebarItemList items={items} ulClassName="clean-list" />
          )}
        </div>
      ))}
    </>
  );
}
export default memo(BlogSidebarContent);
