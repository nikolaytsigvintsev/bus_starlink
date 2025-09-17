import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
} from "@heroui/react";

export interface CustomModalProps {
    isOpen: boolean;
    onClose: () => void;
    size?: "sm" | "md" | "lg" | "xl";
    title?: React.ReactNode;
    children?: React.ReactNode;
}

export default function CustomModal({
    isOpen,
    onClose,
    size = "md",
    title,
    children,
}: CustomModalProps) {

    return (
        <Modal className={"bg-neutral-900 text-white"} isOpen={isOpen} onClose={onClose} size={size}>
            <ModalContent>
                <>
                    <ModalHeader className="flex flex-col gap-1">{title}</ModalHeader>
                    <ModalBody>{children}</ModalBody>
                </>
            </ModalContent>
        </Modal>
    );
}
