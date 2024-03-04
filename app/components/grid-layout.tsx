'use client'

import React, { useEffect, useState } from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

const ResponsiveGridLayout = WidthProvider(Responsive);

// Define your initial layouts for each breakpoint
const initialLayouts = {
  xl: [
    { i: '1', x: 0, y: 0, w: 2, h: 1 },
    { i: '2', x: 2, y: 0, w: 1, h: 2 },
    { i: '3', x: 3, y: 0, w: 1, h: 1 },
    { i: '4', x: 0, y: 1, w: 1, h: 1 },
    { i: '5', x: 1, y: 1, w: 1, h: 2 },
    { i: '6', x: 3, y: 1, w: 1, h: 1 },
    { i: '7', x: 0, y: 2, w: 1, h: 1 },
    { i: '8', x: 2, y: 2, w: 1, h: 1 },
    { i: '9', x: 3, y: 2, w: 1, h: 1 },
    { i: '10', x: 0, y: 3, w: 1, h: 1 },
    { i: '11', x: 1, y: 3, w: 1, h: 1 },
    { i: '12', x: 2, y: 3, w: 2, h: 1 },
  ],
  md: [
    { i: '1', x: 0, y: 0, w: 2, h: 2 },
    { i: '2', x: 2, y: 0, w: 1, h: 1 },
    { i: '3', x: 3, y: 0, w: 1, h: 1 },
    { i: '4', x: 2, y: 1, w: 1, h: 1 },
    { i: '5', x: 3, y: 1, w: 1, h: 2 },
    { i: '6', x: 0, y: 2, w: 1, h: 1 },
    { i: '7', x: 1, y: 2, w: 1, h: 1 },
    { i: '8', x: 2, y: 2, w: 1, h: 1 },
    { i: '9', x: 0, y: 3, w: 1, h: 2 },
    { i: '10', x: 1, y: 3, w: 1, h: 1 },
    { i: '11', x: 2, y: 3, w: 2, h: 2 },
    { i: '12', x: 1, y: 4, w: 1, h: 1 },
  ],
  sm: [
    { i: '1', x: 0, y: 0, w: 2, h: 2 },
      { i: '2', x: 0, y: 2, w: 2, h: 1 },
      { i: '3', x: 0, y: 3, w: 1, h: 1 },
      { i: '4', x: 1, y: 3, w: 1, h: 2 },
      { i: '5', x: 0, y: 4, w: 1, h: 1 },
      { i: '6', x: 0, y: 5, w: 1, h: 1 },
      { i: '7', x: 1, y: 5, w: 1, h: 1 },
      { i: '8', x: 0, y: 6, w: 2, h: 1 },
      { i: '9', x: 0, y: 7, w: 1, h: 2 },
      { i: '10', x: 1, y: 7, w: 1, h: 1 },
      { i: '11', x: 1, y: 8, w: 1, h: 1 },
      { i: '12', x: 0, y: 9, w: 2, h: 2 },
  ],
};


const MyGridLayout = () => {
  const [rowHeight, setRowHeight] = useState(280); // Default row height

  useEffect(() => {
    const updateRowHeight = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setRowHeight(164); // sm
      } else if (width < 1280) {
        setRowHeight(172); // md
      } else {
        setRowHeight(280); // xl
      }
    };

    updateRowHeight(); // Set initial row height
    window.addEventListener('resize', updateRowHeight); // Update on resize
    return () => window.removeEventListener('resize', updateRowHeight); // Cleanup
  }, []);

  // const gridItems = Array.from({ length: 12 }, (_, i) => i + 1).map(i => (
  //   <div key={i} className="bg-white text-black flex items-center justify-center">
  //     <span>{i}</span>
  //   </div>
  // ));

  return (
    <ResponsiveGridLayout
      className="layout"
      layouts={initialLayouts}
      breakpoints={{ xl: 1199, md: 760, sm: 0 }}
      cols={{ xl: 4, md: 4, sm: 2 }}
      rowHeight={rowHeight}
      containerPadding={[16, 16]}
      margin={[16, 16]}
      isResizable={false}
      isDraggable={true}
      useCSSTransforms={true}
      isBounded={false}
    >
      {Object.keys(initialLayouts.xl).map(index => {
        const key = (parseInt(index) + 1).toString();
        return (
          <div key={key} className="bg-white text-black flex items-center justify-center">
            <span>{key}</span>
          </div>
        );
      })}
    </ResponsiveGridLayout>
  );
};

export default MyGridLayout;
