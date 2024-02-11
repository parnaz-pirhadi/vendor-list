import Styled from "styled-components";

export const SmallText = Styled.span`
    font-size:var(--text-small);
    font-weight:var(--font-regular);
    
`;

export const DeliveryWrapper = Styled(SmallText)`
   display: flex;

`;
export const Description = Styled(SmallText)`
    white-space: nowrap;
    text-overflow: ellipsis;
    max-width: 100%;
    overflow: hidden;
    display: inline-block;
`;

export const ContentWrapper = Styled.div`
    padding-top:20px;
`;
export const TitleWrapper = Styled.div`
    display:flex;
    justify-content: space-between;
    align-items: center;
`;
export const Title = Styled.div`
    font-size: var(--text-medium);
    font-weight: var(--font-medium);
`;


export const RateWrapper = Styled(SmallText)`
    direction:ltr;
    display: flex;
    gap: 5px;
    align-items: center;
    &:nth-child(2){
    color:var(--text-color-light);
    }
`;

export const Rate = Styled(SmallText)`
    direction:ltr;
    display:flex;
    display:flex;
    position:relative;
    border-radius:6px;
    padding:0 5px;
    color:${props=>props.rate==="OK"?'var(--text-green)':'var(--text-color)'};
    background-color:${props=>props.rate==="OK"?'var(--bg-green)':'var(--bg-color)'};
   
    width:30px;
    justify-content:right;    
    & svg{
        fill:${props=>props.rate==="OK"?'var(--text-green)':'var(--text-color)'};
    
    }
`;
