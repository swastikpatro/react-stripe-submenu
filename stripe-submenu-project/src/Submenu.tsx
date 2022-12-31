import { useAppContext } from './AppContextProvider';
import sublinks from './data';
import { useEffect, useRef } from 'react';

const Submenu = () => {
  const { isSubmenuOpen, pageID, location } = useAppContext();
  const submenuRef = useRef<HTMLElement>(null!);
  const sublinkHovered = sublinks.find(
    (singleSublink) => singleSublink.sublinkId === pageID
  );
  let columns = sublinkHovered?.links.length!;
  if (columns > 4) {
    columns = 4;
  }

  useEffect(() => {
    submenuRef.current.style.left = location.center + 'px';
    submenuRef.current.style.bottom = location.bottom + 'px';

    return () => {};
  }, [location.center, location.bottom, pageID]);

  return (
    <aside
      ref={submenuRef}
      className={`${isSubmenuOpen ? 'submenu show' : 'submenu'}`}
    >
      <section>
        <h4>{sublinkHovered?.page}</h4>
        <div className={`submenu-center col${columns}`}>
          {sublinkHovered?.links.map((singleLink) => {
            const { icon, url, label } = singleLink;
            return (
              <a href={url} key={label}>
                <span>{icon}</span>
                {label}
              </a>
            );
          })}
        </div>
      </section>
    </aside>
  );
};

export default Submenu;
