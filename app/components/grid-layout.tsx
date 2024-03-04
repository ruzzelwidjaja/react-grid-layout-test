'use client'

import React, { useEffect, useState } from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';
// import 'react-grid-layout/css/styles.css';
// import 'react-resizable/css/styles.css';
import { initialLayouts } from './layouts';

const ResponsiveGridLayout = WidthProvider(Responsive);

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
          <div key={key} className="bg-white text-black flex items-center justify-center" style={{height: '100%'}}>
            <span>{key}</span>
          </div>
        );
      })}
    </ResponsiveGridLayout>
  );
};

export default MyGridLayout;
