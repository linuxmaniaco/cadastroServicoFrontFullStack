import {
  Button,
  Card,
  Box,
  Grid,
  Typography,
  useTheme,
  styled,
  Avatar,
  Divider,
  alpha,
  ListItem,
  ListItemText,
  List,
  ListItemAvatar
} from '@mui/material';
import TrendingUp from '@mui/icons-material/TrendingUp';
import Text from 'src/components/Text';
import Chart from 'react-apexcharts';
import type { ApexOptions } from 'apexcharts';

const AvatarSuccess = styled(Avatar)(
  ({ theme }) => `
      background-color: ${theme.colors.success.main};
      color: ${theme.palette.success.contrastText};
      width: ${theme.spacing(8)};
      height: ${theme.spacing(8)};
      box-shadow: ${theme.colors.shadows.success};
`
);

const ListItemAvatarWrapper = styled(ListItemAvatar)(
  ({ theme }) => `
  min-width: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: ${theme.spacing(1)};
  padding: ${theme.spacing(0.5)};
  border-radius: 60px;
  background: ${
    theme.palette.mode === 'dark'
      ? theme.colors.alpha.trueWhite[30]
      : alpha(theme.colors.alpha.black[100], 0.07)
  };

  img {
    background: ${theme.colors.alpha.trueWhite[100]};
    padding: ${theme.spacing(0.5)};
    display: block;
    border-radius: inherit;
    height: ${theme.spacing(4.5)};
    width: ${theme.spacing(4.5)};
  }
`
);

const Title = styled('div')`
    display: flex;
    justify-content: center;
`;

const SubTitle = styled('div')`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px 0 30px;
`;

const TextCongractulation = styled('div')`
    display: flex;
    //justify-content: center;
    //justify-content: stretch;
    align-content: center;
    //background-color: wheat;
    padding: 0 100px 0 100px;
    
`;

function AccountBalance() {
  const theme = useTheme();

  return (
    <Card>
      <Title>
        <h1> Agradecimentos </h1>
      </Title>

      <SubTitle>
        <h2>Projeto de conclusão de bloco desenvolvimento fullstack Infnet</h2>
      </SubTitle>

      <TextCongractulation>
        <>
          <p>
            Gostaria de agradecer ao Professor Leonardo Gloria, pela aula de Desenvolvimento Fullstack do
            Instituto Infnet. Obrigado por compartilhar seus conhecimentos e por toda dedicação o esforço em oferecer uma aula de qualidade.
          </p>
        </>
      </TextCongractulation>
    </Card>
  );
}

export default AccountBalance;
