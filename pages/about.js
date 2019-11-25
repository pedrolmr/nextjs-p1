import Layout from '../components/Layout';
import fetch from 'isomorphic-unfetch';
import Error from './_error';
import { Component } from 'react';

class About extends Component{
    static async getInitialProps(){
        const res = await fetch("https://api.github.com/users/pedrolmr")
        const data = await res.json();
        const status = res.status > 200 ? res.status : false;
        console.log(data);
        return { user: data, status }
    }
    render(){
        const { user, status } = this.props;

        if(status){
            return <Error status={status}/>
        }

        return (
            <Layout title="About me">
                <img src={user.avatar_url} />
                <p>{user.name}</p>
            </Layout>
        )
    }
};
export default About;