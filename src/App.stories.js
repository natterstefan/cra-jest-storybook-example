/**
 * Example Story from the YouTube Live Stream
 * @see https://www.youtube.com/watch?v=Nb13Ff7v30k
 *
 * References
 * @see https://www.chromatic.com/pricing
 * @see https://storybook.js.org/addons
 * @see https://www.npmjs.com/package/@storybook/addon-a11y
 * @see http://localhost:6006/?path=/story/create-react-app-demo-app--dark-mode-app
 */
import React from 'react'

import App from './App'

export default {
  title: 'Create React App/App',
  component: App,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

export const darkModeApp = args => <App {...args} />

darkModeApp.args = {
  backgroundColor: 'transparent',
}

darkModeApp.parameters = {
  backgrounds: {
    default: 'dark',
  },
}

export const lightModeApp = args => <App {...args} />

lightModeApp.args = {
  backgroundColor: 'transparent',
}

lightModeApp.parameters = {
  backgrounds: {
    default: 'light',
  },
}
