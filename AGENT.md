# Agent Guide

## Repos
- Frontend: `/Users/tianchenzhong/Dropbox/TCCode/webserver/personal_dashboard`
- Backend: `/Users/tianchenzhong/Dropbox/TCCode/webserver/personal_dashboard_backend_synced`

## Frontend structure (React)
- `src/App.js`: main router + layout + sidebar menu.
- `src/components/`: UI pages and shared components.
  - `Weekly2026Page.js`: weekly plan view (custom layout).
  - `Weekly2026EditPage.js`: weekly plan editor (custom layout).
  - `JsonEditPage.js`: generic JSON editor for other lists.
  - `ShowPage.js`: list browser + detail view for saved files.
  - `LatestWeekly.js`: routes `/weekly` to the custom weekly page.
  - `SignInPage.js`: sign-in UI.
  - `ProtectedRoute.js`: auth gate for routes.
  - `const.js`: `dest_url` API base.
- `public/`: static assets.
- `package.json`: scripts (`dev-local`, `start`, `build`).
- `.env.local`: local API origin (used by `npm run dev-local`).

## Backend structure (Flask)
- `main.py`: app entrypoint.
- `config.py`: base paths + API configuration.
- `routes/`: API endpoints.
  - `routes/file_routes.py`: JSON read/write endpoints.
  - `routes/date_routes.py`: date helpers for weekly/monthly/daily.
  - `routes/auth_routes.py`: sign-in auth.
  - `routes/memo_routes.py`: memo endpoints.
- `utils/`: helpers.
  - `utils/file_utils.py`: read/write JSON files.
  - `utils/time_utils.py`: date/week formatting helpers.
- `data/`: storage.
  - `data/json/weekly_2026.json`: weekly template schema.
  - `data/weekly_2026/`: saved weekly files (one JSON per week).
  - `data/weekly/`: legacy weekly data (older template).

## How to run locally
如果220port backend有进程 kill掉。
如果3000port backend有进程 kill掉。
- Backend:
  - `cd /Users/tianchenzhong/Documents/nas_document/webserver/personal_dashboard_backend_synced`
  - `uv run main.py &` 在后台，因为是server 会hang
- Frontend:
  - `cd /Users/tianchenzhong/Documents/nas_document/webserver/personal_dashboard`
  - `npm run dev-local &` 在后台，因为是server 会hang

## Smoke test
1. Start backend + frontend using the commands above.
2. Open `http://localhost:3000`.
3. Sign in.
4. Go to Weekly Plan edit: `#/weekly_2026_edit`.
5. Save a week and confirm file exists in `data/weekly_2026/`.
6. View: `#/weekly_2026_view` and confirm the saved content renders.
