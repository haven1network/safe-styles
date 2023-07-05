import * as React from 'react';
import createSvgIcon from '@mui/material/utils/createSvgIcon';
import Icon from './Icon';

export const CopyIcon = createSvgIcon(
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M9 7V4C9 2.89543 9.89543 2 11 2H19C20.1046 2 21 2.89543 21 4V15C21 16.1046 20.1046 17 19 17H15V20C15 21.1046 14.1046 22 13 22H5C3.89543 22 3 21.1046 3 20V9C3 7.89543 3.89543 7 5 7H9ZM15 15H19V4H11V7H13C14.1046 7 15 7.89543 15 9V15ZM5 20V9H13V20H5Z"
  />,
  'Copy'
);

export const LinkIcon = createSvgIcon(
  <>
    <path d="M19.2 19.2V12C19.2 11.5029 19.6029 11.1 20.1 11.1C20.5971 11.1 21 11.5029 21 12V19.2C21 20.1941 20.1941 21 19.2 21H4.8C3.80589 21 3 20.1941 3 19.2V4.8C3 3.80589 3.80589 3 4.8 3H12C12.4971 3 12.9 3.40294 12.9 3.9C12.9 4.39706 12.4971 4.8 12 4.8H4.8V19.2H19.2Z" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.8362 4.85332H15.44C14.9283 4.85332 14.5134 4.43844 14.5134 3.92666C14.5134 3.41488 14.9283 3 15.44 3H20.0733C20.3292 3 20.5609 3.10372 20.7286 3.27141C20.8963 3.4391 21 3.67077 21 3.92666V8.55995C21 9.07173 20.5851 9.48661 20.0733 9.48661C19.5616 9.48661 19.1467 9.07173 19.1467 8.55995V6.16381L10.5819 14.7286C10.22 15.0905 9.6333 15.0905 9.27141 14.7286C8.90953 14.3667 8.90953 13.78 9.27141 13.4181L17.8362 4.85332Z"
    />
  </>,
  'Link'
);

export { Icon };