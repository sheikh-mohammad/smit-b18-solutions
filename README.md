# SMIT B18 Solutions

A collection of practical solutions and assignments for the SMIT B18 training program, demonstrating various web development concepts and integrations.

## Overview

This repository contains hands-on coding solutions covering different technologies and frameworks. Each solution is organized in its own directory with dedicated documentation and setup instructions.

## Solutions

### Supabase Connection

A simple JavaScript application demonstrating how to connect to Supabase using the Supabase JS client library.

**Location:** `supabase-connection/`

**Features:**
- Client-side Supabase integration
- ES modules implementation
- Secure configuration management

**Quick Start:**

1. Navigate to the solution directory:
   ```bash
   cd supabase-connection
   ```

2. Copy the example configuration:
   ```bash
   cp example.config.js config.js
   ```

3. Update `config.js` with your Supabase credentials:
   ```javascript
   const PROJECT_URL = "https://your-project.supabase.co";
   const PUBLISH_KEY = "your-publishable-key";
   
   export { PROJECT_URL, PUBLISH_KEY };
   ```

4. Open `index.html` in a browser or use a local development server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve
   ```

5. Open your browser and navigate to `http://localhost:8000`

> [!NOTE]
> The `config.js` file is gitignored to prevent accidentally committing sensitive credentials. Always use the `example.config.js` as a template.

## Prerequisites

- A modern web browser (Chrome, Firefox, Safari, or Edge)
- A local development server (optional, but recommended)
- [Supabase account](https://supabase.com) (for the Supabase solution)

## Project Structure

```
smit-b18-solutions/
├── supabase-connection/    # Supabase integration example
│   ├── app.js             # Main application logic
│   ├── config.js          # Configuration (gitignored)
│   ├── example.config.js  # Configuration template
│   └── index.html         # Entry point
└── README.md              # This file
```

## Getting Your Supabase Credentials

1. Sign up or log in to [Supabase](https://supabase.com)
2. Create a new project or select an existing one
3. Go to **Settings** → **API**
4. Copy your **Project URL** and **anon/public key**
5. Use these values in your `config.js` file

> [!WARNING]
> Never commit your actual Supabase credentials to version control. The `config.js` file is already in `.gitignore` to protect your keys.

## Development

Each solution can be run independently. Navigate to the specific solution directory and follow its setup instructions.

For solutions requiring a development server, you can use any of these options:

```bash
# Python 3
python -m http.server 8000

# Node.js (http-server)
npx http-server

# Node.js (serve)
npx serve

# VS Code Live Server extension
# Right-click index.html → "Open with Live Server"
```

## Resources

- [Supabase Documentation](https://supabase.com/docs)
- [Supabase JavaScript Client](https://supabase.com/docs/reference/javascript/introduction)
- [MDN Web Docs](https://developer.mozilla.org/)

---

**Note:** This repository contains educational materials and practice solutions. Code examples are designed for learning purposes and may need additional security hardening for production use.
