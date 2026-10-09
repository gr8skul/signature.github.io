# Signature Dispatch V2
Development-only role-aware application. Existing V1 portals are unchanged.

Upload this directory to the repository root as `v2/`. Test `https://signature.github.io/v2/app.html` while signed in through the existing login page.

Files: `app.html`, `css/shared.css`, `js/config.js`, `js/auth.js`, `js/views.js`, `js/app.js`.

This initial foundation performs only authentication and a read of the `users` profile. It makes no database writes or schema changes. Note: production login redirect destinations are not changed yet; open `/v2/app.html` directly after logging in to test.
