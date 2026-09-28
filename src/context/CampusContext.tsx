import React, { createContext, useContext, useState } from 'react';

type CampusItem = {
  id: string;
  title: string;
  date: string;
  location: string;
};

const initialItems: CampusItem[] = [
  {
    id: '1',
    title: 'Freshmen Orientation',
    date: 'October 5, 2026',
    location: 'University Gym',
  },
  {
    id: '2',
    title: 'Intramural Basketball',
    date: 'October 8, 2026',
    location: 'Campus Court',
  },
  {
    id: '3',
    title: 'Career Fair',
    date: 'October 12, 2026',
    location: 'Student Center',
  },
  {
    id: '4',
    title: 'Student Organization Fair',
    date: 'October 15, 2026',
    location: 'Main Quadrangle',
  },
];

type CampusContextType = {
  campusItems: CampusItem[];
  addItem: (title: string, date: string, location: string) => void;
};

const CampusContext = createContext<CampusContextType | undefined>(
  undefined
);

export function CampusProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [campusItems, setCampusItems] =
    useState<CampusItem[]>(initialItems);

  const addItem = (
    title: string,
    date: string,
    location: string
  ) => {
    const newItem: CampusItem = {
      id: Date.now().toString(),
      title,
      date,
      location,
    };

    setCampusItems((currentItems) => [
      ...currentItems,
      newItem,
    ]);
  };

  return (
    <CampusContext.Provider value={{ campusItems, addItem }}>
      {children}
    </CampusContext.Provider>
  );
}

export function useCampus() {
  const context = useContext(CampusContext);

  if (!context) {
    throw new Error(
      'useCampus must be used inside CampusProvider'
    );
  }

  return context;
}