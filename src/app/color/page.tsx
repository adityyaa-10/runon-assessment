import Head from 'next/head'
import ColorPalette from './ColorPalette'

const Home = () => {
    const initialColors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff', '#ffffff', '#000000'];

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <Head>
                <title>Color Palette App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
                <h1 className="text-6xl font-bold mb-8">Color Palette</h1>
                <ColorPalette initialColors={initialColors} />
            </main>
        </div>
    )
}

export default Home