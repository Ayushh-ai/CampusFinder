# CampusFinder

CampusFinder is a responsive college-discovery demo built with Next.js App Router, React, JavaScript and CSS Modules. Students can browse a sample college directory, search and filter colleges, view college detail pages, and save favourites to a browser wishlist.

## Features

- Responsive homepage with navigation, hero search, featured colleges and course categories
- College directory with keyword search, city and course filters, sorting, and Load More
- Dynamic college detail routes at `/colleges/[slug]`
- Wishlist add/remove functionality persisted in browser LocalStorage
- Empty states and responsive mobile navigation
- Local structured college dataset; no external API key is required
- CampusFinder logo and the footer tagline: **CF — Your Future, Your Way**

## Technology

- Next.js App Router
- React functional components and Hooks
- JavaScript
- CSS Modules
- Local JavaScript dataset
- Browser LocalStorage for wishlist persistence

## Requirements

- Node.js 20.9 or later
- npm
- Git (for GitHub submission)

## Run locally

1. Extract the project ZIP.
2. Open the `campusfinder` folder in VS Code or a terminal.
3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000).

## Production build

Run the production build before deployment:

```bash
npm run build
```

If the build succeeds, you can test the production server locally:

```bash
npm start
```

## Project structure

```text
app/                    App Router pages and global styles
  page.js               Homepage
  colleges/page.js      College listing
  colleges/[slug]/      Dynamic college detail pages
  wishlist/             Wishlist page
components/             Reusable header, footer, cards, search and filters
 data/colleges.js       Structured sample college dataset
lib/wishlist-context.js Wishlist state and LocalStorage persistence
public/                 Static logo assets
```

## Data and rendering approach

The project uses a structured local JavaScript dataset in `data/colleges.js`. This is one of the data options permitted by the assignment and keeps the demonstration deterministic without depending on an external API. The homepage and college detail pages are rendered through the Next.js App Router. The listing page uses client-side state for search, filtering, sorting and Load More. Wishlist state is client-side because it depends on browser LocalStorage. Dynamic college pages use static route parameters and page metadata.

## GitHub submission

Create an empty GitHub repository, then run these commands from the project folder (replace the URL with your own repository URL):

```bash
git init
git add .
git commit -m "Initial CampusFinder project"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
git push -u origin main
```

Do not commit `.env` files, passwords, tokens or private keys.

## Vercel deployment

1. Push the project to GitHub.
2. Sign in at [Vercel](https://vercel.com/).
3. Choose **Add New → Project** and import the CampusFinder GitHub repository.
4. Confirm the framework is detected as **Next.js**.
5. Keep the default build command (`npm run build`) and output settings.
6. No environment variables are required for the current demo.
7. Select **Deploy** and wait for the deployment to finish.
8. Open the generated Vercel URL and test all main pages and interactions.

## Screenshots for submission

Capture and add these screenshots to a `screenshots/` folder in the GitHub repository:

- `homepage.png`
- `college-listing.png`
- `college-detail.png`
- `wishlist.png`

Capture the screenshots from your own running/deployed application.

## Sample data notice and limitations

- The dataset contains a limited set of demonstration colleges.
- College summaries, fee ranges, ratings and review counts are illustrative sample content, not verified current admissions information.
- There is no live college API, user account, server-side wishlist sync, or real review system.
- College marks/logos may use text or placeholder visuals.
- Verify official fees, courses, ratings and admission details directly with each institution before relying on them.

## Final verification checklist

- [ ] Homepage loads without errors
- [ ] Search, city filter and course filter work
- [ ] Sorting and Load More work
- [ ] College cards open the correct detail page
- [ ] Wishlist add/remove works and persists after refresh
- [ ] Empty states display correctly
- [ ] Desktop, tablet and mobile layouts are checked
- [ ] `npm run build` completes successfully
- [ ] GitHub repository and deployed Vercel URL are added to the submission
- [ ] Four required screenshots are included
"# CampusFinder" 
