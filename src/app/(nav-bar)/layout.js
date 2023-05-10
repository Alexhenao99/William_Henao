import NavBar from '@/components/Navbar'

const layout = ({ children }) => {
  return (
    <div>
      <NavBar />
      {children}
    </div>
  )
}

export default layout
