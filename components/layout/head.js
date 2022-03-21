import NextHead from 'next/head'

//added fontawesome css manually to fix bug in next.js
import { config, dom } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

function Head ({ title, description }) {
    return (
    <NextHead>
      <meta charSet="UTF-8" />
      <title>{title || ''}</title>
      <meta name="description" content={description || ''} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      <style>{dom.css()}</style>
    </NextHead>
    )
}

export default Head