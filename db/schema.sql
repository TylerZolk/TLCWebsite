-- Run this once in your Vercel Postgres (Neon) query editor to set up the
-- careers portal's tables. Vercel dashboard -> your project -> Storage ->
-- your Postgres database -> "Query" tab -> paste this whole file -> Run.

CREATE TABLE IF NOT EXISTS positions (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  department TEXT,
  location TEXT,
  employment_type TEXT,
  description TEXT,
  status TEXT NOT NULL DEFAULT 'open' CHECK (status IN ('open', 'closed')),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

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
