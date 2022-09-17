import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavbarLink = styled(Link)`
  font-weight: 400;
  color: #fff !important;
  letter-spacing: 0.8px;
  padding: 0 25px;
  font-size: 18px;
  opacity: 0.75;
  &:hover,
  &:focus {
    color: blue;
  }
  &:active {
    color: red;
  }
`;
