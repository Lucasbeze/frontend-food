import { Container } from './styles.js';
import { useState } from 'react';
import { Input } from "../Input";
import { Logo } from "../Logo/index.jsx";
import { AiOutlineSearch } from 'react-icons/ai';
import { TbReceipt } from 'react-icons/tb';



export function MenuMobile() {
  const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
  const [menu_class, setMenuClass] = useState("menu hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false)


  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("burger-bar clicked");
      setMenuClass("menu visible");
    }
    else {
      setBurgerClass("burger-bar unclicked");
      setMenuClass("menu hidden");
    }
    setIsMenuClicked(!isMenuClicked)
  }

  return (
    <Container >

      <nav>
        <div className='burger-menu' onClick={updateMenu}>
          <div className={burger_class} ></div>
          <div className={burger_class} ></div>
          <div className={burger_class} ></div>
        </div>
        <div className='logo'>
          <Logo />
        </div>
        <div className='recibo'>
          <TbReceipt/>
        </div>
      </nav>

      <div className={menu_class}>
        <Input icon={AiOutlineSearch} placeholder="Busque por pratos ou ingredientes" />
        <a href="#">Sair</a>
        <span></span>
      </div>



    </Container>
  )
}