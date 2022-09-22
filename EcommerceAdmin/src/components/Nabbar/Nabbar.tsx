import React from 'react';
import { INabbarProps } from 'models/Nabbar'; 
import { Container, ContainerWrapper, LogoSpan, Image, NabbarIconContainer, NabbarLeft, NabbarRight, NabbarIconBadge } from './Nabbar.Styles';
import { NotificationsNone, Language, Settings } from '@material-ui/icons';

const Nabbar: React.FC<INabbarProps> = ({}) => {
  return (
  <Container>
      <ContainerWrapper>
            <NabbarLeft>
                <LogoSpan>Sankuj</LogoSpan>
            </NabbarLeft>
            <NabbarRight>
                <NabbarIconContainer>
                    <NotificationsNone/>
                    <NabbarIconBadge>
                        2
                    </NabbarIconBadge>
                </NabbarIconContainer>
                <NabbarIconContainer>
                    <Language/>
                    <NabbarIconBadge>
                        2
                    </NabbarIconBadge>
                </NabbarIconContainer>
                <NabbarIconContainer>
                    <Settings/>
                </NabbarIconContainer>
                <Image src="/images/shlok.jpg" height="40px" width="40px" /> 
            </NabbarRight>
      </ContainerWrapper>
  </Container>
  );
};

export default Nabbar;
