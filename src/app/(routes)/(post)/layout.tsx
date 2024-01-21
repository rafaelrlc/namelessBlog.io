import '../../../app/globals.css'
import Header from '../../components/header'

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <div>{children}</div>
}
