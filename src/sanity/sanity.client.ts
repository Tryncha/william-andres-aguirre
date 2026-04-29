import { ClientConfig, createClient } from 'next-sanity';

const config: ClientConfig = {
  projectId: 'loz2j6t6',
  dataset: 'production',
  apiVersion: '2026-04-28',
  useCdn: false
};

const client = createClient(config);
export default client;
