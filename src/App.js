import { useEffect } from "react";
import Header from "./components/Header";
import { useDispatch, useSelector } from 'react-redux';
import { changeMobileStatus } from "./actions/pageActions";
import { getIsMobile } from "./selectors/appSelectors";
import Container from "./components/Container";

function App() {
  const isMobile = useSelector(getIsMobile)
  const dispatch = useDispatch();
  useEffect(() => {
    const handleResize = () => {
      const newIsMobile = window.innerWidth <= 900;
      if (newIsMobile !== isMobile) {
        dispatch(changeMobileStatus(newIsMobile));
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isMobile, dispatch]);

  return (
    <div>
      <Header />
      <Container />
    </div>
  );
}

export default App;
