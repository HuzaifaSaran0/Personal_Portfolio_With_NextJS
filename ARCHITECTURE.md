# CMS-Driven Portfolio — Architecture

## Folder Structure

```
├── prisma/
│   ├── schema.prisma          # Prisma data models
│   └── migrations/            # Database migrations (generated)
├── prisma.config.ts           # Prisma configuration
│
├── generated/
│   └── prisma/                # Generated Prisma Client (gitignored)
│
├── lib/
│   └── prisma.js              # Singleton Prisma Client instance
│
├── components/                # Shared UI components (existing)
│   ├── Hero.js
│   ├── Projects.js
│   ├── Skills.js
│   ├── Experience.js
│   ├── Contact.js
│   └── …
│
├── pages/
│   ├── index.js               # Public portfolio home (existing)
│   ├── _app.js                # App wrapper (existing)
│   ├── _document.js           # Document wrapper (existing)
│   │
│   ├── api/                   # API Routes (Next.js Route Handlers)
│   │   ├── auth/
│   │   │   ├── login.js       # POST  — admin login
│   │   │   └── logout.js      # POST  — admin logout
│   │   ├── projects/
│   │   │   ├── index.js       # GET (public) / POST (admin)
│   │   │   └── [id].js        # GET / PUT / DELETE
│   │   ├── skills/
│   │   │   ├── index.js       # GET (public) / POST (admin)
│   │   │   └── [id].js        # GET / PUT / DELETE
│   │   └── experiences/
│   │       ├── index.js       # GET (public) / POST (admin)
│   │       └── [id].js        # GET / PUT / DELETE
│   │
│   └── admin/                 # Admin Dashboard (protected)
│       ├── index.js           # Dashboard overview
│       ├── login.js           # Login page
│       ├── projects/
│       │   ├── index.js       # List projects
│       │   ├── new.js         # Create project
│       │   └── [id].js        # Edit project
│       ├── skills/
│       │   ├── index.js       # List skills
│       │   ├── new.js         # Create skill
│       │   └── [id].js        # Edit skill
│       └── experiences/
│           ├── index.js       # List experiences
│           ├── new.js         # Create experience
│           └── [id].js        # Edit experience
│
├── public/                    # Static assets (existing)
└── styles/                    # Global styles (existing)
```

## Prisma Data Models

### AdminUser
| Field     | Type     | Notes                     |
|-----------|----------|---------------------------|
| id        | String   | CUID primary key          |
| email     | String   | Unique                    |
| password  | String   | Hashed (bcrypt)           |
| name      | String?  | Optional display name     |
| createdAt | DateTime | Auto-generated            |
| updatedAt | DateTime | Auto-updated              |

### Project
| Field           | Type     | Notes                          |
|-----------------|----------|--------------------------------|
| id              | String   | CUID primary key               |
| title           | String   | Project title                  |
| slug            | String   | Unique, URL-friendly           |
| description     | String   | Short description              |
| longDescription | String?  | Optional detailed description  |
| imageUrl        | String?  | Cover image URL                |
| liveUrl         | String?  | Live demo link                 |
| repoUrl         | String?  | Source code link               |
| tags            | String[] | Technology tags                |
| featured        | Boolean  | Show on homepage               |
| sortOrder       | Int      | Display ordering               |
| published       | Boolean  | Draft / published toggle       |
| createdAt       | DateTime | Auto-generated                 |
| updatedAt       | DateTime | Auto-updated                   |

### Skill
| Field     | Type     | Notes                          |
|-----------|----------|--------------------------------|
| id        | String   | CUID primary key               |
| name      | String   | Skill name                     |
| category  | String   | Grouping (Frontend, Backend…)  |
| icon      | String?  | Icon identifier                |
| level     | Int      | Proficiency 0-100              |
| sortOrder | Int      | Display ordering               |
| createdAt | DateTime | Auto-generated                 |
| updatedAt | DateTime | Auto-updated                   |

### Experience
| Field       | Type      | Notes                        |
|-------------|-----------|------------------------------|
| id          | String    | CUID primary key             |
| company     | String    | Company name                 |
| role        | String    | Job title                    |
| description | String?   | Role description             |
| startDate   | DateTime  | Start date                   |
| endDate     | DateTime? | End date (null = current)    |
| current     | Boolean   | Currently working here       |
| sortOrder   | Int       | Display ordering             |
| createdAt   | DateTime  | Auto-generated               |
| updatedAt   | DateTime  | Auto-updated                 |

## API Structure

| Method | Endpoint                 | Auth   | Description              |
|--------|--------------------------|--------|--------------------------|
| POST   | `/api/auth/login`        | Public | Admin login              |
| POST   | `/api/auth/logout`       | Admin  | Admin logout             |
| GET    | `/api/projects`          | Public | List published projects  |
| POST   | `/api/projects`          | Admin  | Create project           |
| GET    | `/api/projects/:id`      | Public | Get single project       |
| PUT    | `/api/projects/:id`      | Admin  | Update project           |
| DELETE | `/api/projects/:id`      | Admin  | Delete project           |
| GET    | `/api/skills`            | Public | List all skills          |
| POST   | `/api/skills`            | Admin  | Create skill             |
| GET    | `/api/skills/:id`        | Public | Get single skill         |
| PUT    | `/api/skills/:id`        | Admin  | Update skill             |
| DELETE | `/api/skills/:id`        | Admin  | Delete skill             |
| GET    | `/api/experiences`       | Public | List all experiences     |
| POST   | `/api/experiences`       | Admin  | Create experience        |
| GET    | `/api/experiences/:id`   | Public | Get single experience    |
| PUT    | `/api/experiences/:id`   | Admin  | Update experience        |
| DELETE | `/api/experiences/:id`   | Admin  | Delete experience        |

## Admin Routing Structure

| Route                        | Purpose                  |
|------------------------------|--------------------------|
| `/admin/login`               | Admin login page         |
| `/admin`                     | Dashboard overview       |
| `/admin/projects`            | Manage projects          |
| `/admin/projects/new`        | Create project           |
| `/admin/projects/:id`        | Edit project             |
| `/admin/skills`              | Manage skills            |
| `/admin/skills/new`          | Create skill             |
| `/admin/skills/:id`          | Edit skill               |
| `/admin/experiences`         | Manage experiences       |
| `/admin/experiences/new`     | Create experience        |
| `/admin/experiences/:id`     | Edit experience          |

## Key Architectural Decisions

1. **Pages Router** — The existing project uses the Pages Router; the CMS layer follows the same convention.
2. **Prisma + PostgreSQL** — Type-safe database access, compatible with Vercel Postgres.
3. **API Routes** — All data mutations go through `/api/*` route handlers; no separate backend.
4. **Admin Auth** — Session/JWT-based authentication; admin routes are protected via middleware or per-page guards.
5. **Vercel-ready** — Prisma Client is generated at build time; `DATABASE_URL` is provided via environment variables.
