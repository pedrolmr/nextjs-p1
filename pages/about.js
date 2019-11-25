import Layout from '../components/Layout';
import { Component } from 'react';

class About extends Component{
    static async getInitialProps(){
        const res = await fetch("https://api.github.com/users/pedrolmr")
        const data = await res.json();
        console.log(data);
        return { user: data }
    }
    render(){
        const { user } = this.props;
        return (
            <Layout title="About me">
                <img src={user.avatar_url} />
                <p>{user.name}</p>
            </Layout>
        )
    }
};
export default About;