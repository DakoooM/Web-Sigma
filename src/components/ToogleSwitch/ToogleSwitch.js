import { useState } from "react";
import styled from "styled-components";

const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  user-select: none;
`;

const Switch = styled.div`
  position: relative;
  width: 60px;
  height: 28px;
  background: #b3b3b3;
  border-radius: 32px;
  padding: 4px;
  transition: 300ms all;

  &:before {
    transition: 300ms all;
    content: "";
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 35px;
    top: 50%;
    left: 4px;
    background: white;
    transform: translate(0, -50%);
  }
`;

const Input = styled.input`
  opacity: 0;
  position: absolute;

  &:checked + ${Switch} {
    background: ${props => props.colour};

    &:before {
      transform: translate(32px, -50%);
    }
  }
`;

const ToggleSwitch = ({
  title = "Activer le paramètre", 
  defaultChecked = false,
  color = "green",
  text = {active: false, on: "ON", off: "OFF"},
  change = (() => console.log("null change"))
}) => {
    const [checkedSwitch, setChecked] = useState(defaultChecked);
  
    const handleChange = (e) => {
      setChecked(e.target.checked);
      if (change){
        change(e.target.checked);
      }
    };
  
    return (
      <Label title={title}>
        <Input type="checkbox" onChange={handleChange} checked={checkedSwitch} colour={color} />
        <Switch />
        {text.active === true && <span>{checkedSwitch ? text.on : text.off}</span>}
      </Label>
    );
};

export default ToggleSwitch;