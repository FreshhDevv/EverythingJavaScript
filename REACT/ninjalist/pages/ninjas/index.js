import Head from "next/head";
import Link from "next/link";
import styles from '../../styles/Ninjas.module.css';

export const getStaticProps = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();

    return {
        props: { ninjas: data }
    }
}

const Ninjas = ({ ninjas }) => {
    return (
        <>
            <Head>
                <title>Ninja List | Ninjas</title>
                <meta name='keywords' content='ninjas' />
            </Head>
            <div>
                <h1>All Ninjas</h1>
                {ninjas.map(ninja => (
                    <div key={ninja.id}>
                        <Link className={styles.single}>
                            <h3>{ninja.name}</h3>
                        </Link>
                    </div>
                ))}
            </div>
        </>

    );
}

export default Ninjas;