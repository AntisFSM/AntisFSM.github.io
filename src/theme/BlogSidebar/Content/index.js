import React, {memo} from 'react';
import Heading from '@theme/Heading';
import {BlogSidebarItemList} from '@docusaurus/plugin-content-blog/client';
import categories from '@site/src/data/projectSidebar';
function BlogSidebarContent() {
  return (
    <>
      {Object.entries(categories).map(([project, items]) => (
        <div role="group" key={project}>
          <Heading as="h3">{project}</Heading>
          <BlogSidebarItemList items={items} ulClassName="clean-list" />
        </div>
      ))}
    </>
  );
}
export default memo(BlogSidebarContent);
