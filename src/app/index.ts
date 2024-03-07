import { createApp } from 'vue';
import { router } from './providers/router';

import AppRoot from '~/router/AppRoot.vue';

const initApp = createApp(AppRoot).use(router);

export const app = initApp;