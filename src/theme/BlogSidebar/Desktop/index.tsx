import React, {memo, type ReactNode} from 'react';
import clsx from 'clsx';
import {translate} from '@docusaurus/Translate';
import BlogSidebarContent from '@theme/BlogSidebar/Content';
import type {Props} from '@theme/BlogSidebar/Desktop';

import styles from './styles.module.css';

export default memo(function DesktopWrapper({sidebar}: Props): ReactNode {
  return (
    <aside className="col col--3">
      <nav
        className={clsx(styles.sidebar, 'thin-scrollbar')}
        aria-label={translate({
          id: 'theme.blog.sidebar.navAriaLabel',
          message: 'Blog sidebar navigation',
        })}
      >
        <BlogSidebarContent />
      </nav>
    </aside>
  );
});
