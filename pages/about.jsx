
import Link from 'next/link'
import { DarkLayout } from '../components/layouts/DarkLayout'
import { MainLayout } from '../components/layouts/MainLayout'

export default function AboutPage() {
  return (
    <>
      <h1>About Page</h1>
      <div>
        <h1>
          Go to <Link href="/">Home</Link>
        </h1>
      </div>
    </>
  )
}

AboutPage.getLayout = function getLayout( page ) {
  return (
    <MainLayout>
      <DarkLayout>
        { page }
      </DarkLayout>
    </MainLayout>
  )
}