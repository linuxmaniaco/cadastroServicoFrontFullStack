import { styled } from '@mui/material/styles';


const Modaloverley = styled("div")`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0,0,0,0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

const ModalContainer = styled('div')`
    background-color: #ffffff;
    padding: 15px 120px 15px 120px;
    //margin: 50px;
    border-radius: 10px;
    width: 80%;
    max-width: 600px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ModalHeader = styled('div')`
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 20px;
`;

const ModalImage = styled('img')`
    width: 150px;
    height: 150px;
    border-radius: 10px;
    margin-bottom: 20px;
`;

const InfoCar = styled('span')`
    width: 100%;
    margin-bottom: 10px;
    display: flex;
    //justify-content: space-around;
    justify-content: space-between;
`;

const InforLabel = styled('span')`
    font-weight: bold;
    color: #333;
    
`;

const InforValue = styled('span')`
    color: #666;
`;

const CloseBotton = styled('button')`
    background-color: #2e5de8;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    cursor: pointer;
    margin-top: 20px;

    &:hover {
        background-color: #1a33ff;
    }
`;

const CarroModel= ({carro, onClose}) => {
  return (
    <Modaloverley>
      <ModalContainer>
        <ModalHeader>{carro.modelo}</ModalHeader>
        <ModalImage src={"https://img.freepik.com/vetores-gratis/carro-vermelho-com-carater-de-papelao-de-olhos-grandes-isolado_1308-46902.jpg"} alt={carro.cor}></ModalImage>
        <InfoCar>
            <InforLabel>MODELO:</InforLabel>
            <InforValue>{carro.modelo}</InforValue>
        </InfoCar>
        <InfoCar>
            <InforLabel>ANO:</InforLabel>
            <InforValue>{carro.ano}</InforValue>
        </InfoCar>
        <InfoCar>
            <InforLabel>COR:</InforLabel>
            <InforValue>{carro.cor}</InforValue>
        </InfoCar>
        <InfoCar>
            <InforLabel>POTÊNCIA:</InforLabel>
            <InforValue>{carro.cavalosDePotencia}</InforValue>
        </InfoCar>
        <InfoCar>
            <InforLabel>FABRICANTE:</InforLabel>
            <InforValue>{carro.fabricante}</InforValue>
        </InfoCar>
        <InfoCar>
            <InforLabel>PAÍS:</InforLabel>
            <InforValue>{carro.pais}</InforValue>
        </InfoCar>
        <CloseBotton onClick={onClose}>FECHAR</CloseBotton>
      </ModalContainer>
    </Modaloverley>
  )
}

export default CarroModel
