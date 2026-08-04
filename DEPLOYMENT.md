# Deployment

## Frontend

1. Copy `frontend/.env.example` to `frontend/.env.production`.
2. Set `REACT_APP_API_URL` to the deployed backend URL ending in `/api`.
3. Run `npm install` and `npm run build` from `frontend`.
4. Deploy the `frontend/build` directory as a static site.

The repository includes `frontend/public/_redirects` for Netlify and `frontend/vercel.json` for Vercel so React Router routes resolve to `index.html`.

## Backend

1. Copy `backend/.env.example` to `backend/.env` on the server.
2. Set `MONGODB_URI`, `PORT`, `NODE_ENV=production`, and the exact frontend origin in `FRONTEND_URL`.
3. Set Gmail email credentials for contact messages:
   - `EMAIL_USER=berihuaraya374@gmail.com`
   - `EMAIL_PASSWORD=<your-gmail-app-password-or-smtp-password>`
   - `EMAIL_TO=berihuaraya374@gmail.com`
4. Run `npm install` and `npm start` from `backend`.
5. Confirm `GET /api/health` returns a 200 response before testing the contact form.

Never commit `.env` files. Rotate database credentials if a real secret was previously committed to Git history.
