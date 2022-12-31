import React from 'react';
import { useAppContext } from './AppContextProvider';
import Hero from './Hero';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Submenu from './Submenu';

function App() {
  const { openSubmenu, closeSubmenu } = useAppContext();

  function handleMouseOver(e: React.MouseEvent<HTMLElement>): void {
    const targetElement = e.target as HTMLElement;
    if (targetElement.classList.contains('link-btn')) {
      const idOfSublinkTargeted = Number(targetElement.dataset.id);
      const {
        right,
        left,
        bottom: targetedBottom,
      } = targetElement.getBoundingClientRect();
      const center = (right + left) / 2;
      const bottom = targetedBottom - 3;

      openSubmenu(idOfSublinkTargeted, { center, bottom });
    } else {
      closeSubmenu();
    }
  }
  return (
    <>
      <section className='landing-section' onMouseOver={handleMouseOver}>
        <Navbar />
        <Hero />
      </section>
      <Sidebar />
      <Submenu />
    </>
  );
}

export default App;
