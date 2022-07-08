import styled from 'styled-components'

interface SlideProps{
    imgURL : String,

}

export const Container=styled.div<SlideProps>`
    background-image : ${ (props) =>(  `url(${props.imgURL})`   )};
    background-size : contain;
    background-repeat: no-repeat;
    width: 500px;
    height: 200px;
`;