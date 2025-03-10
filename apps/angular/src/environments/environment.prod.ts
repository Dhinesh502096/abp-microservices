import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

export const environment = {
  production: true,
  application: {
    baseUrl,
    name: 'Tasky',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'https://localhost:44368/',
    redirectUri: baseUrl,
    clientId: 'Tasky_App',
    responseType: 'code',
    scope: 'offline_access Tasky',
    requireHttps: true
  },
  apis: {
    default: {
      url: 'https://localhost:44325',
      rootNamespace: 'Tasky',
    },
  },
} as Environment;
