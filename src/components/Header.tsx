import React, { useContext } from 'react'
import { SidebarContext, sidebarContext } from '../context/sidebarContext'
import { Logo } from './Logo'

export default function Header() {
  const { isSidebarOpen, setSidebarOpen } = useContext(sidebarContext) as SidebarContext
  return (
    <header className='w-full py-5 flex items-center lg:justify-center justify-between lg:px-0 px-4 bg-gray-700 border-b border-gray-600'>
      <Logo />
      <div className='flex items-center gap-2 lg:hidden'>
        Aulas
        <button className='transition-all' onClick={() => setSidebarOpen(!isSidebarOpen)}>
          {isSidebarOpen ? (
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 8L23.5563 23.5563" stroke="#81D8F7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M8 24L23.5563 8.44365" stroke="#81D8F7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          ) : (
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 16H27" stroke="#81D8F7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M5 8H27" stroke="#81D8F7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M5 24H27" stroke="#81D8F7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          )}
        </button>
      </div >
    </header >
  )
}
