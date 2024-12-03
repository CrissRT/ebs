### README 

---

# **Product Catalog Application**

A React + TypeScript application built with Vite and Tailwind CSS to display a product catalog. Users can browse products, filter by categories, add items to the shopping cart, and sort by price. The application fetches product data dynamically from [Fake Store API](https://fakestoreapi.com/).

---

## **Features**

- **Home Page**: Displays a grid of products with images, prices, and categories.
- **Shopping Cart**: Allows users to view and manage selected products.
- **Category Filter**: Sidebar with categories to filter products dynamically.
- **Sort Functionality**: Sort products by price (Low to High or High to Low).
- **Add to Cart**: Add products to the shopping cart.
- **Error Handling**: Gracefully handles API errors with notifications.
- **Loading States**: Displays spinners while fetching data.
- **Responsive Design**: Optimized for desktop and mobile devices.
- **React Context API**: Manages the global state for the cart and selected category.
- **Testing**: Unit tests for key components using Jest and React Testing Library.

---

## **Getting Started**

### **1. Prerequisites**
Ensure the following tools are installed on your machine:
- [Node.js](https://nodejs.org/) (v16 or higher)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)
- Git

### **2. Clone the Repository**
```bash
git clone https://github.com/CrissRT/ebs-fe-test.git product-catalog
cd product-catalog
```

### **3. Install Dependencies**
Using npm:
```bash
npm install
```

Or using Yarn:
```bash
yarn install
```

### **4. Run the Application**
To start the development server:
```bash
npm run dev
```

Or with Yarn:
```bash
yarn dev
```

The application will be available at `http://localhost:5173`.

---

## **Testing**

### **Run Tests**
To execute the test suite:
```bash
npm test
```

Or with Yarn:
```bash
yarn test
```

### **Test Details**
- Unit tests are written for the `Sidebar` and `Home` components.
- Includes tests for spinner display, error handling, and category selection.

---

## **Technologies Used**

- **React**: JavaScript library for building user interfaces.
- **TypeScript**: For static typing and improved developer experience.
- **Vite**: Frontend tooling for fast development and builds.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Jest**: Testing framework for unit tests.
- **React Testing Library**: For testing React components.
- **Fake Store API**: For product data.

---

## **Project Structure**

```
src/
├── assets/          # Static assets (e.g., images, icons)
├── components/      # Reusable components (e.g., Sidebar, ProductGrid)
├── context/         # React Context API for global state management
├── pages/           # Application pages (Home, Cart, NotFound)
├── App.tsx          # Main application component
├── main.tsx        # Application entry point
└── styles/          # Tailwind CSS configuration
```

---

## **Approach**

### **Key Decisions**
1. **Tech Stack**:
   - **React with TypeScript**: For scalability and type safety.
   - **Vite**: Chosen for its speed and simplicity.
   - **Tailwind CSS**: Simplified styling and ensured responsiveness.
   - **React Context API**: Simplified global state management (e.g., cart, selected category).

2. **Error Handling**:
   - Integrated `react-toastify` for user-friendly notifications during errors or successful actions.

3. **Testing**:
   - Added unit tests for components to ensure reliability and maintainability.

4. **Responsive Design**:
   - Tailored the layout to adapt gracefully to different screen sizes.