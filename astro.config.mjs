import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), preact()],
  site: "https://anggifitzone.netlify.app",
  vite: {
    define: {
      "import.meta.env.PUBLIC_EMAIL_SERVICE_ID": JSON.stringify(
        process.env.PUBLIC_EMAIL_SERVICE_ID,
      ),
      "import.meta.env.PUBLIC_TEMPLATE_ID": JSON.stringify(
        process.env.PUBLIC_TEMPLATE_ID,
      ),
      "import.meta.env.PUBLIC_EMAIL_ID": JSON.stringify(process.env.PUBLIC_KEY),
      "import.meta.env.PUBLIC_RECAPTCHA_SITE_KEY": JSON.stringify(
        process.env.PUBLIC_RECAPTCHA_SITE_KEY,
      ),
    },
  },
});
