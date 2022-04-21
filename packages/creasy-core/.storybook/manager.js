import { addons } from '@storybook/addons';
import creasy from './creasy';
// import { themes } from '@storybook/theming';

addons.setConfig({
  // theme: themes.dark,
  theme: creasy,
  sidebar: {
    // showRoots: false,
  },
  toolbar: {
    title: { hidden: true },
    zoom: { hidden: true },
    eject: { hidden: true },
    copy: { hidden: true },
    fullscreen: { hidden: true },
    'storybook/background': { hidden: true },
    'storybook/viewport': { hidden: true },
  },
});
