# Front-end Navigation Plan – AI Triage System

## Screens / Pages

1. **Login Page**
   - URL: `/login`
   - Purpose: Authenticate healthcare staff before they access any data.
   - Main actions:
     - Enter username + password
     - Click "Log in"
   - Navigation:
     - On success → /dashboard
     - On failure → stays on login page with an error message

2. **Dashboard**
   - URL: `/dashboard`
   - Purpose: Main starting point after login.
   - Main actions:
     - Search for a patient
     - View recent patients (optional)
     - Logout
   - Navigation:
     - Search → /patients?query=...
     - Click patient → /patients/:id
     - Logout → /login

3. **Patient Search Results**
   - URL: `/patients?query=...`
   - Purpose: Display search results.
   - Main actions:
     - Select a patient
   - Navigation:
     - Click patient → /patients/:id
     - Back → /dashboard

4. **Patient Details Page**
   - URL: `/patients/:id`
   - Purpose: Show patient info, history, and AI summary.
   - Main actions:
     - Generate summary
     - Add/edit visit notes
   - Navigation:
     - Save → stay on page with update confirmation
     - Back → /dashboard

5. **Logout**
   - Clears user session
   - Redirects automatically to `/login`
