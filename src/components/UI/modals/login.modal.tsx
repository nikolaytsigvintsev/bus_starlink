'use client'

import CustomModal from '@/components/common/modal';
import { LoginForm } from '@/forms/login.form';

// size?: "sm" | "md" | "lg" | "xl";
export interface RegistrationModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const LoginModal = ({
    isOpen,
    onClose,
}: RegistrationModalProps) => {
    return (
        <CustomModal isOpen={isOpen} onClose={onClose} size="md" title="Authentication">
            <LoginForm onClose={onClose} />
        </CustomModal>
    )
}

export default LoginModal;