# Supabase Connection

A simple JavaScript application demonstrating how to connect to Supabase using the Supabase JS client library in a browser environment.

## Overview

This solution shows the basic setup for integrating Supabase into a client-side web application. It initializes a Supabase client and demonstrates the connection by logging the client instance to the browser console.

## Features

- Browser-based Supabase client initialization
- ES modules for clean code organization
- Secure credential management with gitignored config
- CDN-based Supabase library loading

## Prerequisites

- A [Supabase account](https://supabase.com)
- A Supabase project (create one in your Supabase dashboard)
- A local development server or modern web browser

## Setup

1. **Copy the configuration template:**
   ```bash
   cp example.config.js config.js
   ```

2. **Get your Supabase credentials:**
   - Log in to your [Supabase dashboard](https://app.supabase.com)
   - Select your project
   - Navigate to **Settings** → **API**
   - Copy your **Project URL** and **anon public key**

3. **Update the configuration:**
   
   Edit `config.js` with your credentials:
   ```javascript
   const PROJECT_URL = "https://your-project.supabase.co";
   const PUBLISH_KEY = "your-anon-public-key";
   
   export { PROJECT_URL, PUBLISH_KEY };
   ```

4. **Start a local development server:**
   
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve
   
   # Or use VS Code Live Server extension
   ```

5. **Open in browser:**
   
   Navigate to `http://localhost:8000` and open the browser console (F12) to see the Supabase client instance.

> [!IMPORTANT]
> The `config.js` file is gitignored to protect your credentials. Never commit this file to version control.

## Project Structure

```
supabase-connection/
├── app.js              # Main application - initializes Supabase client
├── config.js           # Your credentials (gitignored)
├── example.config.js   # Configuration template
├── index.html          # Entry point with Supabase CDN script
├── .gitignore          # Protects config.js
└── README.md           # This file
```

## How It Works

1. **index.html** loads the Supabase JS library from CDN
2. **config.js** exports your project credentials
3. **app.js** imports the credentials and creates a Supabase client using `createClient()`
4. The client instance is logged to the console for verification

## Expected Output

When you open the application in your browser and check the console, you should see:

- The Supabase client object with methods like `auth`, `from`, `storage`, etc.
- The global `supabase` object from the CDN library

This confirms that:
- The Supabase library loaded successfully
- Your credentials are correct
- The client is ready to interact with your Supabase project

## Next Steps

Once you have a working connection, you can extend this application to:

- Authenticate users with `client.auth.signUp()` or `client.auth.signIn()`
- Query database tables with `client.from('table_name').select()`
- Upload files with `client.storage`
- Subscribe to real-time changes with `client.channel()`

## Troubleshooting

**Console shows "undefined" or errors:**
- Verify your `config.js` file exists and has the correct credentials
- Check that your Supabase project URL and key are correct
- Ensure you're running the app through a local server (not opening the HTML file directly)

**CORS errors:**
- Make sure you're using a local development server
- Check your Supabase project's allowed origins in the dashboard

**Module import errors:**
- Ensure your browser supports ES modules (all modern browsers do)
- Verify the script tag has `type="module"` attribute

## Resources

- [Supabase JavaScript Client Documentation](https://supabase.com/docs/reference/javascript/introduction)
- [Supabase Getting Started Guide](https://supabase.com/docs/guides/getting-started)
- [Supabase Auth Documentation](https://supabase.com/docs/guides/auth)
- [Supabase Database Documentation](https://supabase.com/docs/guides/database)
