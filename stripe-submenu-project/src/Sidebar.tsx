import { FaTimes } from 'react-icons/fa';
import { useAppContext } from './AppContextProvider';
import sublinks from './data';
import { LazyMotion, domAnimation, m, AnimatePresence } from 'framer-motion';

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useAppContext();

  return (
    <div
      className={`${
        isSidebarOpen ? 'sidebar-wrapper show' : 'sidebar-wrapper'
      }`}
    >
      <LazyMotion features={domAnimation}>
        <AnimatePresence>
          {isSidebarOpen ? (
            <m.aside
              key='sidebar'
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2, ease: 'easeInOut' }}
              className='sidebar'
            >
              <m.button
                whileTap={{ scale: 0.8 }}
                className='close-btn'
                onClick={closeSidebar}
              >
                <FaTimes />
              </m.button>

              <div className='sidebar-links'>
                {sublinks.map((item) => {
                  return (
                    <article key={item.sublinkId}>
                      <h4>{item.page}</h4>
                      <div className='sidebar-sublinks'>
                        {item.links.map((link, i) => {
                          return (
                            <a key={i} href={link.url}>
                              <span>{link.icon}</span>
                              {link.label}
                            </a>
                          );
                        })}
                      </div>
                    </article>
                  );
                })}
              </div>
            </m.aside>
          ) : null}
        </AnimatePresence>
      </LazyMotion>
    </div>
  );
};

export default Sidebar;
