import Navbar from "../component/Navbar";

export default function Layout({children} : Readonly<{children : React.ReactNode}>) {
  return (
    <main className = "font-sans">
      <Navbar/>
      {children}
    </main>
  )
}
