import React from 'react';
import { Select, Tag } from 'antd';
import type { CustomTagProps } from 'rc-select/lib/BaseSelect';

type IProps = {
  options: any[];
  defaultValue?: string[];
}
const TagSelector: React.FC<IProps> = (props) => {

  const tagRender = (props: CustomTagProps) => {
    const { label, closable, onClose } = props;
    const onPreventMouseDown = (event: React.MouseEvent<HTMLSpanElement>) => {
      event.preventDefault();
      event.stopPropagation();
    };
    return (
      <Tag
        color={"cyan"}
        onMouseDown={onPreventMouseDown}
        closable={closable}
        onClose={onClose}
        style={{ marginRight: 3 }}
      >
        {label}
      </Tag>
    );
  };

  return (<div>
    <Select
      mode="multiple"
      showArrow
      tagRender={tagRender}
      style={{ width: '100%' }}
      {...props}
    /></div>)
}

export default TagSelector;