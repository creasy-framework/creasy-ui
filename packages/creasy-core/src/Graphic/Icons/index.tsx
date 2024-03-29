import * as React from 'react';
import classNames from 'classnames';
import Add from './Add';
import Chart from './Chart';
import Document from './Document';
import Form from './Form';
import Menu from './Menu';
import ArrowLeft from './ArrowLeft';
import ArrowRight from './ArrowRight';
import ArrowUp from './ArrowUp';
import ArrowDown from './ArrowDown';
import QuestionMark from './QuestionMark';
import Info from './Info';
import Unlink from './Unlink';
import BlockQuote from './BlockQuote';
import Bold from './Bold';
import H2 from './H2';
import OL from './OL';
import Italic from './Italic';
import Close from './Close';
import Link from './Link';
import UL from './UL';
import DataSource from './DataSource';
import Template from './Template';
import Logo from './Logo';
import Search from './Search';
import Trash from './Trash';
import Save from './Save';
import Delete from './Delete';
import Cancel from './Cancel';
import Calendar from './Calendar';
import Duplicate from './Duplicate';
import Confirm from './Confirm';
import Error from './Error';
import PowerOff from './PowerOff';
import Edit from './Edit';
import Settings from './Settings';
import DragHandle from './DragHandle';
import Theme from './Theme';
import Layout from './Layout';
import Control from './Control';
import Text from './Text';
import TextInput from './TextInput';
import ComboBox from './ComboBox';
import Attachment from './Attachment';
import Page from './Page';
import Rate from './Rate';
import TextArea from './TextArea';
import List from './List';
import None from './None';
import Columns from './Columns';
import Rows from './Rows';
import PieChart from './PieChart';
import LineChart from './LineChart';
import Preview from './Preview';
import Button from './Button';
import Submit from './Submit';
import Dashboard from './Dashboard';
import Target from './Target';
import Timer from './Timer';
import WeChat from './WeChat';
import Facebook from './Facebook';
import Twitter from './Twitter';
import LinkedIn from './LinkedIn';
import WeBlog from './WeBlog';
import Share from './Share';
import Archive from './Archive';
import Commit from './Commit';
import QRCode from './QRCode';
import Pass from './Pass';
import Message from './Message';
import Organization from './Organization';
import FormWithDs from './FormWithDs';
import Table from './Table';
import Filter from './Filter';
import Unselected from './Unselected';
import Selected from './Selected';
import SelectedAll from './SelectedAll';
import Ellipsis from './Ellipsis';
import CSV from './CSV';
import Formula from './Formula';
import Mapping from './Mapping';
import Warning from './Warning';
import Pin from './Pin';
import Unpin from './Unpin';

const Icons = {
  Add,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  ArrowDown,
  Chart,
  Document,
  Form,
  Menu,
  QuestionMark,
  Info,
  Unlink,
  BlockQuote,
  H2,
  OL,
  Italic,
  Close,
  Bold,
  Link,
  UL,
  DataSource,
  Template,
  Logo,
  Search,
  Trash,
  Save,
  Duplicate,
  Delete,
  Cancel,
  Confirm,
  Error,
  PowerOff,
  Edit,
  Settings,
  DragHandle,
  Theme,
  Layout,
  Control,
  Text,
  TextInput,
  ComboBox,
  Attachment,
  Page,
  Rate,
  TextArea,
  List,
  None,
  Columns,
  Rows,
  PieChart,
  LineChart,
  Preview,
  Button,
  Submit,
  Dashboard,
  Target,
  Timer,
  Calendar,
  WeChat,
  LinkedIn,
  Facebook,
  Twitter,
  WeBlog,
  Share,
  Archive,
  Commit,
  QRCode,
  Pass,
  Message,
  Organization,
  FormWithDs,
  Table,
  Filter,
  Selected,
  SelectedAll,
  Unselected,
  Ellipsis,
  CSV,
  Formula,
  Mapping,
  Warning,
  Pin,
  Unpin,
};

interface IconProps {
  className?: string;
  size?: 's' | 'm' | 'l';
  color?: 'primary' | 'secondary' | 'danger' | 'white';
}

const withStyleWrapper = (Component: any) => (props: IconProps) => {
  const { className, size, color } = props;
  const styledClassName = classNames(
    className,
    size && `creasy-icon--${size}`,
    color && `creasy-icon--color-${color}`,
  );
  return <Component className={styledClassName}></Component>
}

const styledIcons: any = Object.entries(Icons).reduce((icons, icon) => {
  const [name, Component] = icon;
  return {
    [name]: withStyleWrapper(Component),
    ...icons
  }
}, {})

export default styledIcons;
