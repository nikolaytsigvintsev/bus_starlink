'use client'

import CustomModal from '@/components/common/modal';
import { RegistrationForm } from '@/forms/registration.form';

// size?: "sm" | "md" | "lg" | "xl";
export interface RegistrationModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const RegistrationModal = ({
    isOpen,
    onClose,
}: RegistrationModalProps) => {
    return (
        <CustomModal isOpen={isOpen} onClose={onClose} size="md" title="Registration">
            <RegistrationForm onClose={onClose} />
        </CustomModal>
    )
}

export default RegistrationModal;