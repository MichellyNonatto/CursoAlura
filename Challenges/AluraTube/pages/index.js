import config from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/Timeline";
import { StyledCanais } from "../src/components/Timeline";


function homePage() {
    const estilosDaHomePage = {
    };

    return (
        <>
            <CSSReset />
            <div style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
            }}>
                <Menu />
                <Header />
                <Timeline playlists={config.playlists} canais={config.canais}>
                    Conteúdo
                </Timeline>
            </div>
        </>
    );
}

const StyledHeader = styled.div`

    .user-banner__imagem{
        width: 100%;
        max-height: 20rem;
        object-fit: cover;
        object-position: left center;
    }

    .user-info{
        display: flex;
        align-items: center;
        width: 100%;
        padding: 1rem 2rem;
        gap: 1rem;
    }

   .user-info__imagem {
        width: 6rem;
        height: auto;
        border-radius: 50%;
    }

    .user-info__perfil-titulo{
        font-weight: 700;
        font-size: 1.5rem;
        margin-bottom: .2rem;
    }

   .user-info__perfil-texto{
    color: #666;
   }
 
`;
//Header
function Header() {
    return (
        <StyledHeader>

            <section className="user-banner">
                <img src={`${config.banner}`} className="user-banner__imagem"/>
            </section>

            <section className="user-info">
                <img src={`https://github.com/${config.github}.png`} className="user-info__imagem"/>
                <div className="user-info__perfil">
                    <h2 className="user-info__perfil-titulo">{config.name}</h2>
                    <p className="user-info__perfil-texto">{config.job}</p>
                </div>
            </section>
        </StyledHeader>
    )
}

//Timeline
function Timeline(props) {
    console.log("Esse é o props: ", props);
    const playlistNames = Object.keys(props.playlists);
    const canaisNames = Object.keys(props.canais);
    return (
        <main>
            <StyledTimeline>
                {playlistNames.map((playlistName) => {
                    const videos = props.playlists[playlistName];

                    console.log(playlistName);
                    console.log(videos);
                    return (
                        <section className="playlist">
                            <h2>{playlistName}</h2>
                            <div>
                                {videos.map((video) => {
                                    return (
                                        <a href={video.url}>
                                            <img src={video.thumb} />
                                            <span>
                                                {video.title}
                                            </span>
                                        </a>
                                    )
                                })}
                            </div>
                        </section>
                    )
                })}

            </StyledTimeline>
            <StyledCanais>
            {canaisNames.map((canaisName) => {
                    const perfis = props.canais[canaisName];

                    console.log(canaisName);
                    console.log(perfis);
                    return (
                        <section>
                            <h2>{canaisName}</h2>
                            <div>
                                {perfis.map((perfil) => {
                                    return (
                                        <a href={perfil.url}>
                                            <img src={perfil.thumb} />
                                            <span>
                                                {perfil.title}
                                            </span>
                                        </a>
                                    )
                                })}
                            </div>
                        </section>
                    )
                })}
            </StyledCanais>
            <StyledTimeline>
                <h4>&copy; Feito por <span>Michelly Nonato</span> durante a imerção Alura</h4>
            </StyledTimeline>
        </main>
    )
}

export default homePage;