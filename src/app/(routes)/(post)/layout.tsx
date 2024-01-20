import "../../../app/globals.css";
import Header from "../../components/Header";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
