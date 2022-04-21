import { addons } from '@storybook/addons';
import { LIVE_EXAMPLES_ADDON_ID } from 'storybook-addon-live-examples';
import theme from 'prism-react-renderer/themes/github';
// import { themes } from '@storybook/theming'
import '../../creasy-styles/src/index.scss';
import * as AllComponents from '../src';

addons.setConfig({
  [LIVE_EXAMPLES_ADDON_ID]: {
    editorTheme: theme,
    copyText: ['Copy', 'Copied'],
    expandText: ['Show code', 'Hide code'],
    shareText: ['Share', 'Shared'],
    scope: {
      ...AllComponents,
    },
  },
});

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  options: {
    storySort: {
      order: [
        'Getting Started', ['Installation'],
        'Components', [
          'Form', ['Button', 'Button Row', 'Input', 'Rich Editor', 'Date Picker', 'Checkbox', 'Toggle', 'Select', 'Auto Complete' ],
          'Messaging', [],
          'Graphic']
      ],
    },
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  isToolshown: false,
  // docs: {
  //   theme: themes.dark,
  // },
}
