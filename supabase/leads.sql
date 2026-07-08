-- Run once in Supabase Dashboard → SQL Editor → New query

create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  email text not null,
  company text,
  intent text not null check (intent in ('individual', 'embedded_team', 'recruitment')),
  requirements text,
  message text
);

create index if not exists leads_created_at_idx on public.leads (created_at desc);

alter table public.leads enable row level security;

-- No public policies: inserts go through Next.js API using the service role key only.
