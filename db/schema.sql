-- Run this in your Vercel Postgres (Neon) query editor to set up (or update)
-- the careers portal's tables. Vercel dashboard -> your project -> Storage ->
-- your Postgres database -> "Query" tab -> paste this whole file -> Run.
-- Safe to re-run: CREATE/ADD COLUMN all use IF NOT EXISTS.

CREATE TABLE IF NOT EXISTS positions (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  department TEXT,
  location TEXT,
  employment_type TEXT,
  description TEXT,
  responsibilities TEXT,
  requirements TEXT,
  status TEXT NOT NULL DEFAULT 'open' CHECK (status IN ('open', 'closed')),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Adds the columns above if you already ran an earlier version of this file.
ALTER TABLE positions ADD COLUMN IF NOT EXISTS responsibilities TEXT;
ALTER TABLE positions ADD COLUMN IF NOT EXISTS requirements TEXT;

CREATE TABLE IF NOT EXISTS applications (
  id SERIAL PRIMARY KEY,
  position_id INTEGER REFERENCES positions(id) ON DELETE SET NULL,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  message TEXT,
  status TEXT NOT NULL DEFAULT 'new' CHECK (status IN ('new', 'reviewed', 'rejected', 'hired')),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS applications_position_id_idx ON applications(position_id);
