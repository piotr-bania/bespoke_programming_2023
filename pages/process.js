import Head from 'next/head'
import GearAndPen from '../components/process/GearAndPen'
import ConstructionSite from '../components/process/ConstructionSite'
import MagnifyingGlass from '../components/process/MagnifyingGlass'
import Rocket from '../components/process/Rocket'
import Overlay_3 from '../components/layout/Overlay_3'

export default function Process() {
    return (
        <>
            <Head>
                <title>Bespoke Programming | Freelance Developer | London</title>
                <meta name="description" content="Bespoke Programming | Freelance Developer | London" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/svg/logo.svg" />
            </Head>

            <main>
                <GearAndPen />
                <ConstructionSite />
                <MagnifyingGlass />
                <Rocket />
                <Overlay_3 />
            </main>
        </>
    )
}