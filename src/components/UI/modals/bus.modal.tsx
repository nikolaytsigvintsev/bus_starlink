'use client'

import CustomModal from '@/components/common/modal';
import { BusForm } from '@/forms/bus.form';
import { Button } from '@heroui/button';
import React from 'react';

// size?: "sm" | "md" | "lg" | "xl";

const BusModal = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    const onClose = () => setIsOpen(false);
    const onOpen = () => setIsOpen(true);

    return (
        <div>
            <Button variant="bordered" color="secondary" className="mt-4" onPress={onOpen}>
                Open
            </Button>
            <CustomModal isOpen={isOpen} onClose={onClose} size="md" title="Bus model">
                <BusForm onClose={onClose} />
            </CustomModal>
        </div>

    )
}

export default BusModal;