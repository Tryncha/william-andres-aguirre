import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './src/schemaTypes';

export default defineConfig({
  name: 'willian-andres-aguirre',
  title: 'willian-andres-aguirre',
  projectId: 'loz2j6t6',
  dataset: 'production',
  basePath: '/studio',
  plugins: [structureTool(), visionTool()],
  schema: { types: schemaTypes }
});
