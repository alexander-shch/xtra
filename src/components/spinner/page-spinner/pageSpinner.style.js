import Styled from 'styled-components';

export const SpinnerPageContainer = Styled.div`
@keyframes rotate {
	100% {
		transform: rotate(1turn);
	}
}
flex-direction: column;
position: relative;
	z-index: 0;
	width: 55%;
	height: 500px;
	border-radius: 10px;
	overflow: hidden;
    padding: 2rem;
    margin:auto;
    display: flex;
    justify-content: center;
    align-items: center;
	
	
	&::before {
		content: '';
		position: absolute;
		z-index: -2;
   	 	left: -128%;
   		 top: -49%;
   	 	width: 356%;
   	 	height: 200%;
		background-color: #399953;
		background-repeat: no-repeat;
		background-size: 50% 50%, 50% 50%;
		background-position: 0 0, 100% 0, 100% 100%, 0 100%;
		background-image: linear-gradient(#5e5e5e,#cecece),linear-gradient(#ffffff,#ffffff),linear-gradient(#8f8f8f,#949494),linear-gradient(#ffffff,#ffffff);
		animation: rotate 4s linear infinite;
	}
	
	&::after {
     content: '';
    position: absolute;
    z-index: -1;
    left: 2px;
    top: 2px;
    width: calc(100% - 5px);
    height: calc(100% - 5px);
    background: white;
    border-radius: 5px;
	}
`;
