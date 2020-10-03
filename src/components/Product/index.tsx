import React from 'react';

import tshirtImage from '../../assets/tshirt.png'
import SellerInfo from '../SellerInfo'
import ProductAction from '../ProductAction'

import { Container, Row, Panel, Column, Galerry, Section, Description } from './styles';

const Product: React.FC = () => {
  return (
    <Container>
      <Row>
        <a href='#'>Compartilhar</a>
        <a href='#'>Vender um igual</a>
      </Row>

      <Panel>
        <Column>
          <Galerry>
            <img alt="T-Shirt" src={tshirtImage} />
          </Galerry>
          <Info />
        </Column>

        <Column>
          <ProductAction />
          <SellerInfo />
          <WarrantySection />
        </Column>
      </Panel>
    </Container>
  );
};

const WarrantySection = () => (
  <Section>
    <h4>Garantia</h4>

    <div>
      <span>
        <p className="title">Compra garantida com o ML</p>
        <p className="description">
          Receba o produto que você está esperando ou devolvemos o seu dinheiro
        </p>
      </span>
      <span>
        <p className="title">Garantia do vendedor</p>
        <p className="description">
          Três meses contra defeitos de fabricação
        </p>
      </span>
    </div>

    <a href="#" >Saiba mais sobre garantia</a>
  </Section>
)

const Info = () => (
  <Description>
    <h2>Descrição</h2>

    <p>
      On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain.
      <br />
      <br />
      Itens inclusos: <br />
      - 1x Camisa 100% algodão <br />
      - 1x Termo de garantia. <br />
      <br />
      These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."
    </p>


  </Description>
)

export default Product;
