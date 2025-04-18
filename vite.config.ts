import { sveltekit } from '@sveltejs/kit/vite'
import { defineConfig } from 'vite'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'

export default defineConfig({
  plugins: [vanillaExtractPlugin(), sveltekit()],
  build: {
    //cssCodeSplit: false, // CSSを1ファイルにまとめる設定
  },
})
