import React, { FunctionComponent, ReactElement, useState } from 'react';
import classNames from 'classnames';
import { Icons } from '../../Graphic';
import { Input, Checkbox, FieldGroup, CheckState } from '../../Form';
import Dropdown from '../Dropdown/Dropdown';

export type SelectableTreeComponent = FunctionComponent<Props>;

export interface SelectableTreeNode {
  value: string;
  label: string;
  children?: SelectableTreeNode[];
}

interface Props {
  label?: string;
  isRequired?: boolean;
  labelAccessory?: ReactElement;
  labelPlacement?: 'left' | 'top';
  size?: 'xs' | 's' | 'm' | 'l' | 'xl';
  treeNodes: SelectableTreeNode[];
  showSearch?: boolean;
  onCheck?: (checked: object) => void;
  checked?: object;
  menuAlignment?: 'left' | 'right';
}

const SelectableTree: SelectableTreeComponent = ({
  treeNodes,
  showSearch = false,
  checked = {},
  onCheck,
  label,
  size,
  isRequired,
  labelAccessory,
  labelPlacement = 'top',
  menuAlignment = 'right',
}) => {
  const [keyword, setKeyword] = useState<string>('');
  const [expandState, setExpandState] = useState<object>({});
  const handleOnCheck = (key: string, value: string) => {
    const newCheckState = {
      ...checked,
      [key]: value,
    };
    onCheck && onCheck(newCheckState);
  };

  const handleMenuAction = (treeNode: SelectableTreeNode, state: CheckState) => {
    const newCheckState = {};
    const { children = [] } = treeNode;
    const setSubTreeState = (subTreeNodes: SelectableTreeNode[]) => {
      subTreeNodes.forEach((subTreeNode) => {
        newCheckState[subTreeNode.value] = state;
        const { children = [] } = subTreeNode;
        if (children.length > 0) {
          setSubTreeState(children);
        }
      });
    };
    if (children.length > 0) {
      setSubTreeState(children);
    }
    onCheck && onCheck({ ...checked, ...newCheckState });
  };

  const onClickArrow = (key: string) => {
    const isExpanded = expandState[key];
    if (isExpanded) {
      setExpandState({
        ...expandState,
        [key]: false,
      });
    } else {
      setExpandState({
        ...expandState,
        [key]: true,
      });
    }
  };

  const getArrowByState = (key: string) => (
    expandState[key] ?
      <Icons.ArrowDown className="creasy-selectable-tree-icon creasy-selectable-tree--open"/>
      : <Icons.ArrowDown className="creasy-selectable-tree-icon creasy-selectable-tree--close"/>
  );

  const renderTree = (treeNode: SelectableTreeNode) => {
    const { children = [], value = '', label = '' } = treeNode;
    const subTrees = children
      .map(child => renderTree(child))
      .filter(child => !!child);
    if (showSearch
      && subTrees.length === 0
      && label.toLowerCase().indexOf(keyword.toLowerCase()) === -1) {
      return null;
    }
    return (
      <div key={value} className="creasy-selectable-tree__parent">
        <div className="creasy-selectable-tree__row">
          {
            <button
              className={
                classNames(
                  'creasy-selectable-tree__arrow',
                  subTrees.length > 0 && 'creasy-selectable-tree__arrow--show',
                )
              }
              onClick={() => onClickArrow(value)}>
              {getArrowByState(value)}
            </button>
          }
          <Checkbox
            value={checked[value]}
            onChange={state => handleOnCheck(value, state)}
            className="creasy-selectable-tree__checkbox"
            label={label}
          />
          {
            children.length > 0 && (
              <div className="creasy-selectable-tree__menu">
                <Dropdown align={menuAlignment} items={[
                  <Dropdown.Item
                    key="select-all"
                    onClick={() => handleMenuAction(treeNode, 'checked')}>
                    Select all
                  </Dropdown.Item>,
                  <Dropdown.Item
                    key="deselect-all"
                    onClick={() => handleMenuAction(treeNode, 'unchecked')}>
                    Deselect all
                  </Dropdown.Item>,
                ]}>
                  <Icons.Ellipsis
                    className="creasy-selectable-tree-icon creasy-selectable-tree__menu-icon"
                  />
                </Dropdown>
              </div>
            )
          }
        </div>
        {subTrees.length > 0 && (
          <div
            className={classNames(
              'creasy-selectable-tree__children',
              expandState[value] && 'creasy-selectable-tree__children--expanded',
            )}>
            {subTrees}
          </div>)
        }
      </div>
    );
  };

  return (
    <FieldGroup
      size={size}
      label={label}
      isRequired={isRequired}
      labelAccessory={labelAccessory}
      labelPlacement={labelPlacement}
    >
      <div className={classNames('creasy-selectable-tree')}>
        {
          showSearch && (
            <Input
              className="creasy-selectable-tree-search"
              type="underlined"
              left={<Icons.Search />}
              value={keyword}
              onChange={(e: any) => setKeyword(e.target.value)}
            />
          )
        }
        {
          treeNodes.map(treeNode => renderTree(treeNode))
        }
      </div>
    </FieldGroup>
  );
};

export default SelectableTree;
