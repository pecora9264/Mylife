import React from 'react'
import { IndexLink, Link } from 'react-router'
import './Header.scss'

export const Header = () => (
  <div className='index_all'>
    <h1>个人空间</h1>
    <IndexLink to='/' activeClassName='route--active' className='aa'>
      主页
    </IndexLink>
    {' · '}
    <Link to='/counter' activeClassName='route--active' className='aa'>
      日志
    </Link>
    {' · '}
    <Link to='/zen' activeClassName='route--active' className='aa'>
      相册
    </Link>
    {' · '}
    <Link to='/elapse' activeClassName='route--active' className='aa'>
      留言板
    </Link>
    {' · '}
    <Link to='/route/88' activeClassName='route--active'className='aa'>
      说说
    </Link>
    {' · '}
    <Link to='/notFound' activeClassName='route--active'className='aa'>
      私密
    </Link>
  </div>
)

export default Header
