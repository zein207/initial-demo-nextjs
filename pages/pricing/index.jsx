
import Link from 'next/link'
import { MainLayout } from '../../components/layouts/MainLayout'

export default function PricingPage() {
  return (
    <MainLayout>
        <h1>Pricing Page</h1>
        <div>
          <h1>
            Go to <Link href="/">Home</Link>
          </h1>
        </div>
    </MainLayout>
  )
}