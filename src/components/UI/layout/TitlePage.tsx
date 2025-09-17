'use client'
import { siteConfig } from '@/config/site.config';
import { usePathname } from 'next/navigation';
import React from 'react'

const TitlePage = () => {
  const pathname = usePathname();

  const currentNavItem = siteConfig.mainNav.find(
    (item) => item.href === pathname
  );

  const titlePage = currentNavItem ? currentNavItem.title : siteConfig.name;

  return (
    <div className='w-full p-4 border-b border-b-slate-200 dark:border-b-slate-700 row-start-2 flex justify-center sm:justify-start'>
      <h1 className='text-2xl font-bold'>{titlePage}</h1>
    </div>
  )
}

export default TitlePage