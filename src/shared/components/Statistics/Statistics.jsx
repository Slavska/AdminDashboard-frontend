import sprite from "../../images/symbol-defs.svg";
import {
  Item,
  List,
  SvgIcons,
  TextNumber,
  TextTitle,
} from "./Statistics.styled";

export const Statistics = ({ suppliers, customers, products }) => {
  return (
    <>
      <List>
        <Item>
          <SvgIcons>
            <use href={sprite + "#icon-money"}></use>
          </SvgIcons>
          <TextTitle>All products</TextTitle>
          <TextNumber>{products}</TextNumber>
        </Item>
        <Item>
          <SvgIcons>
            <use href={sprite + "#icon-users"}></use>
          </SvgIcons>
          <TextTitle>All suppliers</TextTitle>
          <TextNumber>{suppliers}</TextNumber>
        </Item>
        <Item>
          <SvgIcons>
            <use href={sprite + "#icon-users"}></use>
          </SvgIcons>
          <TextTitle>All customers</TextTitle>
          <TextNumber>{customers}</TextNumber>
        </Item>
      </List>
    </>
  );
};
