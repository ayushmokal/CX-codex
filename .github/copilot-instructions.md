# Quiz Hub CX Spark - AI Coding Agent Instructions

## Project Overview
A Firebase-powered quiz platform for Ultrahuman's CX team training. React 18 + TypeScript + Vite frontend with Firestore backend, role-based access (agent/coach/admin), real-time leaderboards, and CSV bulk import.

## Architecture & Data Flow

### Tech Stack
- **Frontend**: React 18, TypeScript, Vite (port 8080), React Router, TanStack Query
- **UI**: shadcn/ui (Radix primitives), Tailwind CSS, Lucide icons
- **Backend**: Firebase (Firestore NoSQL, Auth with Google OAuth, Security Rules)
- **State**: React Context (AuthContext, GlobalStateContext), no Redux

### Core Structure
```
src/
├── services/
│   ├── firebase-api.ts    # Main API (authAPI, topicsAPI, questionsAPI, quizAPI, dashboardAPI)
│   ├── admin-api.ts        # Admin user creation with temporary auth swap
│   └── api.ts              # Legacy redirect to firebase-api.ts
├── contexts/
│   └── AuthContext.tsx     # Firebase auth state, login/logout, user profile
├── components/
│   ├── admin/             # Admin CRUD (users, topics, questions, categories)
│   ├── quiz/              # QuizSelection, QuizEngine, QuizRoute
│   ├── dashboard/         # User stats and analytics
│   └── layout/            # Header, Navigation
└── lib/firebase.ts        # Firebase initialization
```

### Firebase Integration Patterns
- **Auth**: `@ultrahuman.com` email restriction enforced in `firestore.rules` and `authAPI.getCurrentUser()`
- **Collections**: `users`, `categories`, `topics`, `questions`, `quizAttempts`, `userStats`, `auditLogs`
- **Real-time**: Use Firestore listeners for leaderboards/stats, not polling
- **Security Rules**: Role-based access in `firestore.rules` - coaches can CRUD content, agents only read

## Critical Developer Workflows

### Local Development
```bash
npm install              # or bun install
npm run dev              # Starts Vite on port 8080
```

**Environment Setup**: Create `.env` with Firebase config:
```env
VITE_FIREBASE_API_KEY=...
VITE_FIREBASE_AUTH_DOMAIN=...
VITE_FIREBASE_PROJECT_ID=...
# See README.md for full list
```

### Deployment
```bash
npm run build                      # Production build
firebase deploy --only firestore:rules  # Deploy security rules
firebase deploy                    # Full deploy (hosting + functions)
```

**Important**: Always deploy `firestore.rules` and `firestore.indexes.json` before deploying app changes that modify data access patterns.

### Testing Approach
- Manual testing via browser (no Jest/Vitest setup yet)
- Use debug scripts: `node debug-userstats.js`, `node comprehensive-debug.js`
- Check Firebase Console → Firestore for data validation

## Project-Specific Conventions

### API Service Pattern
All database operations go through `src/services/firebase-api.ts` exports:
```typescript
import { authAPI, topicsAPI, questionsAPI, quizAPI } from '../services/api';

// ✅ Good: Use exported APIs
const topics = await topicsAPI.getTopics();
const user = await authAPI.getCurrentUser();

// ❌ Bad: Don't import firebase db/auth directly in components
import { db } from '../lib/firebase'; // Avoid this
```

### State Management
- **Auth State**: Always use `useAuth()` hook from `AuthContext`
- **Dashboard Refresh**: Use `refreshTrigger` prop pattern (see `App.tsx` line 189)
- **Form State**: React Hook Form + Zod validation (see admin components)

### Component Organization
- Admin components use `Card` wrapper from shadcn/ui
- All forms use `useToast()` for feedback (no alerts)
- Navigation handled via React Router `useNavigate()`, not direct `<Link>` components

## Critical Gotchas

### 1. Quiz Answers Array Serialization
Firestore doesn't support 2D arrays. Quiz answers stored as flat objects:
```typescript
// Component format (2D array)
answers: [[0], [1, 2], [3]]

// Firestore format (serialized)
answers: [
  { questionIndex: 0, selectedOptions: [0] },
  { questionIndex: 1, selectedOptions: [1, 2] },
  { questionIndex: 2, selectedOptions: [3] }
]
```
See `firebase-api.ts` line 1154 `submitQuizAttempt()` for serialization logic.

