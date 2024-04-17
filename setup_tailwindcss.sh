# By astro automatically
npx astro add tailwind

# Manually
# refer: https://docs.astro.build/en/guides/integrations-guide/tailwind/
npm install @astrojs/tailwind tailwindcss
#npx tailwindcss init --full
npx tailwindcss init

# Edit: astro.config.mjs
> import { defineConfig } from 'astro/config';
> import tailwind from '@astrojs/tailwind';    // add this line
> 
> export default defineConfig({
>   // ...
>   integrations: [tailwind()],   // make sure has tailwind()
> })

# Edit: tailwind.config.mjs
> /** @type {import('tailwindcss').Config} */
> export default {
>   content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],   // add this line
>   theme: {
>     extend: {},
>   },
>   plugins: [],
> };
