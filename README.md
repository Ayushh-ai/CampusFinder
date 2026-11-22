CampusFinder – College Discovery Platform

CampusFinder is a responsive college discovery website developed as part of the Frontend Development Internship Assessment (Track 2 – Next.js).

The platform helps students explore colleges, search by college name or city, filter available institutions, view college details, and save their favourite colleges to a wishlist.

🌐 Live Demo

Website: https://campusfinder-ayush.vercel.app

GitHub Repository: https://github.com/Ayushh-ai/CampusFinder

✨ Features

- Responsive homepage with modern UI.
- Browse available colleges.
- Search colleges by name, city, or course.
- Filter colleges by city and course.
- Sort college listings.
- Load more college results.
- Individual college detail pages.
- Add and remove colleges from wishlist.
- Wishlist persistence using browser LocalStorage.
- Responsive navigation for mobile devices.
- Empty-state handling.

🛠️ Technologies Used

- Next.js (App Router)
- React.js
- JavaScript
- CSS Modules
- HTML5
- LocalStorage
- Git and GitHub
- Vercel

📸 Screenshots

Screenshots of the application are available below.

Homepage

"CampusFinder Homepage" (screenshots/homepage.png)

College Listing

"College Listing" (screenshots/college-listing.png)

College Details

"College Details" (screenshots/college-detail.png)

Wishlist

"Wishlist" (screenshots/wishlist.png)

📂 Project Structure

CampusFinder/
├── app/
│   ├── colleges/
│   ├── wishlist/
│   ├── layout.js
│   └── page.js
├── components/
├── data/
├── lib/
├── public/
├── screenshots/
├── .gitignore
├── package.json
└── README.md

🚀 Getting Started

Follow these steps to run the project locally.

Prerequisites

- Node.js 20.9 or later
- npm
- Git

1. Clone the repository

git clone https://github.com/Ayushh-ai/CampusFinder.git

2. Navigate to the project

cd CampusFinder

3. Install dependencies

npm install

4. Start the development server

npm run dev

5. Open the application

Visit:

http://localhost:3000

🏗️ Production Build

To create a production build:

npm run build

To run the production server:

npm start

📊 Data Handling

The application uses a structured local JavaScript dataset to display college information.

Search, filtering, sorting, and wishlist interactions are handled on the client side. Wishlist data is stored in browser LocalStorage so saved colleges remain available after refreshing the page on the same browser.

☁️ Deployment

The application is deployed using Vercel and connected to the GitHub repository.

Live URL: https://campusfinder-ayush.vercel.app

⚠️ Project Limitations

- College information uses illustrative sample data.
- No external live college API is currently integrated.
- Wishlist functionality uses browser LocalStorage.
- No user authentication or cloud-based wishlist synchronization.

Please verify official college fees, courses, and admission information with the respective institutions.

👨‍💻 Developer

Ayush Bisne

Frontend Development Internship Assessment – Track 2 (Next.js)

GitHub: https://github.com/Ayushh-ai

---

CampusFinder – Your Future, Your Way.