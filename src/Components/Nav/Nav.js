import './styles.scss'

const Nav = ({isMobileOpen, screenSize}) => {

  return (
    <div className={screenSize >= 1150 || !isMobileOpen ? 'drawer' : 'drawer nav-open'}>
      <nav className='nav'>
        <ul>
          <li><a href="https://fulhaus.com/pages/haus-in-a-box-by-fulhaus">Samples</a></li>
          <li><a href="https://fulhaus.com/collections">Store</a></li>
          <li><a href="https://fulhaus.com/pages/contact-us-1">Contact</a></li>
        </ul>
        <div className="create-your-own">
          <a href="https://fulhaus.com/pages/how-it-works" title='Create your own package'>
            Create your own
          </a>
        </div>
      </nav>
      <div className="accent-block">
        {/* Insert BG Color Pink */}
      </div>
    </div>
  )
}

export default Nav