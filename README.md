# Smart Resto Management System v2.0 🍽️

An efficient, real-time order processing dashboard designed for modern restaurant kitchen management. This project serves as the **ADMS Project Front end Version 2** 

---

## ✨ Features (Requirement Checklist)

### 1. Data Viewing (Read/View)
* **Live Order Table**: Uses a structured HTML table to display all active orders directly from the database (simulated via JavaScript).
* **Read-Only Display**: Orders are displayed clearly in a list where they cannot be accidentally edited without clicking specific action buttons.

### 2. Data Modification (Create, Update, Delete)
* **Create**: A dedicated "Place New Order" form allows for inputting table numbers and selecting menu items.
* **Update (Pre-populated)**: Clicking the Edit icon loads existing order data back into the form for modification.
* **Delete**: Each record features a "Delete" button to instantly remove the order from the kitchen queue.

### 3. User Interface Essentials
* **Modern Design**: Built with a clean, professional interface using the Inter font family and Font Awesome icons.
* **Real-Time Feedback**: Includes a notification system (Toast messages) alerting the user when a record is added, updated, or deleted.

### 4. Technical Integration
* **Request Simulation**: The frontend logic mimics POST and PUT requests to handle data creation and updates.
* **Client-Side Validation**: Uses HTML5 validation (`required`) to prevent empty or invalid data submissions.

---

## 📸 Project Screenshot
![Dashboard Preview](Screenshot%20(1).png)

---

## 🛠️ Tech Stack
* **HTML5 / CSS3**
* **JavaScript (ES6+)**
* **Font Awesome Icons**

---

## 📖 How to Run
1. Open the `index.html` file in any modern web browser.
2. Use the form to add an order, or the icons in the table to edit/delete existing ones.
