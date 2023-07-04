import { HeaderContainer, BotaoNavegacao } from "./styled"
import menu from "../../assets/menu.png"

function Header() {
    return (
        <HeaderContainer>
            <BotaoNavegacao>
                <img src={menu} alt="aa"/>
            </BotaoNavegacao>
            <BotaoNavegacao>
                <img src={menu} alt="aa"/>
            </BotaoNavegacao>
        </HeaderContainer> 
    )
}

export default Header