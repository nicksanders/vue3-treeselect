import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { fileURLToPath } from 'url';
import vueJsx from '@vitejs/plugin-vue-jsx'
import path from 'path';

const filename = fileURLToPath(import.meta.url);
const pathSegments = path.dirname(filename);

export default defineConfig({
    plugins: [vue(), vueJsx({})],
    resolve: {
        alias: {
            '@': path.resolve(pathSegments, './src'),
        },
        extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json'],
    },
    build: {
        commonjsOptions: {
            requireReturnsDefault: "preferred",
            transformMixedEsModules: true,
        },
    },
})
