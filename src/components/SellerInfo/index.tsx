import React from 'react';

import {
  Container,
  Title,
  LocationCard,
  LocationIcon,
  ReputationCard,
  ReputationThermometer,
  ReputationRow,
  SupportIcon,
  ClockIcon,
  More,
} from './styles';

const SellerInfo: React.FC = () => {
  return (
    <Container>
      <Title>Informações sobre o vendeor</Title>
      <LocationCard>
        <LocationIcon />

        <div>

          <p>Localização</p>
          <strong>João Pessoa, Paraíba</strong>
        </div>
      </LocationCard>

      <ReputationCard>
        <ReputationThermometer>
          <li />
          <li />
          <li />
          <li />
          <li className="active" />
        </ReputationThermometer>
        <ReputationRow>
          <div>
            <strong>561</strong>
            <span>vendas nos ultimos 4 meses</span>

          </div>
          <div>
            <strong><SupportIcon /></strong>
            <span>Presta um bom atendimento</span>

          </div>
          <div>
            <strong><ClockIcon /></strong>
            <span>Presta um bom atendimento</span>

          </div>
        </ReputationRow>
      </ReputationCard>

      <More href="#" >Ver mais dados do vendedor</More>

    </Container>
  );
};

export default SellerInfo;
