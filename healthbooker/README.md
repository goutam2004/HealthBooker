<div id="top"></div>

# 🧑‍⚕️ HealthBooker Project 

---

## 📝 Description

**HealthBooker** is a full-featured healthcare platform that streamlines interaction between doctors and patients. It includes:

- Doctor listing and booking
- Appointment tracking
- Notifications
- Admin approval system
- Secure login and user control

> Built with modern tools for seamless healthcare management.

---

## 🛠️ Built With

<div align="center">

![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JS](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=white&color=148dff)
![Node](https://img.shields.io/badge/Node.js-8A2BE2?style=for-the-badge&logo=Node.js&color=b3ffb0)
![Express](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&color=008712)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![Redux](https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white)

</div>

---

## 📸 Screenshots

| Feature                    | Image                                       |
|----------------------------|---------------------------------------------|
| Home Page                 | ![home](./client/src/images/full_pic.png)  |
| Sign Up Page              | ![signup](./client/src/images/signup.png)  |
| Sign In Page              | ![signin](./client/src/images/signin.png)  |
| Profile Page              | ![profile](./client/src/images/profile.png)|
| All Doctors Page          | ![doctors](./client/src/images/doctors.png)|
| Apply as Doctor           | ![apply](./client/src/images/docapply.png) |
| Admin - All Users         | ![users](./client/src/images/users.png)    |
| Admin - Applications      | ![apps](./client/src/images/applications.png)|
| Book Appointment          | ![book](./client/src/images/bookappointment.png)|
| User Appointments         | ![userapps](./client/src/images/userappointments.png)|
| Doctor Appointments       | ![docapps](./client/src/images/doctorappointments.png)|
| Notifications             | ![notify](./client/src/images/notifications.png)|

---

## 🔐 Features

- ✅ User Registration & Login
- ✅ Doctor Listings & Filters
- ✅ Appointment Booking & Management
- ✅ Notification System
- ✅ Doctor Application Panel
- ✅ Admin Dashboard (users + applications)
- ✅ Secure JWT Auth
- ✅ Role-based Access (User / Doctor / Admin)
- ✅ Form Validation with Formik
- ✅ Cloudinary Image Upload Support

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
cd HealthBooker-main


 2. Install Dependencies

Backend 
```bash
cd server
npm install

Frontend
```bash 
cd ../client
npm install


3. Set Up Environment Variables
Create .env files in both /server and /client folders:

.env (server)
```bash
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

.env (client)
```bash
REACT_APP_BASE_URL=http://localhost:5000


4. Start the Development Server

Backend
```bash
cd server
npm start

Frontend
```bash
cd client
npm start

Now, visit http://localhost:3000 in your browser.


🧪 Folder Structure

HealthBooker-main/
├── client/         # React frontend
│   ├── src/
│   └── .env
├── server/         # Node.js backend
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── .env
└── README.md

