import Layout from '../components/Layout';

export default ({status}) => (
    <Layout title="Error">
        {status ? `cannot load user data status code ${status}` : <p>Couldn't get that page, sorry</p>}
        
    </Layout>
);