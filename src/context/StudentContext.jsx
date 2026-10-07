import { createContext, useContext, useState } from "react";

// 1. Create the context
const StudentContext = createContext(null);

// 2. Student data: array of objects
export const students = [
  { id: 101, name: "Aravind", roll: "IT1234" },
  { id: 102, name: "Dinesh", roll: "IT2345" },
  { id: 103, name: "Kavitha", roll: "IT4567" },
  { id: 104, name: "Mahima", roll: "IT6789" },
  { id: 105, name: "Rashika", roll: "IT8900" },
  { id: 106, name: "Snehalatha", roll: "IT0034" },
];

// 3. Provider holds the global favourites state
export function StudentProvider({ children }) {
  const [favourites, setFavourites] = useState([]);

  const addFavourite = (student) => {
    // Prevent duplicates
    setFavourites((prev) =>
      prev.some((s) => s.id === student.id) ? prev : [...prev, student]
    );
  };

  const removeFavourite = (id) => {
    setFavourites((prev) => prev.filter((s) => s.id !== id));
  };

  const isFavourite = (id) => favourites.some((s) => s.id === id);

  return (
    <StudentContext.Provider
      value={{ favourites, addFavourite, removeFavourite, isFavourite }}
    >
      {children}
    </StudentContext.Provider>
  );
}

// 4. Custom hook wrapping useContext
export function useStudents() {
  const ctx = useContext(StudentContext);
  if (!ctx) throw new Error("useStudents must be used inside <StudentProvider>");
  return ctx;
}
