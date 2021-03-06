import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Feed from '../components/Feed'
import Sidebar from '../components/Sidebar'
import Widgets from '../components/Widgets'

const Home: NextPage = () => {
  return (
    <div className="mx-auto max-h-screen">
      <Head>
        <title>Create Next App</title>
      </Head>
      <main className="grid grid-cols-9">
        <Sidebar />
        <Feed />
        <Widgets />
      </main>

    </div>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps = async (context) => {
  const tweets: Tweet[] = await fetchTweets()

  return {
    props: {
      tweets,
    },
  }
}