-- NOKHBA private AI administration database
-- Apply to a NEW Cloudflare D1 database. Do not use this against an existing DB without review.
PRAGMA foreign_keys = ON;

CREATE TABLE IF NOT EXISTS products (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  store TEXT NOT NULL CHECK (store IN ('amazon','noon','jumia','other')),
  product_url TEXT NOT NULL,
  image_url TEXT,
  category TEXT,
  price_egp REAL,
  currency TEXT NOT NULL DEFAULT 'EGP',
  rating REAL,
  review_count INTEGER,
  seller TEXT,
  source_checked_at TEXT,
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending','approved','rejected','needs_review')),
  ai_summary TEXT,
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_products_status ON products(status);
CREATE INDEX IF NOT EXISTS idx_products_store ON products(store);
CREATE INDEX IF NOT EXISTS idx_products_checked ON products(source_checked_at);

CREATE TABLE IF NOT EXISTS ai_tasks (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  task_type TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'queued' CHECK (status IN ('queued','running','completed','failed','cancelled')),
  input_json TEXT,
  output_json TEXT,
  error_message TEXT,
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  completed_at TEXT
);

CREATE INDEX IF NOT EXISTS idx_ai_tasks_status ON ai_tasks(status);

CREATE TABLE IF NOT EXISTS audit_logs (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  actor TEXT NOT NULL DEFAULT 'admin',
  action TEXT NOT NULL,
  target_type TEXT,
  target_id TEXT,
  details_json TEXT,
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);