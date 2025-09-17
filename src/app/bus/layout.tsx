import React, { FC } from 'react'

interface BuSLayoutProps {
    children: React.ReactNode;
}

const BuSLayout: FC<BuSLayoutProps> = ({ children }) => {
    return (
        <section>{children}</section>
    )
}

export default BuSLayout;