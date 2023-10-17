/* eslint-disable react/require-default-props */
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import Link from 'next/link';
import { useAuth } from '../utils/context/authContext';

export default function Home() {
  const { user } = useAuth();
  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: '90vh',
        padding: '30px',
        maxWidth: '500px',
        margin: '0 auto',
      }}
    >
      <h1>{`Hello, ${user.displayName}!`}</h1>
      <h4>Select to get started!</h4>
      <Link passHref href="/orders">
        <Button variant="light">View Orders</Button>
      </Link>
      <Link passHref href="/order/new">
        <Button variant="warning">Create An Order</Button>
      </Link>
      <Link passHref href="/revenue">
        <Button variant="success">View Revenue</Button>
      </Link>
    </div>
  );
}

Home.propTypes = {
  user: PropTypes.shape({
    displayName: PropTypes.string,
  }),
};
