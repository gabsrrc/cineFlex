import { React } from "react";
import styled from "styled-components";

function Select(seat, selections, setSelections) {
  if (seat.isAvailable) {
    if (seat.isSelected) {
      seat.isSelected = false;
      setSelections([...selections]);
    } else {
      seat.isSelected = true;
      setSelections([...selections]);
    }
  } else {
    alert(`O assento ${seat.name} já está ocupado`);
  }
}

export default function ChairList(props) {
  if (props.selections.length === 0) {
    return "Carregando...";
  }

  return props.seats.map((seat) => (
    <Chair
      key={seat.name}
      isAvailable={seat.isAvailable}
      isSelected={seat.isSelected}
    >
      <div onClick={() => Select(seat, props.selections, props.setSelections)}>
        {seat.name}
      </div>
    </Chair>
  ));
}

//Styles

const Chair = styled.div`
  width: 26px;
  height: 26px;
  margin: 0 2px 18px;

  background-color: ${(props) =>
    props.isAvailable ? (props.isSelected ? "#8DD7CF" : "#C3CFD9") : "#FBE192"};
  border-radius: 50%;
  border: solid 1px
    ${(props) =>
      props.isAvailable
        ? props.isSelected
          ? "#45BDB0"
          : "#808F9D"
        : "#F7C52B"};
  display: flex;
  align-items: center;
  justify-content: center;

  color: #000000;
  font-size: 11px;
  line-height: 12.89px;
`;