### 2. Admin User Creation Flow
Creating users requires temporary auth swap (see `admin-api.ts` line 29):
1. Save current user credentials
2. Create new user with `createUserWithEmailAndPassword()`
3. Sign back in as admin
4. Create Firestore user doc + userStats

### 3. Google OAuth Domain Restriction
- Provider setup includes `hd: 'ultrahuman.com'` parameter
- Popup blocked? Automatically falls back to redirect flow
- Must call `authAPI.handleRedirectResult()` on app init (see `AuthContext.tsx` line 16)

### 4. UserStats Update Pattern
Quiz completion triggers `updateUserStats()` which:
- Calculates new averages (accuracy, response time)
- Updates weekly quiz count
- Manages streak logic (must complete within 24h)
- **Never throws** - silent failure to avoid blocking quiz submission

## CSV Import System

### Format Requirements
Required columns: `question`, `option_a`, `option_b`, `option_c`, `option_d`, `correct_answer`, `explanation`, `topic`, `category`, `difficulty`

### Pre-Import Checklist
1. Categories must exist in `categories` collection (exact name match)
2. Topics must exist in `topics` collection (exact name match)
3. Topics must be linked to correct category
4. Refresh admin panel after creating categories/topics before import

### Parser Behavior
- Handles quoted fields with commas inside quotes
- Case-insensitive header mapping (`Question`, `question`, `Q` all work)
- Auto-filters rows missing required fields
- See `QuizImport.tsx` line 99 for parsing logic

## Integration Points

### Firestore Security Rules
Before modifying user roles or data access:
1. Check `firestore.rules` for current permissions
2. Test changes locally with Firebase emulator (uncomment `firebase.ts` line 24-25)
3. Deploy rules BEFORE deploying app: `firebase deploy --only firestore:rules`

### Audit Logging
All admin CRUD operations auto-log to `auditLogs` collection via `createAuditLog()` helper. Includes:
- Old/new values for updates
- User ID, timestamp, user agent
- Immutable (update/delete blocked in rules)

### Monitoring
- Sentry integration at app root (see `App.tsx`)
- Console logs prefixed with component/function name (e.g., `UserStats:`, `Dashboard:`)
- No centralized logging service yet

## Common Patterns

### Protected Routes
```typescript
<Route path="/admin/*" element={
  <ProtectedRoute>
    <AdminComponent />
  </ProtectedRoute>
} />
```

### Loading States
```typescript
const [isLoading, setIsLoading] = useState(false);
// Show spinner while loading, use shadcn/ui Skeleton components
```

### Error Handling
```typescript
try {
  await api.doSomething();
  toast({ title: "Success", description: "..." });
} catch (error) {
  toast({ 
    title: "Error", 
    description: error.message, 
    variant: "destructive" 
  });
}
```

## Key Files for Reference

- `src/types/index.ts` - All TypeScript interfaces (User, Question, QuizAttempt, etc.)
- `firestore.rules` - Security rules with role-based helper functions
- `docs/firestore-schema.md` - Complete Firestore schema documentation
- `docs/CSV_IMPORT_GUIDE.md` - CSV format specs and troubleshooting
- `DEPLOYMENT_GUIDE.md` - Production deployment checklist

## When Making Changes

**Adding new features**:
1. Check if similar pattern exists in admin components
2. Add types to `src/types/index.ts` first
3. Create API method in appropriate service file
4. Update security rules if new collection access needed
5. Test with multiple roles (agent, coach, admin)

**Modifying data structures**:
1. Update Firestore schema in existing documents (no migrations)
2. Update TypeScript types
3. Update both read/write logic in API services
4. Check if serialization needed (like quiz answers)

**Authentication issues**:
1. Verify user has `@ultrahuman.com` email
2. Check user doc exists in `users` collection
3. Verify role in Firestore (not just Firebase Auth)
4. Test Google OAuth redirect flow on different domains
