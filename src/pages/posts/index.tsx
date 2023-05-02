import Head from 'next/head';
import styles from './styles.module.scss';

export default function Posts() {
    return (
        <>
            <Head>
                <title>Posts | Ignews</title>
            </Head>

            <main className= {styles.container}>
                <div className={styles.posts}>
                    <a href="#">
                        <time>12 de março de 2021</time>
                        <strong>Creating a Monorepo With Lerna & Yarn Workspaces</strong>
                        <p>In the guide, you will learn how to create a Monorepo to menage multiple packages with a shared bu</p>
                    </a>
                    <a href="#">
                        <time>12 de março de 2021</time>
                        <strong>Creating a Monorepo With Lerna & Yarn Workspaces</strong>
                        <p>In the guide, you will learn how to create a Monorepo to menage multiple packages with a shared bu</p>
                    </a>
                    <a href="#">
                        <time>12 de março de 2021</time>
                        <strong>Creating a Monorepo With Lerna & Yarn Workspaces</strong>
                        <p>In the guide, you will learn how to create a Monorepo to menage multiple packages with a shared bu</p>
                    </a>
                </div>
            </main>
        </>
    );
}