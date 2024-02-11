import Styled from "styled-components";

export const HeaderWrapper = Styled.header`
    position:relative;
`;
export const OverlayImage = Styled.img`
    width: 100%;
    z-index:4;
    object-fit: cover;
    height: 114px;
    border-radius:6px;
    filter: brightness(0.97);
`;
export const BackgroundImage = Styled(OverlayImage)`
    position:absolute;
    right:0;
`;
export const ProfileImage = Styled.img`
    position: absolute;
    bottom: -10px;
    right: 8px;
    width: 54px;
    height: 54px;
    padding: 3px;
    border-radius: 100px;
    z-index:6;
`;
