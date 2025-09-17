'use client';

import { Button } from "@heroui/react";
import Link from "next/link";

const NotFoundPage = () => {
    return (
        <div style={{
            minHeight: "60vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "2rem"
        }}>
            <h1 style={{ fontSize: "2rem", fontWeight: 700 }}>Page Not Found</h1>
            <Button as={Link} href="/" color="primary" variant="solid">
                Go Home
            </Button>
        </div>
    );
};

export default NotFoundPage;