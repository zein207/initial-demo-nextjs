
import Link from 'next/link'
import { MainLayout } from '../components/layouts/MainLayout'

export default function ContactPage() {
  return (
    <MainLayout>
        <h1>Contact Page</h1>
        <div>
          <h1>
            Go to <Link href="/">Home</Link>
          </h1>
        </div>
    </MainLayout>
  )
}