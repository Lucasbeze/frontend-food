import { Container } from './styles';
import { AiOutlineHeart, AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { Button } from '../Button';
import imagemSalad from '../../assets/salada-ravalleno.png';

export function Cards() {
  return (
    <Container>
      <AiOutlineHeart />
      <div className='content'>
        
        <img src={imagemSalad} alt="imamge salada" />
        <span>Salada Ravanello</span>

        <div className='price'>
        <span>R$ </span>
        <span>49,97</span>
        </div>

        <div className='buttons'>
          <button><AiOutlineMinus /></button>
          <span>01</span>
          <button><AiOutlinePlus /></button>
        </div>
        <div className='btn'>
          <Button title="incluir" />
        </div>
        
      </div>

    </Container>
  )
}