import React, {memo} from 'react';
import {BlogSidebarItemList} from '@docusaurus/plugin-content-blog/client';
import categories from '@site/src/data/projectSidebar';
import styles from '../Desktop/styles.module.css';
function BlogSidebarContent() {
  return (
    <>
      {Object.entries(categories).map(([project, items]) => (
        <details className={styles.projectGroup} key={project} open>
          <summary>{project}</summary>
          <BlogSidebarItemList items={items} ulClassName="clean-list" />
        </details>
      ))}
    </>
  );
}
export default memo(BlogSidebarContent);
