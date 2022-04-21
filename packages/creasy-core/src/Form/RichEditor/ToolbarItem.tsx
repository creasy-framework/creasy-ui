import * as React from 'react';
import { EditorState } from 'draft-js';

interface Props {
  active: boolean;
  toggle: () => void | null;
  item: ToolbarActionItem;
}

export interface ToolbarActionItem {
  type: string;
  label: string;
  style: string;
  icon: React.ComponentType;
  action: (editorState: EditorState, onChange: (editorState: EditorState) => void) => void;
  entity?: string;
}

export default class ToolbarItem extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  toggleAction = () => {
    const { toggle } = this.props;
    if (toggle) {
      toggle();
    }
  }

  render() {
    const Icon: any = this.props.item.icon;

    if (this.props.item.type === 'separator') {
      return <li className="creasy-toolbar__item creasy-toolbar__item--separator" />;
    }

    return (
      <li className={`creasy-toolbar__item ${this.props.active && 'creasy-toolbar__item--active'}`}>
        <button
          onClick={this.toggleAction}
          type="button"
          className="creasy-toolbar__button"
        >
          <Icon />
        </button>
      </li>
    );
  }
}
