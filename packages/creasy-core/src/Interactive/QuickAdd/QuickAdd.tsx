import React, { Component, ComponentClass } from 'react';
import classNames from 'classnames';

import { Avater } from '../../Messaging';
import { Icons } from '../../Graphic';
import QuickAddItem, { QuickAddItemComponent } from './QuickAddItem';

interface Props {
  color?: 'primary' | 'secondary';
}

interface State {
  isExpanded: boolean;
}

interface QuickAddComponent extends ComponentClass<Props, State> {
  Item: QuickAddItemComponent;
}

const QuickAdd: QuickAddComponent = class extends Component<Props, State> {
  state = {
    isExpanded: false,
  };

  static Item = QuickAddItem;

  private toggleState = () => {
    const { isExpanded } = this.state;
    this.setState({
      isExpanded: !isExpanded,
    });
  }

  render() {
    const { isExpanded } = this.state;
    const { children, color } = this.props;
    return (
      <div className="creasy-quickadd">
        <div onClick={this.toggleState}>
          <Avater
            size="l"
            shadow
            className={classNames(
              'creasy-quickadd__trigger',
              {
                ['creasy-quickadd__trigger--expanded']: isExpanded,
                [`creasy-quickadd__trigger--color-${color}`]: color,
              },
            )}>
            <Icons.Add />
          </Avater>
        </div>
        <div className={classNames(
            'creasy-quickadd__items', {
              ['creasy-quickadd__items--expanded']: isExpanded,
            },
        )}>
          {children}
        </div>
      </div>
    );
  }
};

export default QuickAdd;
