import type { Preview } from '@storybook/sveltekit'
import { initialize, mswLoader } from 'msw-storybook-addon'

// Initialize MSW
initialize({
  onUnhandledRequest: 'bypass',
})

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },
  loaders: [mswLoader],
};

export default preview;