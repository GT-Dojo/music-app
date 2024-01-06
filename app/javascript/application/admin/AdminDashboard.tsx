import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

interface AdminDashboardProps {
  title: string;
  subtitle?: string;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ title, subtitle }) => {
  const navigate = useNavigate();
  return (
    <Container>
      <h1>{title}</h1>
      {subtitle && <h2>Subtitle: {subtitle}</h2>}
      <button
        onClick={() => {
          navigate('../some_route');
        }}
      >
        This is a button
      </button>
    </Container>
  );
};

const Container = styled.div`
  background-color: white;
  height: 100vh;
`;

export default AdminDashboard;
