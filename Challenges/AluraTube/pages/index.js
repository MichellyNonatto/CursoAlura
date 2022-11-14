import config from "../config.json";
import styled from "styled-components"

function homePage() {
    return (
        <div>
            <Menu />
            <Header />
            <Timeline />
        </div>
    )
}

//Menu
function Menu() {
    return (
        <div className="menu">

        </div>
    )
}

const StyledHeader = styled.div`
    img {
        width:80px;
        height: 80px;
        border-radius: 50%;
    }
`;
//Header
function Header() {
    return (
        <div className="Header">
            {/* <img src="banner"/> */}
            <img src={`https://github.com/${config.github}.png`} />
            {config.name}
            {config.job}
        </div>
    )
}

//Timeline
function Timeline() {
    return (
        <div className="Timeline">

        </div>
    )
}


//Banner
/*function Banner(){
    return()
}*/
export default homePage;