# Ol' Smokey's - Caboose (MERN)

Full MERN conversion of the Stitch design files in this repo.

## Structure
- `client/` — React + Vite + Tailwind frontend (Home, Menu, About, Contact — pixel-matched to the design files)
- `server/` — Express + MongoDB (Mongoose) API serving menu items and accepting contact messages

## Run locally

### Backend
```
cd server
npm install
copy .env.example .env
npm run seed   # populates MongoDB with menu items
npm run dev
```

### Frontend
```
cd client
npm install
npm run dev
```

The Vite dev server proxies `/api` to `http://localhost:5000`, so the Menu page loads live data from MongoDB (falls back to built-in data if the API is unreachable).
