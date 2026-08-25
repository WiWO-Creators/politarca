create table if not exists replicas (
  id text primary key,
  slug text not null,
  author text not null,
  body text not null,
  refined integer not null default 0,
  created_at timestamptz not null default now()
);

create index if not exists replicas_slug_created on replicas (slug, created_at desc);
