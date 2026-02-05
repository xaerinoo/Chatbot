import { useEffect, useState } from 'react'
import { BuddaContainer, BuddaImage, BuddaWrapper } from './Budda.style';
import buddaClose from '../assets/images/budda_close.png';
import buddaOpen from '../assets/images/budda_open.png';

const Budda = () => {
  const [isOpen, setIsOpen] = useState(true);
  
  useEffect(() => {
    let timeout: number;

    const blink = () => {
      setIsOpen(false);
      const closeDuration = 200 + Math.random() * 100;
      timeout = window.setTimeout(() => {
        setIsOpen(true);
        const openDuration = 500 + Math.random() * 2000;
        timeout = window.setTimeout(blink, openDuration);
      }, closeDuration);
    };

    blink();

    return () => clearTimeout(timeout);
  }, []);

  return (
    <BuddaContainer>
      <BuddaWrapper>
          <BuddaImage
              src={isOpen ? buddaOpen : buddaClose}
              alt="부처 캐릭터"
          />
      </BuddaWrapper>
    </BuddaContainer>
  )
}

export default Budda