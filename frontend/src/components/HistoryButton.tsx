import { useNavigate } from 'react-router-dom'
import lantern from '../assets/images/lantern.png'
import { LanternImage, StyledHistoryButton } from './HistoryButton.style';

function HistoryButton() {
  const navigate = useNavigate();

  return (
    <StyledHistoryButton onClick={() => navigate('/history')}>
        <LanternImage src={lantern} alt='대화기록 바로가기' />
    </StyledHistoryButton>
  )
}

export default HistoryButton